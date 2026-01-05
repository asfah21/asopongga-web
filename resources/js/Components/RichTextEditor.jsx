import React, { useEffect, useRef } from 'react';

class MyUploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file
            .then(file => new Promise((resolve, reject) => {
                this._initRequest();
                this._initListeners(resolve, reject, file);
                this._sendRequest(file);
            }));
    }

    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }

    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();
        xhr.open('POST', route('posts.upload.image'), true);
        xhr.responseType = 'json';

        // Laravel CSRF Token
        const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (token) {
            xhr.setRequestHeader('X-CSRF-TOKEN', token);
        }
        xhr.setRequestHeader('Accept', 'application/json');
    }

    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = `Couldn't upload file: ${file.name}.`;

        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
            const response = xhr.response;

            if (!response || response.error) {
                return reject(response && response.error ? response.error : genericErrorText);
            }

            resolve({
                default: response.url
            });
        });

        if (xhr.upload) {
            xhr.upload.addEventListener('progress', evt => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }

    _sendRequest(file) {
        const data = new FormData();
        data.append('upload', file);
        this.xhr.send(data);
    }
}

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new MyUploadAdapter(loader);
    };
}

export default function RichTextEditor({ value, onChange, placeholder }) {
    const editorRef = useRef(null);
    const editorInstance = useRef(null);

    useEffect(() => {
        const initEditor = () => {
            if (typeof window !== 'undefined' && window.ClassicEditor && editorRef.current && !editorInstance.current) {
                window.ClassicEditor
                    .create(editorRef.current, {
                        placeholder: placeholder || 'Write something...',
                        extraPlugins: [MyCustomUploadAdapterPlugin],
                        toolbar: [
                            'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
                            'imageUpload', 'blockQuote', 'insertTable', 'undo', 'redo'
                        ],
                    })
                    .then(editor => {
                        editorInstance.current = editor;
                        editor.setData(value || '');
                        editor.model.document.on('change:data', () => {
                            const data = editor.getData();
                            onChange(data);
                        });
                    })
                    .catch(error => {
                        console.error('Error initializing CKEditor:', error);
                    });
            }
        };

        const timer = setTimeout(initEditor, 500);

        return () => {
            clearTimeout(timer);
            if (editorInstance.current) {
                editorInstance.current.destroy()
                    .then(() => {
                        editorInstance.current = null;
                    })
                    .catch(err => console.log('Destroy error', err));
            }
        };
    }, []);

    useEffect(() => {
        if (editorInstance.current) {
            const currentData = editorInstance.current.getData();
            if (value !== currentData) {
                editorInstance.current.setData(value || '');
            }
        }
    }, [value]);

    return (
        <div className="prose max-w-none">
            <div ref={editorRef} className="min-h-[400px]"></div>
            <style>{`
                .ck-editor__editable_inline {
                    min-height: 400px;
                }
            `}</style>
        </div>
    );
}

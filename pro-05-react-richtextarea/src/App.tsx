import React, {useRef} from 'react';
import {Editor} from "@tinymce/tinymce-react";
import './App.css';

function App() {
    const editorRef: React.MutableRefObject<any> = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    const insertCustomTag = () => {
        if (editorRef.current) {
            // The class custom-blue-text inside the text area won't work because it's using iframe.
            editorRef.current.insertContent('<span class="custom-blue-text">Your text here</span>');
        }
    };
    return (
        <>
            <span className={"custom-blue-text"}>TEST</span>
            <Editor
                tinymceScriptSrc='/tinymce/tinymce.min.js'
                licenseKey='gpl' /*  Please view more in https://www.tiny.cloud/docs/tinymce/latest/license-key/ */
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue='<p>This is the initial content of the editor.</p>'
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button onClick={log}>Log editor content</button>
            <button onClick={insertCustomTag}>Insert Custom Tag</button>
        </>
    );
}

export default App;

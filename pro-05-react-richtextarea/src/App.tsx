import React, {useCallback, useState} from 'react';
import {createEditor, Editor, Transforms, Element, Descendant, BaseEditor} from 'slate';
import {Editable, ReactEditor, Slate, withReact} from 'slate-react';
import {getCircularReplacer} from "./LogHelper";
// TYPES ////////////////////////////////////
declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

// TYPES ////////////////////////////////////

// Define a React component renderer for our code blocks.
const CodeElement = (props: any) => {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}
const DefaultElement = (props: any) => {
    return <p {...props.attributes}>{props.children}</p>
}

function App() {
    const [editor] = useState(() => withReact(createEditor()));
    const initialValue: CustomElement[] = [
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ];

    // Define a rendering function based on the element passed to `props`. We use
    // `useCallback` here to memoize the function for subsequent renders.
    const renderElement = useCallback((props: any) => {
        console.log('props:', JSON.stringify(props, getCircularReplacer(), 2));
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, []);
    return (
        <Slate editor={editor} initialValue={initialValue}>
            <Editable
                // Pass in the `renderElement` function.
                renderElement={renderElement}
                onKeyDown={event => {
                    if (event.key === '&') {
                        event.preventDefault()
                        editor.insertText('and')
                    }

                    if (event.key === '`' && event.ctrlKey) {
                        // Prevent the "`" from being inserted by default.
                        event.preventDefault()
                        // Otherwise, set the currently selected blocks type to "code".
                        Transforms.setNodes(
                            editor,
                            { type: 'code' },
                            { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
                        )
                    }
                }}
            />
        </Slate>
    );
}

export default App;

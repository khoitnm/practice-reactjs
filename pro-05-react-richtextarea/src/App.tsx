import React, {KeyboardEvent, useCallback, useState} from 'react';
import {BaseEditor, createEditor, Editor, Element, Transforms} from 'slate';
import {Editable, ReactEditor, Slate, withReact} from 'slate-react';
import {getCircularReplacer} from "./LogHelper";
import {RenderElementProps} from "slate-react/dist/components/editable";
// TYPES ////////////////////////////////////
declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

type CustomElement = {
    type: 'paragraph' | 'code';
    children: CustomText[]
}
type CustomText = { text: string }

// TYPES ////////////////////////////////////

// Define a React component renderer for our code blocks.
const CodeElement = (props: RenderElementProps) => {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}
const DefaultElement = (props: RenderElementProps) => {
    return <p {...props.attributes}>{props.children}</p>
}

function App() {
    const [editor] = useState(() => withReact(createEditor()));
    const initialValue: CustomElement[] = [
        {
            type: 'paragraph',
            children: [{text: 'A line of text in a paragraph.'}],
        },
    ];

    // Define a rendering function based on the element passed to `props`. We use
    // `useCallback` here to memoize the function for subsequent renders.
    const renderElement = useCallback((props: RenderElementProps): React.ComponentElement<any, any> => {
        const editorElement: Element = props.element;
        console.log(`elementType: ${editorElement.type}, props:`, JSON.stringify(editorElement, getCircularReplacer(), 2));
        if (editorElement.type === 'code') {
            return <CodeElement {...props}/>
        } else {
            return <DefaultElement {...props} />
        }
    }, []);
    return (
        <Slate editor={editor} initialValue={initialValue}>
            <Editable
                // Pass in the `renderElement` function.
                renderElement={renderElement}
                onKeyDown={(event: KeyboardEvent) => {
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
                            {type: 'code'},
                            {match: (n: any) => Element.isElement(n) && Editor.isBlock(editor, n)}
                        )
                    }
                }}
            />
        </Slate>
    );
}

export default App;

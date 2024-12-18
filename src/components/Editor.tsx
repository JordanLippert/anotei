import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { initialContent } from './initialContent';
import { common, createLowlight } from 'lowlight';
import 'highlight.js/styles/tokyo-night-dark.css';
import {
    RxFontBold,
    RxFontItalic,
    RxStrikethrough,
    RxCode,
    RxChevronDown,
    RxChatBubble,
} from 'react-icons/rx';
import { BubbleButton } from './BubbleButton';

const lowlight = createLowlight(common);
const tree = lowlight.highlight('js', '"use strict";');
console.log(tree, {depth: undefined});

export function Editor() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            CodeBlockLowlight.configure({
                lowlight,
            }),
        ],
        content: initialContent,
        editorProps: {
            attributes: {
                class: 'outline-none',
            }
        }
    })

    return (
        <>
          <EditorContent 
            className="max-w-[600] mx-auto pt-16 prose prose-orange" 
            editor={editor}
          />
          {editor && (
            <FloatingMenu
                editor={editor} 
                className="bg-white py-2 px-1 shadow-xl border gap-1 border-zinc-400 shadow-black/15 rounded-lg overflow-hidden flex flex-col"
                shouldShow={({ state }) => {
                    const { $from } = state.selection
                    const currentLineText = $from.nodeBefore?.textContent

                    return currentLineText === '/'
                }}
            >
                <button className="flex items-center gap-2 p-1 rounded min-w-[200px] hover:bg-zinc-400">
                    <img 
                        src="https://www.notion.so/images/blocks/text/en-US.png" 
                        alt="Text" 
                        className="w-12 border border-zinc-400 rounded"
                    />
                    <div className="flex flex-col text-left">
                        <span className="text-sm">Text</span>
                        <span className="text-xs text-zinc-700">
                            Just start writing with plain text.
                        </span>
                    </div>
                </button>

                <button 
                    className="flex items-center gap-2 p-1 rounded min-w-[200px] hover:bg-zinc-400"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                >
                    <img 
                        src="https://www.notion.so/images/blocks/header.57a7576a.png" 
                        alt="Heading" 
                        className="w-12 border border-zinc-400 rounded"
                    />
                    <div className="flex flex-col text-left">
                        <span className="text-sm">Heading 1</span>
                        <span className="text-xs text-zinc-700">
                            Big section heading.
                        </span>
                    </div>
                </button>
            </FloatingMenu>
            )}
          {editor && (
            <BubbleMenu className="bg-white shadow-xl border border-zinc-400 shadow-black/15 rounded-lg overflow-hidden flex divide-x divide-zinc-400" editor={editor}>
                <BubbleButton>
                    Text
                    <RxChevronDown className="w-4 h-4"/>
                </BubbleButton>
                <BubbleButton>
                    Comment
                    <RxChatBubble className="w-4 h-4"/>
                </BubbleButton>
                <div className="flex items-center">
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        data-active={editor.isActive('bold')}
                    >
                        <RxFontBold className="w-4 h-4"/>
                    </BubbleButton>
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        data-active={editor.isActive('italic')}
                    >
                        <RxFontItalic className="w-4 h-4"/>
                    </BubbleButton>
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        data-active={editor.isActive('strike')}
                    >
                        <RxStrikethrough className="w-4 h-4"/>
                    </BubbleButton>
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        data-active={editor.isActive('code')}
                    >
                        <RxCode className="w-4 h-4"/>
                    </BubbleButton>
                </div>
            </BubbleMenu>
          )}
        </>
    )
}
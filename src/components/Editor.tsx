//React
import { useState } from "react";
// TipTap
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import { initialContent } from "../initialContent";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Highlight from "@tiptap/extension-highlight";
import BoldIcon from "../icons/bold";
import ItalicIcon from "../icons/italic";
import CommentIcon from "../icons/comment";
import StrikeIcon from "../icons/strike";
import ChevronDownIcon from "../icons/chevron-down";
type Level = 1 | 2 | 3 | 4 | 5 | 6;

export default function Editor() {
  const editor = useEditor({
    onUpdate({ editor }) {
      console.log(editor.getHTML().match(/<mark>(.*?)<\/mark>/));
    },
    extensions: [
      StarterKit,
      Paragraph,
      Heading.configure({
        levels: [1, 2],
        HTMLAttributes: {
          class: "comment",
        },
      }),
      Highlight.configure({ multicolor: true }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "editor",
      },
    },
  });

  const [selection, setSelection] = useState(false);
  const handleSelectionToggle = () => {
    setSelection(!selection);
  };

  const handleHeadingSelection = (level: Level) => {
    if (editor) {
      editor.commands.setHeading({ level: level });
      setSelection(false);
    }
  };

  const handleParagraphSelection = () => {
    if (editor) {
      editor.commands.setParagraph();
      setSelection(false);
    }
  };

  const handleCommentSelection = () => {
    if (editor) {
      editor.commands.toggleHighlight({ color: "#ffcc00" });
    }
  };

  return (
    <>
      <EditorContent editor={editor} />
      {editor && (
        <BubbleMenu editor={editor} className="bubble">
          <div>
            <button className="min-w" onClick={handleSelectionToggle}>
              Text <ChevronDownIcon size={12} />
            </button>
            <div className={selection ? "visible absolute" : "non-visible"}>
              <button
                onClick={() => handleHeadingSelection(1)}
                className="min-w"
              >
                Head
              </button>
              <button
                onClick={() => handleHeadingSelection(2)}
                className="min-w"
              >
                Subtitle
              </button>
              <button onClick={handleParagraphSelection} className="min-w">
                paragraph
              </button>
            </div>
          </div>
          <button onClick={handleCommentSelection}>
            <CommentIcon size={12} />
            Comentário
          </button>
          <button onClick={() => editor.chain().focus().toggleBold().run()}>
            <BoldIcon size={12} />
          </button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()}>
            <ItalicIcon size={12} />
          </button>
          <button onClick={() => editor.chain().focus().toggleStrike().run()}>
            <StrikeIcon size={12} />
          </button>
        </BubbleMenu>
      )}
    </>
  );
}

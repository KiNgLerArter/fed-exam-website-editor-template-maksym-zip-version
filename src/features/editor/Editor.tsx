import { EditorCanvas } from "./editor-canvas/EditorCanvas";
import { EditorSidebar } from "./editor-sidebar/EditorSidebar";

export const Editor = () => {
  return (
    <div className="editor">
      <EditorCanvas />
      <EditorSidebar />
    </div>
  );
};

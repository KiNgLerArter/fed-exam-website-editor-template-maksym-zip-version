import { EditorCanvas } from "./editor-canvas/EditorCanvas";
import { EditorForm } from "./editor-form/EditorForm";

export const Editor = () => {
  return (
    <div className="editor">
      <EditorCanvas />
      <EditorForm />
    </div>
  );
};

export interface EditorRowItem {
  id: string;
  columns: EditorColumnItem[];
}

export type EditorColumnItem = EditorTextColumn | EditorImageColumn;

export const isRow = (item: EditorRowItem | EditorTextColumn | EditorImageColumn): item is EditorRowItem =>
  "columns" in item;

export const isTextColumn = (column: EditorTextColumn | EditorImageColumn): column is EditorTextColumn =>
  "content" in column;

export interface EditorTextColumn extends EditorColumn {
  content: string;
  textAlign: "center" | "left" | "right";
}

export interface EditorImageColumn extends EditorColumn {
  url: string;
}

interface EditorColumn {
  id: string;
  parentRowId: string;
}

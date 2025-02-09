export interface EditorTextColumn extends EditorColumn {
  content: string;
  textAlign: "center" | "left" | "right";
}

export interface EditorImageColumn extends EditorColumn {
  url: string;
}

export type EditorColumnItem = EditorTextColumn | EditorImageColumn;

export interface EditorRowItem {
  id: string;
  columns: EditorColumnItem[];
}

export const isRow = (item: EditorRowItem | EditorColumnItem): item is EditorRowItem => "columns" in item;

export const isTextColumn = (column: EditorColumnItem): column is EditorTextColumn => "content" in column;

interface EditorColumn {
  id: string;
  parentRowId: string;
}

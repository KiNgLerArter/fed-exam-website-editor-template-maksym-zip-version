import { atomWithStorage } from "jotai/utils";
import { EditorColumnItem, EditorRowItem } from "./Editor";
import { atom, useAtomValue, useSetAtom } from "jotai";

export const useEditorContentValue = () => ({
  editorContent: useAtomValue(editorContentAtom),
});

export const useEditorContentSetters = () => ({
  addRow: useSetAtom(addRowAtom),
  addColumn: useSetAtom(addColumnAtom),
  editColumn: useSetAtom(editColumnAtom),
});

export const selectedItemAtom = atomWithStorage<EditorRowItem | EditorColumnItem | null>(
  "features:editor:selectedItem",
  null
);

/**
 * 1. If we'll meet performance issues later(which I deeply doubt), we can replace array with Map and optimize iterations but for now it's over-engineering
 * 2. We don't export editorContentAtom for safety so other devs cannot set atom value directly and are forced to use setters(encapsulation)
 * */
const editorContentAtom = atomWithStorage<EditorRowItem[]>("features:editor:content", []);

const addRowAtom = atom(null, (get, set, row: EditorRowItem) =>
  set(editorContentAtom, [...get(editorContentAtom), row])
);

const addColumnAtom = atom(null, (get, set, columnToAdd: EditorColumnItem) => {
  const currContent = get(editorContentAtom);
  const parentIndex = currContent.findIndex(({ id }) => columnToAdd.parentRowId === id);

  if (parentIndex === -1) {
    throw new Error("Trying to add a column to a non-existent row");
  }

  const parentRow = currContent[parentIndex];
  return set(editorContentAtom, [
    ...currContent.toSpliced(parentIndex, 1, { ...parentRow, columns: [...parentRow.columns, columnToAdd] }),
  ]);
});

const editColumnAtom = atom(null, (get, set, columnToEdit: EditorColumnItem) => {
  set(selectedItemAtom, columnToEdit);
  set(
    editorContentAtom,
    get(editorContentAtom).map((row) => {
      const { columns } = row;
      const index = columns.findIndex(({ id }) => columnToEdit.id === id);

      return { ...row, columns: index === -1 ? columns : columns.toSpliced(index, 1, columnToEdit) };
    })
  );
});

import { useAtom } from "jotai";
import { EditorColumnItem, isRow } from "../Editor";
import { selectedItemAtom, useEditorContentSetters } from "../editor.store";
import { EditorFormColumnSection } from "./EditorFormColumnSection";

export const EditorFormRowSection = () => {
  const [selectedItem, setSelectedItem] = useAtom(selectedItemAtom);
  const { addColumn } = useEditorContentSetters();

  if (!selectedItem) {
    return null;
  }

  return (
    <>
      <div className="section">
        <div className="section-header">Row</div>
        <div className="actions">
          <button
            className="action"
            onClick={() => {
              const newColumn: EditorColumnItem = {
                id: crypto.randomUUID(),
                parentRowId: isRow(selectedItem) ? selectedItem.id : selectedItem.parentRowId,
                content: "",
                textAlign: "left",
              };
              addColumn(newColumn);
              setSelectedItem(newColumn);
            }}
          >
            Add column
          </button>
        </div>
      </div>

      <EditorFormColumnSection />
    </>
  );
};

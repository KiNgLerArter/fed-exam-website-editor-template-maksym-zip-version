import { useSetAtom } from "jotai";
import { selectedItemAtom, useEditorContentSetters } from "../editor.store";
import { EditorFormRowSection } from "./EditorFormRowSection";

export const EditorForm = () => {
  const { addRow } = useEditorContentSetters();
  const setSelectedItem = useSetAtom(selectedItemAtom);

  return (
    <div className="properties">
      <div className="section">
        <div className="section-header">Page</div>
        <div className="actions">
          <button
            className="action"
            onClick={() => {
              const newRow = { id: crypto.randomUUID(), columns: [] };
              addRow(newRow);
              setSelectedItem(newRow);
            }}
          >
            Add row
          </button>
        </div>
      </div>

      <EditorFormRowSection />
    </div>
  );
};

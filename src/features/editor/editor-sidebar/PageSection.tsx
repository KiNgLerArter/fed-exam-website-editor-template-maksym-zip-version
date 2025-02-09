import { useSetAtom } from "jotai";
import { useEditorContentSetters, selectedItemAtom } from "../editor.store";

export const PageSection = () => {
  const { addRow } = useEditorContentSetters();
  const setSelectedItem = useSetAtom(selectedItemAtom);

  return (
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
  );
};

import { useAtomValue } from "jotai";
import { Icons } from "../icons";
import { selectedItemAtom, useEditorContentSetters } from "../editor.store";
import classNames from "classnames";
import { isRow, isTextColumn } from "../editor.model";

export const ColumnSection = () => {
  const { editColumn } = useEditorContentSetters();
  const selectedItem = useAtomValue(selectedItemAtom);

  if (!selectedItem || isRow(selectedItem)) {
    return null;
  }

  const isTextCol = isTextColumn(selectedItem);

  return (
    <div className="section">
      <div className="section-header">Column</div>
      <div className="button-group-field">
        <label>Contents</label>
        <div className="button-group">
          <button
            onClick={() => {
              if (isTextCol) {
                return;
              }

              editColumn({
                id: selectedItem.id,
                parentRowId: selectedItem.parentRowId,
                content: "",
                textAlign: "left",
              });
            }}
            className={classNames({ selected: isTextCol })}
          >
            <Icons.Text />
          </button>
          <button
            onClick={() => {
              if (!isTextCol) {
                return;
              }

              editColumn({ id: selectedItem.id, parentRowId: selectedItem.parentRowId, url: "" });
            }}
            className={classNames({ selected: !isTextCol })}
          >
            <Icons.Image />
          </button>
        </div>
      </div>
    </div>
  );
};

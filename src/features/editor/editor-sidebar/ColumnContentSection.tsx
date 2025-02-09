import classNames from "classnames";
import { useAtomValue } from "jotai";
import { isRow, isTextColumn } from "../editor.model";
import { useEditorContentSetters, selectedItemAtom } from "../editor.store";
import { Icons } from "../icons";

export const ColumnContentSection = () => {
  const { editColumn } = useEditorContentSetters();
  const selectedItem = useAtomValue(selectedItemAtom);

  if (!selectedItem || isRow(selectedItem)) {
    return null;
  }

  const isTextCol = isTextColumn(selectedItem);

  return (
    <div className="section">
      {isTextCol ? (
        <>
          <div className="section-header">Text</div>
          <div className="button-group-field">
            <label>Alignment</label>
            <div className="button-group">
              {textAlignButtons.map(({ textAlign, icon }) => (
                <button
                  key={textAlign}
                  onClick={() => editColumn({ ...selectedItem, textAlign })}
                  className={classNames({ selected: selectedItem.textAlign === textAlign })}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              rows={8}
              placeholder="Enter text"
              value={selectedItem.content}
              onInput={(event) => editColumn({ ...selectedItem, content: event.currentTarget.value })}
            ></textarea>
          </div>
        </>
      ) : (
        <>
          <div className="section-header">Image</div>
          <div className="text-field">
            <label htmlFor="image-url">URL</label>
            <input
              id="image-url"
              type="text"
              onInput={(event) => editColumn({ ...selectedItem, url: event.currentTarget.value })}
            />
          </div>
        </>
      )}
    </div>
  );
};

const textAlignButtons = [
  { textAlign: "left", icon: <Icons.TextAlignLeft /> },
  { textAlign: "center", icon: <Icons.TextAlignCenter /> },
  { textAlign: "right", icon: <Icons.TextAlignRight /> },
] as const;

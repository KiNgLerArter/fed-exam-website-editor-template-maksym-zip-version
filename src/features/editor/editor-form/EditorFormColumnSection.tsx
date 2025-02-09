import { useAtomValue } from "jotai";
import { EditorTextColumn, isRow, isTextColumn } from "../Editor";
import { Icons } from "../icons";
import { selectedItemAtom, useEditorContentSetters } from "../editor.store";
import classNames from "classnames";

export const EditorFormColumnSection = () => {
  const { editColumn } = useEditorContentSetters();
  const selectedItem = useAtomValue(selectedItemAtom);

  if (!selectedItem || isRow(selectedItem)) {
    return null;
  }

  const setColumnTextAlign = (textAlign: EditorTextColumn["textAlign"]) => editColumn({ ...selectedItem, textAlign });

  return (
    <>
      <div className="section">
        <div className="section-header">Column</div>
        <div className="button-group-field">
          <label>Contents</label>
          <div className="button-group">
            <button className="selected">
              <Icons.Text />
            </button>
            <button>
              <Icons.Image />
            </button>
          </div>
        </div>
      </div>

      {isTextColumn(selectedItem) ? (
        <div className="section">
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
        </div>
      ) : (
        <div className="section">
          <div className="section-header">Image</div>
          <div className="text-field">
            <label htmlFor="image-url">URL</label>
            <input id="image-url" type="text" />
          </div>
        </div>
      )}
    </>
  );
};

const textAlignButtons = [
  { textAlign: "left", icon: <Icons.TextAlignLeft /> },
  { textAlign: "center", icon: <Icons.TextAlignCenter /> },
  { textAlign: "right", icon: <Icons.TextAlignRight /> },
] as const;

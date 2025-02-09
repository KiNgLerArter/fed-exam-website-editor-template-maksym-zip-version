import Markdown from "markdown-to-jsx";
import { Column } from "./Column";
import { Stage } from "./Stage";
import { Row } from "./Row";
import { selectedItemAtom, useEditorContentValue } from "../editor.store";
import { useSetAtom } from "jotai";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { isTextColumn } from "../editor.model";

export const EditorCanvas = () => {
  const { editorContent } = useEditorContentValue();
  const setSelectedItem = useSetAtom(selectedItemAtom);

  return (
    <Stage>
      {editorContent.map((row) => (
        <Row key={row.id} onSelect={() => setSelectedItem(row)}>
          {row.columns.map((column) => {
            return (
              <Column key={column.id} onSelect={() => setSelectedItem(column)}>
                {isTextColumn(column) ? (
                  <Markdown className={`text-align-${column.textAlign}`}>{column.content}</Markdown>
                ) : column.url ? (
                  <img src={column.url} alt="" />
                ) : (
                  <ImagePlaceholder />
                )}
              </Column>
            );
          })}
        </Row>
      ))}
    </Stage>
  );
};

import Markdown from "markdown-to-jsx";
import { Column } from "./Column";
import { isTextColumn } from "../Editor";
import { Page } from "../Page";
import { Row } from "./Row";
import { selectedItemAtom, useEditorContentValue } from "../editor.store";
import { useSetAtom } from "jotai";

export const EditorCanvas = () => {
  const { editorContent } = useEditorContentValue();
  const setSelectedItem = useSetAtom(selectedItemAtom);

  console.log({ editorContent });
  return (
    <Page>
      {editorContent.map((row) => (
        <Row key={row.id} onSelect={() => setSelectedItem(row)}>
          {row.columns.map((column) => {
            return (
              <Column key={column.id} onSelect={() => setSelectedItem(column)}>
                {isTextColumn(column) ? (
                  <Markdown className={`text-align-${column.textAlign}`}>{column.content}</Markdown>
                ) : (
                  <img src={column.url} alt="" />
                )}
              </Column>
            );
          })}
        </Row>
      ))}
    </Page>
  );
};

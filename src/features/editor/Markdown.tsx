import MarkdownBase, { MarkdownToJSX } from "markdown-to-jsx";

export const Markdown = (props: {
  id?: string;
  className?: string;
  children: string;
  options?: MarkdownToJSX.Options;
}) => <MarkdownBase {...props} options={{ forceBlock: true, ...props.options }} />;

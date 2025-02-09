import classNames from "classnames";
import { SelectableContainer } from "../../ui-kit/selectable-container";

export const Column = ({
  selected,
  ...props
}: {
  children?: React.ReactNode;
  selected?: boolean;
  onSelect?(): void;
}) => <SelectableContainer className={classNames("column", { selected })} {...props} />;

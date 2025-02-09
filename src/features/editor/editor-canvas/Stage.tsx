import classNames from "classnames";
import { SelectableContainer } from "../../../ui-kit/selectable-container";

export const Stage = ({
  selected,
  ...props
}: {
  children?: React.ReactNode;
  selected?: boolean;
  onSelect?(): void;
}) => <SelectableContainer className={classNames("stage", { selected })} {...props} />;

import classNames from "classnames";
import { SelectableContainer } from "../../../ui-kit/selectable-container";

export const Row = ({ selected, ...props }: { children?: React.ReactNode; selected?: boolean; onSelect?(): void }) => (
  <SelectableContainer className={classNames("row", { selected })} {...props} />
);

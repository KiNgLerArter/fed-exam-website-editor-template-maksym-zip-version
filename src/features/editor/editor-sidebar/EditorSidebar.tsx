import { RowSection } from "./RowSection";
import { ColumnSection } from "./ColumnSection";
import { ColumnContentSection } from "./ColumnContentSection";
import { PageSection } from "./PageSection";

export const EditorSidebar = () => (
  <div className="properties">
    <PageSection />
    <RowSection />
    <ColumnSection />
    <ColumnContentSection />
  </div>
);

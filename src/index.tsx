import ReactDOM from "react-dom/client";
import "./index.css";
import { MockEditor } from "./features/editor/MockEditor";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<MockEditor />);

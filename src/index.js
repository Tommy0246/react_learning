import ReactDOM from "react-dom";

import { App } from "./App";

const divroot = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(divroot);

reactRoot.render(<App/>);
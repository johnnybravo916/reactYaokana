import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/context";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <DataProvider>
            <BrowserRouter basename={"/yaoReact"}>
                <App />
            </BrowserRouter>
        </DataProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

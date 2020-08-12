import React from "react";
import { hydrate, render, ReactDOM } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/context";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(
        <React.StrictMode>
            <DataProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </DataProvider>
        </React.StrictMode>,
        rootElement
    );
} else {
    render(
        <React.StrictMode>
            <DataProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </DataProvider>
        </React.StrictMode>,
        rootElement
    );
}

import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <main>Maksim Ermolaev</main>;
}

const rootElement = document.createElement("div");
rootElement.setAttribute("id", "app-root");

document.body.appendChild(rootElement);

const root = createRoot(rootElement);
root.render(<App />);

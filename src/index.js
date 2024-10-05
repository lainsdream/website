import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  color: rgb(61, 61, 61);
  font-family: "Atlas Grotesk LC Web", sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <main>
        <div>
          <h1>Maksim Ermolaev</h1>
        </div>
      </main>
    </Wrapper>
  );
}

const rootElement = document.createElement("div");
rootElement.setAttribute("id", "app");

document.body.appendChild(rootElement);

const root = createRoot(rootElement);
root.render(<App />);

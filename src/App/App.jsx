import React from "react";
import { LayoutHome } from "./components/LayoutHome";
import styled from "styled-components";
import {Home} from "../Home"
function App() {
  return (
    <>
      <LayoutHome>
        <Home />
      </LayoutHome>
    </>
  );
}

export { App };

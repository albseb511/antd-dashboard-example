import { Row } from "antd";
import React from "react";
import { Sidebar } from "./Sidebar";

const LayoutHome = ({ children }) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
};

export { LayoutHome };

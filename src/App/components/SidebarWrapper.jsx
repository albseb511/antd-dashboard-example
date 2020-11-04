import React from "react";
import styled from "styled-components";

const width = 80;

const MainSidebarWrapper = styled.div`
  width: ${width}px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`;

const SidebarWrapper = styled.div`
  width: ${width}px;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding: 0;
  border-bottom-right-radius: 1rem;
  background: #fafafa;

  & ul,
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: transparent;
    border-bottom-right-radius: 1rem;
  }

  & :first-child {
    flex: 2;
  }
  & .logo-icon-sidebar {
    padding: 5px;
    width: 100%;
  }

  & ul {
  }
`;

const BottomSidebarWrapper = styled.div`
  margin-top: 50px;
  background: #fafafa;
  width: ${width}px;
  height: 100%;
  border-top-right-radius: 1rem;
  padding: 0.2rem;
  text-align: center;

  & > * {
    height: 100px;
  }
`;

const IconWrapper = styled.img`
  margin: 0.5rem;
  background: lightgreen;
  border-radius: 5px;
  width: ${width - 15}px;
  filter: invert(100%);
  padding: 10px;
`;

const PageContainer = styled.div`
  margin-left: ${width}px;
  padding: 1rem;
  height: 100vh;
  overflow: auto;
`;

export {
  PageContainer,
  IconWrapper,
  SidebarWrapper,
  MainSidebarWrapper,
  BottomSidebarWrapper,
};

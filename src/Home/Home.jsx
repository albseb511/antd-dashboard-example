import React from "react";
import { Row, Col, Typography } from "antd";
import { Scores } from "./components/Scores";
import {Achievements} from "./components/Achievements";
import {Container} from "../common"
import {Messages} from "./components/Messages"

const Home = () => {
  return (
    <>
      <Row span={24} justify="center">
        <Col xl={11} xs={24} sm={24} md={12} lg={12}>
          <Container style={{ paddingTop: 30 }}>
            <Scores />
          </Container>
        </Col>
        <Col xl={6} xs={24} sm={24} md={6} lg={6}>
          <Container>
            <Achievements/>
          </Container>
        </Col>
        <Col xl={6} xs={24} sm={24} md={6} lg={6}>
          <Container>
            <Messages />
          </Container>
        </Col>
      </Row>
    </>
  );
};

export { Home };

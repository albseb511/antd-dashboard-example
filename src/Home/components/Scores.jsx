import React from "react";
import { Row, Col, Typography } from "antd";
import { DatePicker, Select } from "antd";
import { LineChart } from "./Chart"
const { Option } = Select;

const Scores = () => {
  return (
    <>
      <Typography.Title level={3}>Average Scores</Typography.Title>
      <Row>
        <Col>
          <DatePicker picker="year" />
        </Col>
        <Col>
          <Select defaultValue="math" style={{ width: 120 }}>
            <Option value="math">Maths</Option>
            <Option value="eng">English</Option>
            <Option value="sci"> Science </Option>
            <Option value="econ">Economics</Option>
          </Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <LineChart />
        </Col>
      </Row>
    </>
  );
};

export { Scores };

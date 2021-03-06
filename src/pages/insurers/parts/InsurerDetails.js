import React from "react";
import { Card, Row, Form, Input } from "antd";

import InputCol from "../../../components/InputCol";

export default function InsurerDetails() {
  return (
    <Card title="Vehicle details">
      <Row gutter={16}>
        <InputCol>
          <Form.Item
            label="Issuer name"
            name="name"
            rules={[
              { required: true, message: "Insurer name is required" },
              {
                pattern: /^[a-zA-Z0-9\s]{2,}$/,
                message:
                  "At least 2 characters and no contain special characters.",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </InputCol>
        <InputCol>
          <Form.Item
            label="Phone number"
            name="phoneNumber"
            rules={[
              {
                pattern: /^0(7\d{1}|20)\d{7}$/,
                message: "Invalid format",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </InputCol>
      </Row>
      <Row gutter={16}>
        <InputCol>
          <Form.Item
            label="Address"
            name="addressNumber"
            rules={[
              { required: true, message: "Address number is required" },
              {
                pattern: /^[a-zA-Z0-9\s]{1,}$/,
                message: "Invalid address",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </InputCol>
        <InputCol>
          <Form.Item
            label="Postal code"
            name="addressCode"
            rules={[
              { required: true, message: "Postal code is required" },
              {
                pattern: /^[0-9]{1,}$/,
                message: "Value should be a number",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </InputCol>
        <InputCol>
          <Form.Item
            label="Town"
            name="addressTown"
            rules={[
              { required: true, message: "Address town is required" },
              {
                pattern: /^[a-zA-Z\s]{2,}$/,
                message: "Invalid town name",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </InputCol>
      </Row>
    </Card>
  );
}

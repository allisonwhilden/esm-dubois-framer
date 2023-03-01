// @ts-nocheck
import "../node_modules/@databricks/design-system/dist/index.css";
import React from "react";
import { Select, DesignSystemProvider } from "@databricks/design-system";

export function DuboisSelect() {
  return (
    <>
      <DesignSystemProvider>
        <Select
          style={{
            width: 300,
          }}
        >
          <Select.Option value="pie">Pie</Select.Option>
          <Select.Option value="bar">Bar</Select.Option>
          <Select.Option value="line">Line</Select.Option>
          <Select.Option value="bubble">Bubble</Select.Option>
          <Select.Option value="column">Column</Select.Option>
          <Select.Option value="scatter">Scatter</Select.Option>
          <Select.Option value="waterfall">Waterfall</Select.Option>
        </Select>
      </DesignSystemProvider>
    </>
  );
}

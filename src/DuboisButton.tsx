// @ts-nocheck
// import "@databricks/design-system/dist/index.css";
// import "@databricks/design-system/dist/index-dark.css";
import "./DuboisButton.modules.css";
import React from "react";
import {
  Button,
  Switch,
  DesignSystemProvider,
} from "@databricks/design-system";

export function DuboisButton() {
  return (
    <div>
      <DesignSystemProvider>
        <Button>asdfasdf</Button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Switch defaultChecked />
          <label>Label</label>
        </div>
      </DesignSystemProvider>
    </div>
  );
}

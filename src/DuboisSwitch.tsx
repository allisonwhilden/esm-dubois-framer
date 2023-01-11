// @ts-nocheck
import "../node_modules/@databricks/design-system/dist/index.css";
import React from "react";
import { Switch, DesignSystemProvider } from "@databricks/design-system";

export function DuboisSwitch({
  label = "Label",
  checked = false,
  onClick = () => {},
}) {
  return (
    <div>
      <DesignSystemProvider>
        <Switch label={label} checked={checked} onClick={onClick} />
      </DesignSystemProvider>
    </div>
  );
}

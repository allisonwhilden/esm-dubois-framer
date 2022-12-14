// @ts-nocheck
import "../node_modules/@databricks/design-system/dist/index.css";
import React from "react";
import { Button, DesignSystemProvider } from "@databricks/design-system";

export function DuboisButton({
  title = "Title",
  type = "default",
  danger = false,
  disabled = false,
  size = "default",
  loading = false,
  onClick = () => {},
}) {
  return (
    <div>
      <DesignSystemProvider>
        <Button
          danger={danger}
          type={type}
          disabled={disabled}
          size={size}
          loading={loading}
          block={true}
          onClick={onClick}
        >
          {title}
        </Button>
      </DesignSystemProvider>
    </div>
  );
}

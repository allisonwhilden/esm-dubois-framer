// @ts-nocheck
import "../node_modules/@databricks/design-system/dist/index.css";
import React from "react";
import { SplitButton, DesignSystemProvider } from "@databricks/design-system";

export function DuboisSplitButton({
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
        <SplitButton
          danger={danger}
          type={type}
          disabled={disabled}
          size={size}
          loading={loading}
          block={true}
          onClick={onClick}
        >
          {title}
        </SplitButton>
      </DesignSystemProvider>
    </div>
  );
}

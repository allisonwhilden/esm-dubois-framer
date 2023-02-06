// @ts-nocheck
import "../node_modules/@databricks/design-system/dist/index.css";
import React from "react";
import { Button, DesignSystemProvider } from "@databricks/design-system";
import loadable from "@loadable/component";

export function DuboisButton({
  title = "Title",
  type = "default",
  danger = false,
  disabled = false,
  size = "default",
  loading = false,
  onClick = () => {},
  showIcon = true,
  icon = "DataIcon",
}) {
  let Icon = "";

  if (showIcon) {
    Icon = loadable(() => import("@databricks/design-system"), {
      resolveComponent: (components) => components[icon],
    });
  }

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
          icon={showIcon && <Icon />}
        >
          {title}
        </Button>
      </DesignSystemProvider>
    </div>
  );
}

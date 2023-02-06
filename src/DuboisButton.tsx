// @ts-nocheck
import "../node_modules/@databricks/design-system/dist/index.css";
import React from "react";
import {
  Button,
  DesignSystemProvider,
  ApplyDesignSystemFlags,
} from "@databricks/design-system";
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
  version = "v2",
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
        <ApplyDesignSystemFlags flags={{ USE_NEW_ICONS: version === "v2" }}>
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
        </ApplyDesignSystemFlags>
      </DesignSystemProvider>
    </div>
  );
}

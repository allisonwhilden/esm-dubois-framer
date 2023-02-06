// @ts-nocheck
import "../node_modules/@databricks/design-system/dist/index.css";
import React, { lazy } from "react"; //https://www.commoninja.com/blog/react-dynamic-imports-and-how-to-use-them
import {
  Icon,
  DesignSystemProvider,
  ApplyDesignSystemFlags,
} from "@databricks/design-system";
import loadable from "@loadable/component";

export function DuboisIcon({
  icon = "DataIcon",
  version = "v2",
  color = "default",
  colorhex = "#FF3621",
}) {
  const Icon = loadable(() => import("@databricks/design-system"), {
    resolveComponent: (components) => components[icon],
  });

  return (
    <div>
      <DesignSystemProvider>
        <ApplyDesignSystemFlags flags={{ USE_NEW_ICONS: version === "v2" }}>
          <Icon
            color={
              color === "default" ? "" : color === "custom" ? colorhex : color
            }
          />
        </ApplyDesignSystemFlags>
      </DesignSystemProvider>
    </div>
  );
}

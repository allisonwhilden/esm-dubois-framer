// @ts-nocheck
import "../node_modules/@databricks/design-system/dist/index.css";
import React from "react";
import { Tag, DesignSystemProvider } from "@databricks/design-system";

export function DuboisTag({ tooltip = "This is a tag", text = "Tag" }) {
  return (
    <div>
      <DesignSystemProvider>
        <Tag title={tooltip}>{text}</Tag>
      </DesignSystemProvider>
    </div>
  );
}

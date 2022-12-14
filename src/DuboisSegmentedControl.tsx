// @ts-nocheck
import "../node_modules/@databricks/design-system/dist/index.css";
import React, { useState } from "react";
import {
  SegmentedControlGroup,
  SegmentedControlButton,
  DesignSystemProvider,
} from "@databricks/design-system";

export function DuboisSegmentedControl({
  values = ["red", "blue", "yellow"],
  startingValue = 1,
}) {
  const [value, setValue] = useState(startingValue);
  return (
    <div>
      <DesignSystemProvider>
        <SegmentedControlGroup
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        >
          {values.map((value, index) => (
            <SegmentedControlButton value={index + 1}>
              {value}
            </SegmentedControlButton>
          ))}
        </SegmentedControlGroup>
      </DesignSystemProvider>
    </div>
  );
}

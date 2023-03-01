// @ts-nocheck
// import "../node_modules/@databricks/design-system/dist/index.css";
import React from "react";
import type { ReactNode } from "react";
import {
  DropdownMenu,
  Button,
  DesignSystemProvider,
  OverflowIcon,
} from "@databricks/design-system";

export function DuboisDropdownMenu({
  items = ["Apple", "Banana"],
  trigger = <Button icon={<OverflowIcon />} />,
}): ReactNode {
  return (
    <div>
      <DesignSystemProvider>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {items.map((item, index) => {
              return <DropdownMenu.Item>{item}</DropdownMenu.Item>;
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </DesignSystemProvider>
    </div>
  );
}

// @ts-nocheck
// import "../node_modules/@databricks/design-system/dist/index.css";
import React from "react";
import type { ReactNode } from "react";
import {
  DropdownMenu,
  Button,
  DesignSystemProvider,
} from "@databricks/design-system";

export function DuboisDropdownMenu(): ReactNode {
  return (
    <div>
      <DesignSystemProvider>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button>Can edit</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Can edit</DropdownMenu.Item>
            <DropdownMenu.Item>Can view</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </DesignSystemProvider>
    </div>
  );
}

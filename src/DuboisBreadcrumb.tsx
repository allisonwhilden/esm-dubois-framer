// @ts-nocheck
import "../node_modules/@databricks/design-system/dist/index.css";
import React from "react";
import { Breadcrumb, DesignSystemProvider } from "@databricks/design-system";

export function DuboisBreadcrumb({ items = ["Apple", "Banana"] }) {
  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
  };
  return (
    <div>
      <DesignSystemProvider>
        <Breadcrumb>
          {items.map((item, index) => {
            return (
              <Breadcrumb.Item key={index}>
                <a href="" onClick={onClick}>
                  {item}
                </a>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </DesignSystemProvider>
    </div>
  );
}

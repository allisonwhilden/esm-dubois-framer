// @ts-nocheck

import "@databricks/design-system/dist/index.css";
import React, { MouseEventHandler } from "react";
import { Button, DesignSystemProvider } from "@databricks/design-system";

type Props = {
  onClick: MouseEventHandler;
  text: string;
};

const DuboisButton = () => (
  <>
    <DesignSystemProvider>
      <Button type="primary">{React.version}</Button>
    </DesignSystemProvider>
  </>
);

export default DuboisButton;

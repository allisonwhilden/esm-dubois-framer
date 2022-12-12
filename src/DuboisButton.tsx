// @ts-nocheck
import css from "@databricks/design-system/dist/index.css";
// import "@databricks/design-system/dist/index-dark.css";
import styled from "styled-components";
import React from "react";
import {
  Button,
  Switch,
  DesignSystemProvider,
} from "@databricks/design-system";

export function DuboisButton() {
  const Wrapper = styled.div(css);

  return (
    <div>
      asdf
      <Wrapper>
        <DesignSystemProvider>
          <Button>asdfasdf</Button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Switch defaultChecked />
            <label>Label</label>
          </div>
        </DesignSystemProvider>
      </Wrapper>
    </div>
  );
}

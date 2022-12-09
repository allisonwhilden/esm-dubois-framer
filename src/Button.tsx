import React, { MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler;
  text: string;
};

const Button = () => <button>{React.version}</button>;

export default Button;

import React from "react";
import { Button } from "@material-ui/core";

export default function CustomButton({
  variant,
  onClick,
  size,
  type,
  text,
  ...others
}) {
  return (
    <Button
      variant={variant || "outlined"}
      onClick={onClick}
      size={size || "large"}
      type={type}
      {...others}
    >
      {text}
    </Button>
  );
}

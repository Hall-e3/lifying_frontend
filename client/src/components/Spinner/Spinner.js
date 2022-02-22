import React from "react";
import { CircularProgress } from "@mui/material";
export const Spinner = () => {
  return (
    <CircularProgress
      style={{
        color: "white",
        size: 5,
        thickness: "3.6",
        variant: "indeterminate",
      }}
    />
  );
};

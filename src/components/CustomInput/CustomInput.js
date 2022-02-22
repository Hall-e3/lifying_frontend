import React from "react";
import { Grid, TextField } from "@mui/material";

export default function CustomInput({
  label,
  name,
  autoComplete,
  id,
  value,
  onChange,
  margin,
  ...others
}) {
  return (
    <Grid item xs={12}>
      <TextField
        autoComplete={autoComplete}
        name={name}
        required
        fullWidth
        id={id}
        label={label}
        autoFocus
        value={value}
        onChange={onChange}
        margin={margin}
        {...others}
      />
    </Grid>
  );
}

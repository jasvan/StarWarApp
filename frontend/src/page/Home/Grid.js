import React from "react";
import { Grid } from "@mui/material";

export const ChildGrid = (props) => {
  const { src, comment, nombre, onClick } = props;
  return (
    <Grid item md={3} small={3} xs={12}>
      <button onClick={onClick}>
        <p>{nombre}</p>
        <img src={src} alt="!#" />
      </button>
      <p>{comment}</p>
    </Grid>
  );
};

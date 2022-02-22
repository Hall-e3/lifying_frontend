import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Toolbar, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../.././actions/posts";
import useStyles from "./styles";
import memories from "../.././images/icons8-leaf-60.png";
import CustomButton from "../CustomButton/CustomButton";

export default function Headers() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Box>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex" }}>
              <Typography className={classes.heading} variant="h2">
                Lifying
              </Typography>

              <img
                className={classes.image}
                src={memories}
                alt="icon"
                height="40"
              />
            </div>
            <div style={{ flexGrow: 1 }} />
            <div className={classes.button}>
              <CustomButton text="Sign In" variant="text" href="/auth/login" />
              <CustomButton text="Sign Up" variant="text" href="/auth/register" />
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

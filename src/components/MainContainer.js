import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";

const uesStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const MainContainer = ({ children, ...props }) => {
  const styles = uesStyles();
  return (
    <Container
      className={styles.root}
      container="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </Container>
  );
};

export default MainContainer;

import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

function About() {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <Link to="/home">
          <Button className={classes.btn} variant="contained">
            {" "}
            <ArrowBackIcon />
            back
          </Button>
        </Link>
      </Box>
      <Box className={classes.outer}>
        <Box className={classes.forImg}>one</Box>
        <Box className={classes.forData}>two</Box>
      </Box>
    </div>
  );
}

export default About;

const useStyles = makeStyles((theme) => ({
  btn: { margin: 20, display: "flex" },
  outer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "5rem",
  },
  forImg: {
    width: 300,
    height: 300,
    border: "1px solid black",
  },
  forData: {
    width: 300,
    height: 300,
    border: "1px solid black",
  },
}));

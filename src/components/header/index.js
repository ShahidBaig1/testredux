import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import NightsStayIcon from "@material-ui/icons/NightsStay";

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.mainCont}>
        <Box className={classes.logo}>
          <Link to="/home">
            <Typography variant="h5">Where in the world?</Typography>
          </Link>
        </Box>
        <Box className={classes.forLinks}>
          <Link to="/home">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/favourite">Favourite</Link>
        </Box>
        <Box className={classes.forIcon}>
          <NightsStayIcon />
          <Typography>dark mode</Typography>
        </Box>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  logo: {
    "& p": {
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "none",
    },
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  mainCont: {
    display: "flex",
    justifyContent: "space-around",
    justifyItems: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "white",
    borderBottom: "1px solid black",
  },
  forIcon: {
    display: "flex",
  },
  forLinks: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    "& a": {
      margin: 10,
      fontSize: 20,
      fontWeight: 700,

      textDecoration: "none",
      color: "black",
    },
  },
}));

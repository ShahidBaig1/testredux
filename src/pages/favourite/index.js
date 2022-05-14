import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Favourite() {
  const classes = useStyles();
  const {
    favourite: { favouriteData },
  } = useSelector((state) => state);

  // const dispatch = useDispatch();
  return (
    <div>
      <Box className={classes.outBox}>
        {favouriteData.map((item) => {
          return (
            <>
              <Box className={classes.containerCards}>
                <Box>
                  <img className={classes.forImg} src={item.flag} />
                </Box>
                <Box style={{ margin: "10px" }}>
                  <Typography>{item.name}</Typography>
                </Box>
                <Box className={classes.titles}>
                  <Box>popolation: {item.population}</Box>
                  <Box>Region: {item.region}</Box>
                  <Box>Capital: {item.capital}</Box>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </div>
  );
}

export default Favourite;

const useStyles = makeStyles((theme) => ({
  containerCards: {
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    width: 180,
    margin: 20,
    backgroundColor: "white",
  },
  forImg: {
    width: 180,
    height: 120,
  },
  titles: {
    display: "flex",
    flexDirection: "column",
  },
  outBox: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    margin: 20,
  },
}));

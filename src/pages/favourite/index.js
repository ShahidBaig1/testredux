import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavourite } from "../../features/slicer/addToFavouriteSlicer";
import Button from "@material-ui/core/Button";
function Favourite() {
  const classes = useStyles();
  const {
    favourite: { favouriteData },
  } = useSelector((state) => state);
  const handleRemove = (item) => {
    dispatch(removeFromFavourite(item));
  };

  const dispatch = useDispatch();
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
                <Box>
                  <Typography className={classes.countryName}>
                    {item.name}
                  </Typography>
                </Box>
                <Box className={classes.titles}>
                  <Box>
                    <span className={classes.hedings}>popolation: </span>{" "}
                    {item.population}
                  </Box>
                  <Box>
                    <span className={classes.hedings}>Region: </span>{" "}
                    {item.region}
                  </Box>
                  <Box>
                    <span className={classes.hedings}>Capital: </span>{" "}
                    {item.capital}
                  </Box>
                  <Box className={classes.btn}>
                    <Button
                      onClick={() => {
                        handleRemove(item.name);
                        console.log("hello");
                      }}
                      variant="contained"
                    >
                      remove
                    </Button>
                  </Box>
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
    width: 230,
    margin: 20,
    backgroundColor: "white",
  },
  forImg: {
    width: 230,
    height: 150,
  },
  titles: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginLeft: 30,
  },
  outBox: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    margin: 20,
    backgroundColor: "#f7f7f7",
  },
  countryName: {
    textAlign: "left",
    marginLeft: 28,
    fontWeight: 700,
    marginTop: 10,
  },
  btn: {
    margin: 15,
  },
  hedings: {
    fontWeight: 600,
    lineHeight: 1.5,
    textTransform: "capitalize",
  },
}));

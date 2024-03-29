import React, { useEffect } from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getcountries } from "../../features/actions/action";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link, useNavigate } from "react-router-dom";
import { setInput } from "../../features/slicer/getAllcountriesSlicer";
import { addToFavourite } from "../../features/slicer/addToFavouriteSlicer";

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNav = (item) => {
    navigate(`/${item}`);
  };
  function handleAddToFavourite(item) {
    let data = { ...item };
    data.quant = 1;
    dispatch(addToFavourite(data));
  }
  const {
    getAllcountries: { countryDetails, countryLoading },
  } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getcountries());
  }, []);
  return (
    <div>
      <Box classes={classes.fullcont}>
        <Box className={classes.outerMost}>
          <Box>
            <Box className="outer">
              <Box className="search_cont">
                <Toolbar>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      onChange={(e) => {
                        console.log(e.target.value);
                        if (e.target.value === "") {
                          dispatch(getcountries());
                        } else {
                          dispatch(setInput(e.target.value));
                        }
                      }}
                      placeholder="Search for a country"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </Toolbar>
              </Box>
            </Box>
          </Box>
          <Box>
            <select className={classes.regionSelector} id="filterByRegion">
              <option value="africa">filter by region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </Box>
        </Box>
        <Box>
          {countryLoading ? (
            <CircularProgress color="secondary" />
          ) : (
            <Box className={classes.outerGrid}>
              <Box className={classes.grids}>
                {countryDetails.slice(0, 12).map((item) => {
                  return (
                    <>
                      <Box className={classes.containerCards}>
                        <Box
                          onClick={() => {
                            handleNav(item.name);
                          }}
                        >
                          <img
                            className={classes.forImg}
                            src={item.flag}
                            alt="country value"
                          />
                        </Box>
                        <Box>
                          <Typography className={classes.countryName}>
                            {item.name}
                          </Typography>
                        </Box>
                        <Box className={classes.titles}>
                          <Box>
                            <span className={classes.hedings}>
                              popolation:{" "}
                            </span>{" "}
                            {item.population}
                          </Box>
                          <Box>
                            <span className={classes.hedings}>Region: </span>
                            {item.region}
                          </Box>
                          <Box>
                            <span className={classes.hedings}>Capital: </span>{" "}
                            {item.capital}
                          </Box>
                        </Box>
                        <Button>
                          <FavoriteBorderIcon
                            style={{ color: "red" }}
                            onClick={() => {
                              handleAddToFavourite(item);
                            }}
                            className={classes.heart}
                          />
                        </Button>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default Home;
const useStyles = makeStyles((theme) => ({
  fullcont: {
    backgroundColor: "#f7f7f7",
  },
  search: {
    position: "relative",
    border: "1px solid black",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "22ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  search_cont: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    margin: "0 auto",
    margintop: 100,
    padding: 25,
    width: "70vh",
    boxShadow: "3px 8px #888888",
    borderRadius: 10,
  },
  outerMost: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  regionSelector: {
    width: 180,
    height: 40,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 20,
  },
  containerCards: {
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    width: 230,
    margin: 20,
    backgroundColor: "white",
  },
  forImg: {
    width: 230,
    height: 150,
    cursor: "pointer",
  },
  grids: {
    display: "flex",
    flexWrap: "wrap",
    // gridTemplateColumns: "1fr 1fr 1fr 1fr",
    justifyContent: "center",
    margin: 20,
  },
  outerGrid: {
    backgroundColor: "#f7f7f7",
    display: "flex",
    justifyContent: "center",
  },
  titles: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginLeft: 30,
  },
  countryName: {
    textAlign: "left",
    marginLeft: 28,
    fontWeight: 700,
    marginTop: 10,
  },
  hedings: {
    fontWeight: 600,
    lineHeight: 1.5,
    textTransform: "capitalize",
  },
  heart: {
    margin: 10,
  },
}));

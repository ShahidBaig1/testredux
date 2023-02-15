import React, { useEffect } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryData } from "../../features/actions/action";

const About = () => {
  const param = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    getSingleDetails: { singleCountryDetails },
  } = useSelector((state) => state);

  useEffect(() => {
    console.log("params", param.countryName);
    dispatch(getCountryData(param.countryName));
  }, []);
  return (
    <div>
      <Box>
        <Link to="/home">
          <Button className={classes.btn1} variant="contained">
            <ArrowBackIcon />
            back
          </Button>
        </Link>
      </Box>
      <Box>
        {singleCountryDetails.map((item) => {
          return (
            <>
              <Box className={classes.outer}>
                <Box className={classes.forImg}>
                  {" "}
                  <img
                    className={classes.forImg}
                    src={item.flag}
                    alt="country value"
                  />
                </Box>
                <Box>
                  <Box>
                    <Box className={classes.forCountries}>
                      <Typography variant="h4"> {item.name}</Typography>
                    </Box>
                    <Box className={classes.forData}>
                      <Box className={classes.fornames}>
                        <Typography>
                          <span className={classes.hedings}>native name: </span>
                          {item.nativeName}
                        </Typography>
                        <Typography>
                          <span className={classes.hedings}>population: </span>
                          {item.population}
                        </Typography>
                        <Typography>
                          <span className={classes.hedings}>region: </span>
                          {item.region}
                        </Typography>
                        <Typography>
                          <span className={classes.hedings}>sub region: </span>
                          {item.subregion}
                        </Typography>
                        <Typography>
                          <span className={classes.hedings}>capital: </span>{" "}
                          {item.capital}
                        </Typography>
                      </Box>
                      <Box className={classes.fornames}>
                        <Typography>
                          <span className={classes.hedings}>
                            top Level Domain:{" "}
                          </span>
                          {item.topLevelDomain}
                        </Typography>
                        <Typography>
                          <span className={classes.hedings}>currencies: </span>

                          {item.currencies.map((cur) => {
                            return <>{cur.name},</>;
                          })}
                        </Typography>
                        <Typography>
                          <span className={classes.hedings}>language: </span>

                          {item.languages.map((lang) => {
                            return <>{lang.name},</>;
                          })}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Typography>Border Countries: </Typography>
                  </Box>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </div>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
  btn1: { margin: 30, display: "flex" },
  outer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "5rem",
  },
  forImg: {
    width: 450,
  },
  forData: {
    display: "flex",
    justifyContent: "space-around",
    width: 600,
    marginTop: "2rem",
  },
  fornames: {
    textAlign: "left",
  },
  forCountries: {
    textAlign: "left",
    marginLeft: 54,
    marginTop: 10,
  },
  hedings: {
    fontWeight: 600,
    lineHeight: 2,
    textTransform: "capitalize",
  },
}));

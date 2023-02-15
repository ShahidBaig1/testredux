import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getcountries = createAsyncThunk("countries", async () => {
  try {
    const data = await axios.get("https://restcountries.com/v2/all");
    console.log(data.data, "hello");
    return data.data;
  } catch (error) {
    console.log(error, "error");
  }
});

export const getCountryData = createAsyncThunk(
  "/countryName",
  async (payload) => {
    try {
      const countryData = await axios.get(
        `https://restcountries.com/v2/name/${payload}`);
      console.log(countryData.data, "api data");
      return countryData.data;
    } catch (error) {
      console.log(error, "country detail api");
    }
  }
);

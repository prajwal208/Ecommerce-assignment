import React, { useEffect, useState } from "react";
import Hocwrapper from "./Hocwrapper";
import "./App.css"
import HomePage from "./components/Home/HomePage";

const App = ({ globalFunctionApiHandler,someData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await globalFunctionApiHandler(
          "https://restcountries.com/v3.1/all"
        );
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HomePage globalFunctionApiHandler={globalFunctionApiHandler} />
    </>
  );
};

export default Hocwrapper(App);

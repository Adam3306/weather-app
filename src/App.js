import { BrowserRouter, Routes, Route } from "react-router-dom";
import { City, Home, Search, NotFound } from "./pages";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCapitalByCurrentLocation } from "./utils";
import { addCity } from "./features/cities/citiesSlice";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const setCapital = async () => {
      const [capital, current] = await getCapitalByCurrentLocation();

      dispatch(addCity(current));
      dispatch(addCity(capital));
    };

    setCapital();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/city" element={<City />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

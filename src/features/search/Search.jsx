import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { BackArrow, CitySearchRow } from "../../components";
import { addCity } from "../cities/citiesSlice";

import "./search.css";

export default function Search() {
  const dispatch = useDispatch();
  const capitals = useSelector((state) => state.capitals.capitals);
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState();
  const [autocompleteCities, setAutocompleteCities] = useState([]);

  const onCityClick = (cityName) => {
    setSelectedCity(cityName);
    setCity(cityName);
  };

  const handleCityChange = async (e) => {
    let results = [];
    let input = e.target.value;

    if (input.length) {
      results = capitals
        .filter((item) => {
          return item.toLowerCase().includes(input.toLowerCase());
        })
        .slice(0, 8);
    }

    setCity(input);
    setAutocompleteCities(results);
    setSelectedCity(null);
  };

  const onSaveClick = () => {
    dispatch(addCity(selectedCity));
    navigate("/");
  };

  return (
    <div className="placesAutocomplete">
      <BackArrow to={"/"} />
      {/* THIS WOULD BE A COMPONENT CALLED SearchInput - START */}
      <div className="search">
        <input
          type="input"
          className="form__field"
          name="name"
          id="name"
          required
          onChange={handleCityChange}
          value={city}
          autoComplete="off"
        />
      </div>
      {/* THIS WOULD BE A COMPONENT CALLED SearchInput - END */}

      {/* THIS WOULD BE A COMPONENT CALLED SearchResults - START */}
      <div className="places">
        {autocompleteCities.map((item, i) => (
          <CitySearchRow
            key={i}
            onClick={() => onCityClick(item)}
            selected={selectedCity === item}
            name={item}
            highlight={city}
          />
        ))}
      </div>
      {/* THIS WOULD BE A COMPONENT CALLED SearchResults - END */}

      {/* THIS WOULD BE A COMPONENT CALLED SaveButton - START */}
      {selectedCity && (
        <button className="save" onClick={onSaveClick}>
          SAVE
        </button>
      )}
      {/* THIS WOULD BE A COMPONENT CALLED SaveButton - END */}
    </div>
  );
}

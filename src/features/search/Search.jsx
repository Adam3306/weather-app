import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { BackArrow } from "../../components";
import { addCity } from "../cities/citiesSlice";

import "./search.css";

const Name = (props) => {
  const { name, highlight, selected } = props;
  if (!highlight.trim()) {
    return <div>{name}</div>;
  }
  const escapeRegExp = (str = "") =>
    str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");

  const regex = new RegExp(`(${escapeRegExp(highlight)})`, "gi");

  const parts = name.split(regex);

  if (selected) {
    return (
      <div className="cityName" {...props}>
        <span className="match">{name}</span>
      </div>
    );
  }
  return (
    <div className="cityName" {...props}>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <span className="match" key={i}>
              {part}
            </span>
          ) : (
            <span className="rest" key={i}>
              {part}
            </span>
          )
        )}
    </div>
  );
};

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

      <div className="places">
        {autocompleteCities.map((item, i) => (
          <Name
            key={i}
            onClick={() => onCityClick(item)}
            selected={selectedCity === item}
            name={item}
            highlight={city}
          />
        ))}
      </div>
      {selectedCity && (
        <button className="save" onClick={onSaveClick}>
          SAVE
        </button>
      )}
    </div>
  );
}

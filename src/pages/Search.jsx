import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Search() {
  const capitals = useSelector((state) => state.capitals.capitals);
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState();
  const [autocompleteCities, setAutocompleteCities] = useState([]);

  const onCityClick = (e) => {
    setSelectedCity(e.target.id);
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

  return (
    <form>
      <div className="placesAutocomplete">
        <div className="placesAutocomplete__inputWrap">
          <input
            list="places"
            type="text"
            id="city"
            name="city"
            onChange={handleCityChange}
            value={city}
            required
            autoComplete="on"
          />
          <div id="places">
            {autocompleteCities.map((city, i) => (
              <p
                id={city}
                key={i}
                onClick={onCityClick}
                style={{
                  backgroundColor: selectedCity === city ? "red" : "white",
                }}
              >
                {city}
              </p>
            ))}
          </div>
          {selectedCity && <button>Save</button>}
        </div>
      </div>
    </form>
  );
}

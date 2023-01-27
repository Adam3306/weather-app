import React, { useEffect, useState } from "react";
import findNearestLocation from "map-nearest-location";
import Geocode from "react-geocode";
import wcc from "world-countries-capitals";
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
// Geocode.setRegion("es");

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

export default function Location() {
  const [myLocation, setMylocation] = useState(null);
  const [nearestLocation, setNearestLocation] = useState(null);
  const [status, setStatus] = useState(null);

  const locations = [
    {
      lat: 40.7722691,
      lng: -74.3008176,
    },
    {
      lat: 40.682638,
      lng: -73.941015,
    },
    {
      lat: 40.870347,
      lng: -74.10581,
    },
    {
      lat: 40.7374197,
      lng: -74.2719785,
    },
  ];

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (myLocation) {
      const nearest = findNearestLocation(myLocation, locations);
      setNearestLocation(nearest);
    }
  }, [myLocation]);

  const getLocation = () => {
    console.log("getLoc");
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          // Get address from latitude & longitude.
          Geocode.fromLatLng(
            position.coords.latitude,
            position.coords.longitude
          ).then(
            (response) => {
              const address = response.results[0].formatted_address;
              let city, state, country;
              for (
                let i = 0;
                i < response.results[0].address_components.length;
                i++
              ) {
                for (
                  let j = 0;
                  j < response.results[0].address_components[i].types.length;
                  j++
                ) {
                  switch (response.results[0].address_components[i].types[j]) {
                    case "locality":
                      city =
                        response.results[0].address_components[i].long_name;
                      break;
                    case "administrative_area_level_1":
                      state =
                        response.results[0].address_components[i].long_name;
                      break;
                    case "country":
                      country =
                        response.results[0].address_components[i].long_name;
                      break;
                  }
                }
              }
              //   country
              const { capital } = wcc.getCountryDetailsByName(country)[0];
              // wcc.getAllCountryDetails
              wcc.getCountryDetailsByName(country);
              console.log("capital\t", capital);
              console.log(address);
            },
            (error) => {
              console.error(error);
            }
          );
          setMylocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  console.log(nearestLocation);

  return (
    <div className="App">
      <h1>{status}</h1>
    </div>
  );
}

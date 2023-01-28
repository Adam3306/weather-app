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

const getCapitalByCurrentLocation = async () => {
  let capital = "Budapest";
  if (!navigator.geolocation) {
    console.error("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition(async (position) => {
      // Get address from latitude & longitude.
      const response = await Geocode.fromLatLng(
        position.coords.latitude,
        position.coords.longitude
      );

      // Get address from latitude & longitude.
      Geocode.fromLatLng(position.coords.latitude, position.coords.longitude);

      let country;
      response.results[0].address_components.forEach(({ types, long_name }) => {
        types.forEach((type) => {
          if (type === "country") {
            country = long_name;
          }
        });
      });

      const { capital: capitalFromLocation } =
        wcc.getCountryDetailsByName(country)[0];

      wcc.getCountryDetailsByName(country);

      capital = capitalFromLocation;
    });
  }

  return capital;
};

export default getCapitalByCurrentLocation;

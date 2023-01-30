import citiesMap from "./city.list.json";

const getCityId = (cityName) => {
  // return id of Budapest
  if (!cityName) return 3054638;

  const { id } = citiesMap.find(
    ({ name }) => name === cityName.replaceAll("_", " ")
  );

  return id;
};

export default getCityId;

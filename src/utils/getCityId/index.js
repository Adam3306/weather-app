import citiesMap from "./city.list.json";

const getCityId = (cityName) => {
  const { id } = citiesMap.find(
    ({ name }) => name === cityName.replaceAll("_", " ")
  );
  console.log(id);

  return id;
};

export default getCityId;

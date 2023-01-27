import wcc from "world-countries-capitals";

import { capitalizeFirstLetter } from "..";

const getAllCapitals = () =>
  wcc.getAllCountryDetails().reduce((tempArr, { capital }) => {
    tempArr.push(capitalizeFirstLetter(capital));
    return tempArr;
  }, []);

export default getAllCapitals;

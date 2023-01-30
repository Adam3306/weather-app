const getMinutes = (date, minutes) => {
  let currentTimeMinutes = date.getUTCMinutes() + minutes;

  if (currentTimeMinutes >= 60) {
    currentTimeMinutes = currentTimeMinutes - 60;
  }

  if (currentTimeMinutes < 10) {
    return `0${currentTimeMinutes}`;
  }

  return `${currentTimeMinutes}`;
};

export default getMinutes;

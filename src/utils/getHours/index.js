const getHours = (date, hours) => {
  let currentTimeHours = Number(date.getUTCHours() + hours);
  if (currentTimeHours >= 24) {
    currentTimeHours = currentTimeHours - 24;
  }

  if (currentTimeHours < 10) {
    return `0${currentTimeHours}`;
  }

  return `${currentTimeHours}`;
};

export default getHours;

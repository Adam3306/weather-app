const timeStampToHourMinute = (timestamp) => {
  let currentTimeHours = new Date(timestamp * 1000).getUTCHours();
  let currentTimeMinutes = new Date(timestamp * 1000).getUTCMinutes();

  console.log("currentTimeHours", currentTimeHours);
  console.log("currentTimeMinutes", currentTimeMinutes);
  if (currentTimeHours < 10) {
    currentTimeHours = `0${currentTimeHours}`;
  }

  if (currentTimeMinutes < 10) {
    currentTimeMinutes = `0${currentTimeMinutes}`;
  }

  return `${currentTimeHours}:${currentTimeMinutes}`;
};

export default timeStampToHourMinute;

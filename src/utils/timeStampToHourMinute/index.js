const timeStampToHourMinute = (timestamp) =>
  `${new Date(timestamp * 1000).getHours()}:
          ${new Date(timestamp * 1000).getMinutes()}`;

export default timeStampToHourMinute;

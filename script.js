window.onload = function () {
  function updateTime() {
    const currentTime = new Date();
    const utcTime = currentTime.toUTCString().split(" ")[4];
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const utcDay = daysOfWeek[currentTime.getUTCDay()];
    document.getElementById("currentTimeUTC").innerText = utcTime;
    document.getElementById("currentDay").innerText = utcDay;
  }

  updateTime();
  setInterval(updateTime, 1000);
};

window.onload = function () {
    // Update current time in UTC
    function updateTime() {
      const currentTime = new Date();
      const utcTime = currentTime.toUTCString().split(" ")[4];
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const utcDay = daysOfWeek[currentTime.getUTCDay()];
      document.getElementById("currentTimeUTC").innerText = utcTime;
      document.getElementById("currentDay").innerText = utcDay;
    }
  
    updateTime();
    setInterval(updateTime, 1000); // Update every second
  };
  

//   const container = document.querySelector(".container");
//   const profile = document.querySelector("#profile img");
//   profile.addEventListener("mouseover", () => {
//     container.style.background = randomBg();
//   });

//   function randomBg() {
//     return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
// }

// };

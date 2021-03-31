// 1. place to hold the dashboard
const vizContainer = document.getElementById("vizContainer");
// 2. the url of the dashboard
const url =
  "https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/PabloTest-Donotdelete/Dashboard1";
// 3. the options of the dashboard
const options = {
  height: window.innerHeight,
  width: window.innerWidth,
  hideToolbar: true,
  onFirstInteractive: () => {
    console.log(`Refreshing viz every ${time} ms`);
  },
};
// let viz;
let time = 300000;
// let interval;

// refresh time button and input
// const refreshTimeButton = document.getElementById("refreshTimeButton");
// const start = document.getElementById("start");
// const stop = document.getElementById("stop");

// refreshTimeButton.addEventListener("click", () => {
//   clearInterval(interval);
//   const refreshTime = document.getElementById("refreshTime").value;
//   time = refreshTime;
//   console.log("setting refresh time", time);
// });

// when the page loads we want to see the dashboard
function initViz() {
  viz = new tableau.Viz(vizContainer, url, options);
}

// start.addEventListener("click", () => {
//   // change the status
//   document.getElementById("status").innerHTML = `Refreshing every ${time} ms`;
//   // auto-refresh dashboard
//   interval = setInterval(() => {
//     const currentCount = document.getElementById("count").innerText;
//     console.log(currentCount);
//     const newCount = Number(currentCount) + 1;
//     document.getElementById("count").innerText = newCount;

//     const date = Date.now();
//     console.log(`Refreshing every ${time}`);
//     viz.refreshDataAsync();
//   }, time);
// });

// stop.addEventListener("click", () => {
//   // change the status
//   document.getElementById("status").innerHTML = `Not refreshing`;
//   clearInterval(interval);
// });

setInterval(() => {
  const date = Date.now();
  console.log(`Refreshing every ${time} - current date: ${date}`);
  viz.refreshDataAsync();
}, time);

document.addEventListener("DOMContentLoaded", initViz());

/* jshint esversion:6 */

import "babel-polyfill";

const d3 = require("d3");
const sample = require("lodash/sample");

window.addEventListener("load", () => {
  
  const colors = [
    ["rgb(0, 0, 0)", "rgb(255, 255, 255)"],
    ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]
  ];
  
  const $title = d3.select("#title");

  setInterval(() => {
    const [ bg, font ] = sample(colors);
    $title.style("background", bg).style("color", font);
  }, 3000);

});
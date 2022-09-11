"use strict";

const url = "../data.json";
const spendingGraph = document.querySelector(".spending-graph");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const date = new Date();
const today = weekday[date.getDay()].toLowerCase();

const getData = function () {
  fetch(url, { cache: "no-cache" })
    .then((res) => res.json())
    .then(function (data) {
      data.forEach(item => {
        const container = document.createElement("li");

        // create bar element with class, id and style
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.id = item.day + `-bar`;
        bar.style.height = item.amount * 2.5 + "px";

        // create p element with class, id and style
        const day = document.createElement("p");
        day.className = "day";
        day.innerText = item.day;

        // condition to check which day is today, and change color of its bar
        if(today.includes(item.day)) {
          bar.classList.add("today");
        }

        // create bar amount element with text
        const barAmount = document.createElement("p");
        barAmount.classList.add("bar-amount");
        barAmount.innerText = "$" + item.amount;

        // append elements to container
        spendingGraph.appendChild(container);
        container.appendChild(bar);
        container.appendChild(day);
        container.appendChild(barAmount);

        // mouseover event
        bar.addEventListener("mouseover", () => {
          barAmount.classList.add("show");
        })

        bar.addEventListener("mouseleave", () => {
          barAmount.classList.remove("show");
        })
      });
    })
    .catch((err) => console.log(err.mesage));
};

getData();

document.addEventListener('DOMContentLoaded', () => {
  
});
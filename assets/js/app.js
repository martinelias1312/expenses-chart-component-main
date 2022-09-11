"use strict";

const url = "http://myjson.dit.upm.es/api/bins/564m";
const daysList = document.querySelectorAll("li");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const date = new Date();
const today = weekday[date.getDay()].toLowerCase();

const getData = function () {
  fetch(url, { cache: "no-cache" })
    .then((res) => res.json())
    .then(function (data) {
      data.forEach(item => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.id = item.day + `-bar`;
        bar.style.height = item.amount * 3 + "px";

        // condition to check which day is today, and change color of its bar
        if(today.includes(item.day)) {
          bar.classList.add("today");
        }

        // append new bar div to every list item
        daysList.forEach(listItem => {
          if(listItem.innerText === item.day) {
            listItem.appendChild(bar);
          } else return;
        })
      });

      const bars = [...document.querySelectorAll('.bar')];
      bars.map(item => {
        item.addEventListener("mouseover", () => {
          console.log(item)
        });
      });
    })
    .catch((err) => console.log(err.mesage));
};

getData();

document.addEventListener('DOMContentLoaded', () => {
  
});
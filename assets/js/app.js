"use strict";

const url = "http://myjson.dit.upm.es/api/bins/564m";
const days = document.querySelectorAll("li");

const getData = function () {
  fetch(url, { cache: "no-cache" })
    .then((res) => res.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err.mesage));
};

getData();
"use strict";

/* ================== DOM ================== */

const DOM = {
  searchInput1: document.querySelector(".search-google-url"),
  searchInput2: document.querySelector(".search-google-word"),
  searchBtn: document.querySelector(".search-icon-btn"),
  searchLink: document.querySelector(".search-link"),
};

/* ================== HANDLERS ================== */
function searchGoogle() {
  let setLink = DOM.searchLink;
  const input2 = DOM.searchInput2.value;
  const input1 = DOM.searchInput1.value;

  setLink.href = `https://www.google.com/search?q=${input2 || input1}`;
  if (input2 || input1) DOM.searchLink.click();
}

function bindEvents() {
  DOM.searchBtn.addEventListener("click", () => {
    searchGoogle();
  });

  DOM.searchInput1.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchGoogle();
  });

  DOM.searchInput2.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchGoogle();
  });
}

/* ================== INITIALIZE ================== */

function init() {
  bindEvents();
}

/* ================== INITIALIZE ================== */
init();

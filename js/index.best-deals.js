import { addToCart } from "./common.cart-widget.js";

const bestDealsWines = [
  {
    id: "1",
    name: "Cabernet",
    price: 17.0,
    image: "images/index.best-deals/best-deals-cabernet.jpeg",
    link: "cabernet",
  },
  {
    id: "2",
    name: "Sauvignon Blanc",
    price: 12.0,
    image: "images/index.best-deals/best-deals-sauvignon-blanc.jpeg",
    link: "sauvignon-blanc",
  },
  {
    id: "3",
    name: "Syrah",
    price: 13.0,
    image: "images/index.best-deals/best-deals-syrah.jpeg",
    link: "syrah",
  },
  {
    id: "4",
    name: "Pinot Grigio",
    price: 10.0,
    image: "images/index.best-deals/best-deals-pinot-grigio.jpeg",
    link: "pinot-grigio",
  },
];

function getNextIdx(index) {
  return index === bestDealsWines.length - 1 ? 0 : index + 1;
}

function getPrevIdx(index) {
  return index === 0 ? bestDealsWines.length - 1 : index - 1;
}

function getBestDealsWineHTML(index) {
  const wine = bestDealsWines[index];
  const wineURL = `shop/${wine.link}`;
  return `<div class="best-deals__item"><a href="${wineURL}"><img class="best-deals__item-picture" src="${
    wine.image
  }" alt="${wine.name}"></a>
  <a href="${wineURL}" class="best-deals__item-name">${wine.name}</a>
  <p class="best-deals__item-price">${wine.price
    .toFixed(2)
    .replace(".", ",")}USD</p>
  <button class="best-deals__item-button best-deals__add-wine-${
    wine.id
  }">Add to cart</button></div>`;
}

function renderBestDealsWines() {
  let winesHTML = getBestDealsWineHTML(currentWineIdx);
  let secondWineIdx;
  let thirdWineIdx;
  if (window.matchMedia("(min-width: 767px)").matches) {
    secondWineIdx = getNextIdx(currentWineIdx);
    winesHTML += getBestDealsWineHTML(secondWineIdx);
  }
  if (window.matchMedia("(min-width: 991px)").matches) {
    thirdWineIdx = getNextIdx(secondWineIdx);
    winesHTML += getBestDealsWineHTML(thirdWineIdx);
  }
  document.querySelector(".best-deals__wines").innerHTML = winesHTML;
  addBestDealsWineButtonEvent(currentWineIdx);
  if (secondWineIdx) {
    addBestDealsWineButtonEvent(secondWineIdx);
  }
  if (thirdWineIdx) {
    addBestDealsWineButtonEvent(thirdWineIdx);
  }
  renderBestDealsWinePointers();
}

function nextBestDealsWine() {
  currentWineIdx = getNextIdx(currentWineIdx);
  renderBestDealsWines();
}

function prevBestDealsWine() {
  currentWineIdx = getPrevIdx(currentWineIdx);
  renderBestDealsWines();
}

function getBestDealsWinePointersHTML() {
  let pointersHTML = "";
  for (let i = 0; i < bestDealsWines.length; i++) {
    pointersHTML += `<div class="best-deals__item-pointer ${
      i === currentWineIdx ? "best-deals__selected-pointer" : ""
    } best-deals__click-pointer-${i}">•</div>`;
  }
  return pointersHTML;
}

function addBestDealsWinePointersEvents() {
  for (let i = 0; i < bestDealsWines.length; i++) {
    if (i !== currentWineIdx) {
      const pointer = document.querySelector(`.best-deals__click-pointer-${i}`);
      pointer.addEventListener("click", () => {
        currentWineIdx = i;
        renderBestDealsWines();
      });
    }
  }
}

function renderBestDealsWinePointers() {
  document.querySelector(".best-deals__item-pointers").innerHTML =
    getBestDealsWinePointersHTML();
  addBestDealsWinePointersEvents();
}

function addBestDealsWineButtonEvent(index) {
  const wine = bestDealsWines[index];
  const button = document.querySelector(`.best-deals__add-wine-${wine.id}`);
  button.addEventListener("click", () => {
    addToCart(wine.id, 1);
  });
}

let currentWineIdx = 0;
renderBestDealsWines();
document
  .querySelector(".best-deals__arrow-left")
  .addEventListener("click", prevBestDealsWine);
document
  .querySelector(".best-deals__arrow-right")
  .addEventListener("click", nextBestDealsWine);
window.addEventListener("resize", renderBestDealsWines);

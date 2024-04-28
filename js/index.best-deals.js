const bestDealsWines = [
  {
    name: "Cabernet",
    price: 17.0,
    image: "images/index.best-deals/best-deals-cabernet.jpeg",
  },
  {
    name: "Sauvignon Blanc",
    price: 12.0,
    image: "images/index.best-deals/best-deals-sauvignon-blanc.jpeg",
  },
  {
    name: "Syrah",
    price: 13.0,
    image: "images/index.best-deals/best-deals-syrah.jpeg",
  },
  {
    name: "Pinot Grigio",
    price: 10.0,
    image: "images/index.best-deals/best-deals-pinot-grigio.jpeg",
  },
];

function renderBestDealsWine() {
  let winesHTML = `<div class="best-deals__item">
        <img
          class="best-deals__item-picture"
          src="${bestDealsWines[currentWineIdx].image}"
          alt="${bestDealsWines[currentWineIdx].name}"
        />
        <a href="#" class="best-deals__item-name">${
          bestDealsWines[currentWineIdx].name
        }</a>
        <p class="best-deals__item-price">${bestDealsWines[
          currentWineIdx
        ].price.toFixed(2)}USD</p>
        <a class="best-deals__item-button" href="#">Add to cart</a>
      </div>`;
  if (window.matchMedia("(min-width: 980px)").matches) {
    const secondWineIdx =
      currentWineIdx === bestDealsWines.length - 1 ? 0 : currentWineIdx + 1;
    winesHTML += `<div class="best-deals__item">
    <img
      class="best-deals__item-picture"
      src="${bestDealsWines[secondWineIdx].image}"
      alt="${bestDealsWines[secondWineIdx].name}"
    />
    <a href="#" class="best-deals__item-name">${
      bestDealsWines[secondWineIdx].name
    }</a>
    <p class="best-deals__item-price">${bestDealsWines[
      secondWineIdx
    ].price.toFixed(2)}USD</p>
    <a class="best-deals__item-button" href="#">Add to cart</a>
  </div>`;
    if (window.matchMedia("(min-width: 1150px)").matches) {
      const thirdWineIdx =
        secondWineIdx === bestDealsWines.length - 1 ? 0 : secondWineIdx + 1;
      winesHTML += `<div class="best-deals__item">
    <img
      class="best-deals__item-picture"
      src="${bestDealsWines[thirdWineIdx].image}"
      alt="${bestDealsWines[thirdWineIdx].name}"
    />
    <a href="#" class="best-deals__item-name">${
      bestDealsWines[thirdWineIdx].name
    }</a>
    <p class="best-deals__item-price">${bestDealsWines[
      thirdWineIdx
    ].price.toFixed(2)}USD</p>
    <a class="best-deals__item-button" href="#">Add to cart</a>
  </div>`;
    }
  }
  document.querySelector(".best-deals__wines").innerHTML = winesHTML;
}

function nextBestDealsWine() {
  currentWineIdx =
    currentWineIdx === bestDealsWines.length - 1 ? 0 : currentWineIdx + 1;
  renderBestDealsWine();
}

function prevBestDealsWine() {
  currentWineIdx =
    currentWineIdx === 0 ? bestDealsWines.length - 1 : currentWineIdx - 1;
  renderBestDealsWine();
}

let currentWineIdx = 0;
renderBestDealsWine();
document
  .querySelector(".best-deals__arrow-left")
  .addEventListener("click", prevBestDealsWine);
document
  .querySelector(".best-deals__arrow-right")
  .addEventListener("click", nextBestDealsWine);
window.addEventListener("resize", renderBestDealsWine);

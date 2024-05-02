const cartWidgetSection = document.querySelector(".cart-widget");
const cartWidgetCounter = document.querySelector(".cart-widget__counter");

function showCartWidget() {
  cartWidgetSection.classList.add("cart-widget__show");
}

function hideCartWidget() {
  cartWidgetSection.classList.remove("cart-widget__show");
}

function updateCartWidgetCounter() {
  const cart = localStorage.getItem("cart");
  let sum = 0;
  for (const wine of cart.split(",")) {
    sum += Number(wine.split(":")[1]);
  }
  cartWidgetCounter.innerHTML = sum;
}

function changeCartWidgetState() {
  const cart = localStorage.getItem("cart");
  if (cart !== null && cart.length !== 0) {
    updateCartWidgetCounter();
    showCartWidget();
  } else {
    hideCartWidget();
  }
}

function emptyCart() {
  localStorage.removeItem("cart");
  changeCartWidgetState();
}

export function addToCart(id, count) {
  let cart = localStorage.getItem("cart") || "";
  if (cart.length === 0) {
    cart = `${id}:${count}`;
  } else {
    let cartArray = cart.split(",");
    let wineNotExists = true;
    for (let i = 0; i < cartArray.length; i++) {
      const wineArray = cartArray[i].split(":");
      if (wineArray[0] === id) {
        wineNotExists = false;
        const newCount = count + Number(wineArray[1]);
        cartArray[i] = `${id}:${newCount}`;
      }
    }
    if (wineNotExists) {
      cartArray.push(`${id}:${count}`);
    }
    cart = cartArray.join(",");
  }
  localStorage.setItem("cart", cart);
  changeCartWidgetState();
}

changeCartWidgetState();

cartWidgetSection.addEventListener("click", emptyCart);

window.addEventListener("storage", (event) => {
  if (event.key === "cart") {
    changeCartWidgetState();
  }
});

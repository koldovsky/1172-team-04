const popup = document.getElementById("cart-popup");
const productItemTemplate = `
<div class="shopping-cart__row">
                <div class="shopping-cart__image shopping-cart__cell">
                    <img src="{{image}}" alt="Thumbnail" />
                </div>
                <div class="shopping-cart__name shopping-cart__cell">{{name}}</div>
                <div class="shopping-cart__quantity shopping-cart__cell">
                    <input type="number" class="shopping-cart__quantity-input" name="quantity" id="quantity" min="1" max="5">{{quantity}}</input>
                </div> 
                <div class="shopping-cart__price shopping-cart__cell">{{price}}</div>
                <button class="shopping-cart__remove-icon shopping-cart__cell">
                    <svg width="14" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2h3.6c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H.4C.2 4 0 3.9 0 3.6V2.4c0-.2.2-.4.4-.3h3.7V2L4.9.3c.1-.2.2-.3.4-.3h3.5c.1 0 .3.1.4.2l.8 1.7V2zM1.8 16.1c.1 1 1 1.9 2 1.9h6.3c1.1 0 1.9-.8 2-1.9l1-11.1H1l.8 11.1zM12 6l-.8 10.1c0 .5-.5.9-1 .9H3.8c-.5 0-1-.4-1-.9L2 6h10zM5 8.1h1v6H5v-6zm4 0H8v6h1v-6z" fill="#9199AB"></path>
                    </svg>
                </button>
            </div>
        `;
let cart = [
  {
    image: "images/index.section-wine-selection/riesling.png",
    name: "Riesling Wine",
    quantity: "3",
    price: "12.11 USD",
  },
];

function addProductToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementsByClassName("shopping-cart__table");
  cartList.innerHTML = "";
  cart.forEach((product) => {
    const productItemHTML = productItemTemplate
      .replace("{{image}}", product.image)
      .replace("{{name}}", product.name)
      .replace("{{quantity}}", product.quantity)
      .replace("{{price}}", product.price);
    cartList.innerHTML += productItemHTML;
  });
  const cartTotal = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  document.getElementsByClassName(
    "shopping-cart__total"
  ).innerHTML = `Total: ${cartTotal.toFixed(2)}`;
}

function clearCart() {
  cart = [];
  updateCart();
}

document.querySelectorAll(".shopping-cart__remove-icon").forEach((button) => {
  button.addEventListener("click", (e) => {
    const product = cart.find(
      (product) =>
        product.name ===
        e.target.parentNode.querySelector(".shopping-cart__name").textContent
    );
    cart.splice(cart.indexOf(product), 1);
    updateCart();
  });
});

updateCart();

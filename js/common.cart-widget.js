import { ProductsService } from "./products-service.js";

const cartWidgetSection = document.querySelector(".cart-widget");
const cartWidgetCounter = document.querySelector(".cart-widget__counter");
const modalCloseButton = document.querySelector("#modal-btn-close");
const modal = document.querySelector(".modal");

export class Cart {
  static #instance;

  constructor() {
    if (Cart.#instance) return Cart.#instance;
    Cart.#instance = this;
    this.productsService = new ProductsService();
    this.renderCart();
    this.addEventListeners();
  }

  addEventListeners() {
    // document.querySelector(".cart").addEventListener("click", this.renderCart.bind(this));
    // document.querySelector(".order").addEventListener("click", this.order.bind(this));
    window.addEventListener("storage", (event) => {
      if (event.key === "cart") {
        this.changeCartWidgetState();
        this.getCartProducts();
      }
    });
  }

  showCartWidget() {
    cartWidgetSection.classList.add("cart-widget__show");
  }

  hideCartWidget() {
    cartWidgetSection.classList.remove("cart-widget__show");
  }

  updateCartWidgetCounter() {
    const cart = localStorage.getItem("cart");
    let sum = 0;
    for (const wine of cart.split(",")) {
      sum += Number(wine.split(":")[1]);
    }
    cartWidgetCounter.innerHTML = sum;
  }

  changeQuantity(ev, operation) {
    ev.stopPropagation();
    operation.call(this, ev.target.id);
    this.renderCart();
  }

  changeCartWidgetState() {
    const cart = localStorage.getItem("cart");
    if (cart !== null && cart.length !== 0) {
      this.updateCartWidgetCounter();
      this.showCartWidget();
    } else {
      this.hideCartWidget();
    }
  }

  emptyCart() {
    localStorage.removeItem("cart");
    this.changeCartWidgetState();
  }

  async getCartProducts() {
    const cartProducts = [];
    const cartString = localStorage.getItem("cart") || "";
    for (const wine of cartString.split(",")) {
      const parts = wine.split(":");
      const id = parts[0];
      const q = parts[1];
      let product = await this.productsService.getProductById(id);
      product.quantity = q;
      product.sum = product.price * q;
      cartProducts.push(product);
    }

    return cartProducts;
  }

  addToCart(id, count) {
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
    this.changeCartWidgetState();
  }

  saveCart(cartObjects) {
    console.log(cartObjects);
    const cart = cartObjects.map((product) => `${product.id}:${product.quantity}`).join(",");
    localStorage.setItem("cart", cart);
  }

  toggleCartModal() {
    const isOpen = this.isCartModalOpen();
    if (!isOpen) {
      this.openCartModal();
    } else {
      this.closeCartModal();
    }
  }

  isCartModalOpen() {
    const cartModal = document.querySelector(".modal");
    return cartModal.style.display === "block";
  }

  openCartModal() {
    const cartModal = document.querySelector(".modal");
    cartModal.style.display = "block";
    this.renderCart();
  }

  closeCartModal() {
    const cartModal = document.querySelector(".modal");
    cartModal.style.display = "none";
  }

  async renderCart() {
    let total = 0;
    let cartDomString = "";

    const cart = await this.getCartProducts();
    console.log(cart);
    for (const productIndex in cart) {
      const product = cart[productIndex];
      cartDomString += await this.createCartProductDomString(product, productIndex);
      total += product.price * product.quantity;
    }

    cartDomString += `<div class="cart-row-total">
                            <div> </div>          
                            <div> </div>          
                            <div> </div>          
                            <div> </div>          
                            <div><strong>Total: ${formatPrice(total)}USD</strong></div>
                       </div>`;
    this.container = document.querySelector(".cart-container");
    this.container.innerHTML = cartDomString;
    console.log(this.container.innerHTML);
    this.container.querySelectorAll(".cart-row-quantity").forEach((el) => el.addEventListener("change", (ev) => this.updateQuantity(ev)));
    this.container.querySelectorAll(".cart-row-delete").forEach((el) => el.addEventListener("click", (ev) => this.deleteProductOperation(ev)));
  }

  async updateQuantity(ev) {
    const productIndex = ev.target.id;
    const cart = await this.getCartProducts();
    console.log(cart);
    console.log(productIndex);
    if (ev.target.value <= 0) {
      ev.target.value = 1;
      2;
    }
    cart[productIndex].quantity = ev.target.value;
    this.saveCart(cart);
    this.changeCartWidgetState();
    this.renderCart();
  }

  async deleteProductOperation(ev) {
    const productIndex = ev.target.id;
    const cart = await this.getCartProducts();
    console.log(cart);
    console.log(productIndex);
    cart.splice(productIndex, 1);
    this.saveCart(cart);
    this.changeCartWidgetState();
    this.renderCart();
  }

  async createCartProductDomString(product, index) {
    console.log(product);

    return `<div class="cart-row" data-id="${product.id}"> 
              <img src="${product.image}" alt="${product.name}" class="cart-thumbnail">
              <div class="cart-row-name"><strong>${product.name}</strong></div>
              <input type="number" id="${index}" value="${product.quantity}" class="cart-row-quantity"/>
              <div class="cart-row-price">${formatPrice(product.sum)}USD</div>
              <button>
                <svg id=${index} class="cart-row-delete" width="14" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2h3.6c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H.4C.2 4 0 3.9 0 3.6V2.4c0-.2.2-.4.4-.3h3.7V2L4.9.3c.1-.2.2-.3.4-.3h3.5c.1 0 .3.1.4.2l.8 1.7V2zM1.8 16.1c.1 1 1 1.9 2 1.9h6.3c1.1 0 1.9-.8 2-1.9l1-11.1H1l.8 11.1zM12 6l-.8 10.1c0 .5-.5.9-1 .9H3.8c-.5 0-1-.4-1-.9L2 6h10zM5 8.1h1v6H5v-6zm4 0H8v6h1v-6z" fill="#9199AB"></path></svg>
              </button>
            </div>`;
  }
}

const cart = new Cart();
cart.changeCartWidgetState();

cartWidgetSection.addEventListener("click", cart.toggleCartModal.bind(cart));
modalCloseButton.addEventListener("click", cart.closeCartModal.bind(cart));
modal.addEventListener("click", (ev) => {
  if (!document.querySelector(".modal-content").contains(ev.target)) {
    cart.closeCartModal();
  }
});
function formatPrice(price) {
  return price.toFixed(2).replace(".", ",");
}

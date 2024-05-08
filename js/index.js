function init() {
  import("./index.section-faq.js");
  import("./index.best-deals.js");
  import("./index.confirm-age.js");
  import("./common.cart-widget.js");
  import("./testimonials-slider.js")
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

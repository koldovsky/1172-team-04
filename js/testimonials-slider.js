window.onload = function () {
  const prevButton = document.querySelector(".testimonials__button--prev");
  const nextButton = document.querySelector(".testimonials__button--next");

  if (!prevButton || !nextButton) {
    console.error("Кнопки не знайдені!");
    return;
  }

  const testimonialsItems = Array.from(document.querySelectorAll(".testimonials__item"));
  let currentItem = 0;

  function updateTestimonialDisplay() {
    testimonialsItems.forEach((item, index) => {
      item.style.display = index === currentItem ? "block" : "none";
    });
  }

  prevButton.onclick = function () {
    currentItem = (currentItem + testimonialsItems.length - 1) % testimonialsItems.length;
    updateTestimonialDisplay();
  };

  nextButton.onclick = function () {
    currentItem = (currentItem + 1) % testimonialsItems.length;
    updateTestimonialDisplay();
  };

  updateTestimonialDisplay();
};
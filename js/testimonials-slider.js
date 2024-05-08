document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".testimonials__button--prev");
  const nextButton = document.querySelector(".testimonials__button--next");
  const testimonialsItems = document.querySelectorAll(".testimonials__item");
  let currentItem = 0;

  function updateTestimonialDisplay(index) {
    testimonialsItems.forEach((item, idx) => {
      if (idx === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  prevButton.addEventListener("click", () => {
    currentItem = (currentItem - 1 + testimonialsItems.length) % testimonialsItems.length;
    updateTestimonialDisplay(currentItem);
  });

  nextButton.addEventListener("click", () => {
    currentItem = (currentItem + 1) % testimonialsItems.length;
    updateTestimonialDisplay(currentItem);
  });

  updateTestimonialDisplay(currentItem); // Initialize display
});

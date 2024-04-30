const confirmAgeSection = document.querySelector(".confirm-age");
const body = document.querySelector("body");
const confirmAgeButtonYes = document.querySelector(".confirm-age__button-yes");
const confirmAgeButtonNo = document.querySelector(".confirm-age__button-no");

function showConfirmAge() {
  confirmAgeSection.classList.add("confirm-age__show");
  body.classList.add("confirm-age__no-scroll");
}

function hideConfirmAge() {
  confirmAgeSection.classList.remove("confirm-age__show");
  body.classList.remove("confirm-age__no-scroll");
}

function confirmAgeAnswerYes() {
  sessionStorage.setItem("ageConfirmed", true);
  hideConfirmAge();
}

function confirmAgeAnswerNo() {
  window.location.href = "not-allowed.html";
}

if (sessionStorage.getItem("ageConfirmed") !== "true") {
  showConfirmAge();
  confirmAgeButtonYes.addEventListener("click", confirmAgeAnswerYes);
  confirmAgeButtonYes.addEventListener("click", confirmAgeAnswerNo);
}

var backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 450) {
    backToTop.classList.add("show");

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
    });
  } else {
    backToTop.classList.remove("show");
  }
});

$(document).ready(function () {
  $.fakeLoader({
    bgColor: "#2B4865",
    spinner: "spinner6",
  });
});

const scriptURL = "https://script.google.com/macros/s/AKfycbyeg4O0Zo7Od8cx4ahnBTnC4SOL8tvD94N7uvqhi9pyYgzWNXwZtHw0ekIrC2NlGd-p0g/exec";
const form = document.forms["siKilat-contact-form"];
const btnSubmit = document.querySelector(".btn-submit");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnLoading.classList.toggle("d-none");
  btnSubmit.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnSubmit.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
    })
    .catch((error) => "");
});

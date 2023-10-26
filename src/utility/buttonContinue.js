const button_continue = document.querySelector(".button-continue");

button_continue.addEventListener("click", () => {
  let href = document.querySelector(".active-button");
  if (href) {
    window.location.href = href.dataset.email;;
  } else {
    return;
  }
});

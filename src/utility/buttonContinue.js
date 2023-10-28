export function addClickListenerToContinueBtn () {
  const buttonContinue = document.querySelector(".button-continue")

  buttonContinue.addEventListener("click", () => {
    const href = document.querySelector(".active-button")
    if (href) {
      window.location.href = href.dataset.email
    }
  })
}

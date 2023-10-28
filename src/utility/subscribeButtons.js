export function addClickListenerToSubscribeBtn() {
  const subscribeButtons = document.querySelectorAll(".subscribe-button");

  subscribeButtons.forEach((b, i) => {
    b.addEventListener("click", (e) => {
      const activeButtons = document.querySelectorAll(".active-button");
      if (
        !activeButtons.length
        || e.currentTarget.className == "subscribe-button active-button"
      ) {
        e.currentTarget.classList.toggle("active-button");
      } else {

      }
    });
  });
}

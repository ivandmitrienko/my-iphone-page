export function clamp (products, h1) {
  document.querySelector(".additional-button").style.cssText =
    "font-size: .68rem; top: -20%"
  const subscribeButtons = document.querySelectorAll(".subscribe-button")
  subscribeButtons.forEach(
    (el, i) => (el.style.cssText = "font-size: .85rem; padding-right: 2rem")
  )
  const cookies = document.querySelectorAll(".cookies")
  cookies.forEach((el, i) => (el.style.fontSize = ".5rem"))
  if (products) {
    const products = document.querySelectorAll(".iphone-app-images__item")
    products.forEach((el, i) => (el.style.fontSize = ".53rem"))
  }
  if (h1) {
    document.querySelector("h1").style.fontSize = "2.41rem"
  }
}

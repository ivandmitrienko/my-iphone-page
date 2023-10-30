import { setHeight } from "./setHeight"

export function init100vh () {
  window.addEventListener("resize", setHeight)
}

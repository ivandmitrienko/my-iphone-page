import { clamp } from "../clamp"

const products = true
const h1 = true

export function changeSizeOfFont (language) {
  switch (language) {
    case "de": {
      document.querySelector("h1").style.fontSize = "1.61rem"
      clamp()
      break
    }
    case "es": {
      clamp(products)
      break
    }
    case "fr": {
      clamp(products, h1)
      break
    }
    case "pt": {
      clamp(products, h1)
      break
    }
  }
}

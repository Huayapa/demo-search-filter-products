import { createPriceRangeObserver } from "./priceRange.observer"
import { renderPriceRange } from "./priceRange.render"
import { createPriceRange$ } from "./priceRange.stream"
import type { IPriceRangeElements } from "./priceRange.type"

export const initPriceRange = ({slider, priceLabel}: IPriceRangeElements) => {
  const api = renderPriceRange(slider)
  const priceRange$ = createPriceRange$(api)
  priceRange$.subscribe(createPriceRangeObserver(priceLabel))
  return {
    priceRange$,
    api
  }
}
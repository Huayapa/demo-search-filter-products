import { initPriceRange } from './modules/priceRange/priceRange.main';
import { initProducts } from './modules/products/products.main';
import { initResetFilters } from './modules/reset/reset.module';
import { createSearch$ } from './modules/search/search.main';
import { initSelects$ } from './modules/selects/selects.main';
import { getElement } from './shared/dom/getElement';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    search: getElement<HTMLInputElement>('searchInput'),
    selects: {
      brand: getElement<HTMLSelectElement>('brandSelect'),
      category: getElement<HTMLSelectElement>('categorySelect'),
      tag: getElement<HTMLSelectElement>('tagSelect'),
    },
    priceRange: {
      slider: getElement<HTMLElement>('priceRange'),
      priceLabel: getElement<HTMLElement>('priceLabel')
    }
  }

  const search$ = createSearch$(elements.search)
  const {category$, brand$, tag$} = initSelects$(elements.selects)
  const {priceRange$, api} = initPriceRange(elements.priceRange)
  initProducts({
    search: search$, 
    brand: brand$, 
    category: category$, 
    tag: tag$, 
    priceRange:priceRange$
  })

  initResetFilters({
    search: elements.search,
    brand: elements.selects.brand,
    category: elements.selects.category,
    tag: elements.selects.tag,
    priceRange: api,
  })
})
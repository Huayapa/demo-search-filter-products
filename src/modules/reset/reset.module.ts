import type { IProductFilterElements } from "../../shared/type/productTypes";

export function initResetFilters(element: IProductFilterElements):void {
  document.getElementById('resetFilters')?.addEventListener('click', () => {
    element.search.value = '';
    element.brand.value = '';
    element.category.value = '';
    element.tag.value = '';
    element.priceRange.set([0, 1000]);

    element.search.dispatchEvent(new Event('input'));
    [element.brand, element.category, element.tag].forEach((el) =>
      el.dispatchEvent(new Event('change')),
    );
  });
}
import { combineLatest, map, switchMap } from "rxjs";
import { allProducts } from "../../shared/services/productService";
import type { ISearchObservable } from "./products.types";

export const createProducts$ = (observers: ISearchObservable) =>
  combineLatest([
    observers.search,
    observers.brand,
    observers.category,
    observers.tag,
    observers.priceRange
  ]).pipe(
    switchMap(([searchValue, brandValue, categoryValue, tagValue, priceRange]) =>
      allProducts().pipe(
        map((products) =>
          products.filter((product) => {
            const { min, max } = priceRange;
            console.log(observers);
            
            if (
              product.price >= min &&
              product.price <= max &&
              (searchValue === '' || product.name.toLowerCase().includes(searchValue.toLowerCase())) &&
              (!brandValue || product.brand === brandValue) &&
              (!categoryValue || product.category === categoryValue) &&
              (!tagValue || product.tags?.includes(tagValue))
            ) {
              return product;
            }
          }),
        ),
      ),
    ),
  );
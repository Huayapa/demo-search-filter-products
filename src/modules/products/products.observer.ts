import type { Observer } from "rxjs";
import type { IProduct } from "../../shared/type/productTypes";
import { renderListProducts } from "./productsList.render";

export const observerProducts = ($list: HTMLElement): Observer<IProduct[]> => (
  {
    next: renderListProducts($list),
    error: (err) => console.error(err),
    complete: () => console.log('complete'),
  }
)
  

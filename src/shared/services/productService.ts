import { Observable } from 'rxjs';

import { products } from '../data/products';
import type { IProduct } from '../type/productTypes';

export const allProducts = () =>
  new Observable<IProduct[]>((subscribe) => {
    setTimeout(() => {
      subscribe.next(products);
      subscribe.complete();
    }, 500);
  });

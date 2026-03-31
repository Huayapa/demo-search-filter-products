import type { Observable } from "rxjs";
import type { Brand, Category, Tags } from "../../shared/type/productTypes";

export interface ISearchObservable {
  search: Observable<string>;
  brand: Observable<Brand>;
  category: Observable<Category>;
  tag: Observable<Tags>;
  priceRange: Observable<{min:number, max:number}>;
}
import { getElement } from "../../shared/dom/getElement";
import { observerProducts } from "./products.observer";
import { createProducts$ } from "./products.streams";
import type { ISearchObservable } from "./products.types";

export const initProducts = (observers: ISearchObservable):void => {
  const $list = getElement<HTMLElement>('listProds');
  const products$ = createProducts$(observers)
  products$.subscribe(observerProducts($list))
}
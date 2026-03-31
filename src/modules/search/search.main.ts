import { createSearchInput$ } from "./search.stream"

export const createSearch$ = (inputSearch: HTMLInputElement) => {
  return createSearchInput$(inputSearch)
}
import { debounceTime, distinctUntilChanged, fromEvent, map, merge, Observable, startWith } from "rxjs";

export const createSearchInput$ = ($input: HTMLInputElement): Observable<string> =>
merge(
  fromEvent($input, 'input'), 
  fromEvent($input, 'focus')
).pipe(
  map((e) => (e.target as HTMLInputElement).value),
  debounceTime(500),
  distinctUntilChanged(),
  startWith('')
);
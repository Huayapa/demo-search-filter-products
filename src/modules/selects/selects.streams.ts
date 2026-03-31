import { fromEvent, map, startWith, type Observable } from "rxjs";

export const createSelect$ = <T>($input: HTMLSelectElement): Observable<T> =>
fromEvent($input, 'change').pipe(
  map((e) => (e.target as HTMLSelectElement).value as T),
  startWith('' as T)
);

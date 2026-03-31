import type { API } from "nouislider";
import { fromEventPattern, map, Observable, startWith } from "rxjs";

export const createPriceRange$ = ($slider: API): Observable<{ min: number; max: number }> =>
fromEventPattern<string[]>(
  (handler) => {
    $slider.on('change', handler);
    $slider.on('set', handler);
  },
  () => {
    $slider.off('change');
    $slider.off('set');
  },
).pipe(
  map(([values]) => ({
    min: parseFloat(values[0]),
    max: parseFloat(values[1]),
  })),
  startWith({ min: 0, max: 1000 }),
);
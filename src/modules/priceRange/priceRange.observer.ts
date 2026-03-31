import type { Observer } from "rxjs";
export function createPriceRangeObserver($label: HTMLElement): Observer<{ min: number; max: number }> {
  return {
    next: ({ min, max }) => {
      $label.textContent = `$${min} - $${max}`
    },
    error: (err) => console.error(err),
    complete: () => console.log('complete'),
  }
}
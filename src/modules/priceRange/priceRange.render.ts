import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
export function renderPriceRange($input: HTMLElement) {
  return noUiSlider.create($input, {
    start: [0, 1000],
    connect: true,
    range: { min: 0, max: 1000 },
  });
}
export function renderSelect(selectTarget: HTMLSelectElement, arraySelect: string[], name:string):void {
  selectTarget.innerHTML = ''
  const $default = document.createElement('option');
  $default.value = '';
  $default.textContent = `Todas las ${name}`;
  selectTarget.appendChild($default);

  for (const option of arraySelect) {
    const $option = document.createElement('option');
    $option.value = option;
    $option.textContent = option;
    selectTarget.appendChild($option);
  }
}

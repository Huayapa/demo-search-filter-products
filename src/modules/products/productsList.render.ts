import { getElement } from "../../shared/dom/getElement";
import type { IProduct } from "../../shared/type/productTypes";

export const renderListProducts = (list:HTMLElement) => (result: IProduct[]) => {
  console.log('ha');
  list.replaceChildren();
  if(result.length > 0) {
    for (const prod of result) {
      const $li = document.createElement('li');
      $li.innerHTML = `
        <span class="product-name">${prod.name}</span>
        <span class="product-brand">${prod.brand}</span>
        <span class="product-price">$${prod.price}</span>
        <span class="product-category">${prod.category}</span>
        <section class="product-tags">
        ${prod.tags 
          ? prod.tags.map((tag) => `<span class="product-tag">${tag}</span>`).join('')
          : ''
        }
        </section>
        ${prod.discount ? `<span class="product-discount">-${prod.discount}%</span>` : ''}
      `;
      list.appendChild($li);
    } 
  } else {
    const $span = document.createElement('span')
    $span.textContent = 'No se encontraron productos'
    list.appendChild($span)
  }
};

const $list = getElement<HTMLElement>('listProds')
export const renderListProductsTest = (result: IProduct[]) => {
  $list.replaceChildren();
  if(result.length > 0) {
    for (const prod of result) {
      const $li = document.createElement('li');
      $li.innerHTML = `
        <span class="product-name">${prod.name}</span>
        <span class="product-brand">${prod.brand}</span>
        <span class="product-price">$${prod.price}</span>
        <span class="product-category">${prod.category}</span>
        <section class="product-tag">
        ${prod.tags 
          ? prod.tags.map((tag) => `<span class="product-category">${tag}</span>`).join('')
          : ''
        }
        </section>
        ${prod.discount ? `<span class="product-discount">-${prod.discount}%</span>` : ''}
      `;
      $list.appendChild($li);
    } 
  } else {
    const $span = document.createElement('span')
    $span.textContent = 'No se encontraron productos'
    $list.appendChild($span)
  }
};
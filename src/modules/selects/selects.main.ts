import { brandSelect, categorySelect, tagsSelect, type Brand, type Category, type Tags } from "../../shared/type/productTypes"
import { renderSelect } from "./selects.render"
import { createSelect$ } from "./selects.streams"
import type { ISelectElements } from "./selects.type"

export const initSelects$ = ({category, brand, tag}: ISelectElements) => {
  renderSelect(category, categorySelect, 'Categorias')
  renderSelect(brand, brandSelect, 'Marcas')
  renderSelect(tag, tagsSelect, 'Etiquetas')
  const category$ = createSelect$<Category>(category)
  const brand$ = createSelect$<Brand>(brand)
  const tag$ = createSelect$<Tags>(tag)
  return {category$, brand$, tag$}
}
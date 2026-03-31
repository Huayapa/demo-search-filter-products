export function getElement<T>(idInput:string): T {
  const $el = document.getElementById(idInput)
  if(!$el) throw new Error(`Id ${idInput} no encontrado`)
  return $el as T
}
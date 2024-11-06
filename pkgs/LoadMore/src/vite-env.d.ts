/// <reference types="vite/client" />
declare global {
  function html(
    e: TemplateStringsArray,
    ...a: Array<string | number | (string | number)[]>
  ): string
  type Targs = {
    name?: string
    type?: string
  }
}
export {}
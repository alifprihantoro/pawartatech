export type TListTags = {
  name: string
  link: string
}

const ListTags: TListTags[] = [
  { name: 'tech', link: '/label/tech' },
  { name: 'sports', link: '/label/sports' },
  { name: 'weather', link: '/label/weather' },
  { name: 'health', link: '/label/health' },
  { name: 'entertainment', link: '/label/entertainment' },
]
const LIST_LABEL = ListTags.map(({ link, name }) => {
  return html`<li>
    <a href="${link}"> ${name} </a>
  </li>`
}).join('')

export default {
  render: () => {
    return html`
      <div id="tags" class="w-full max-w-full block">
        <ul>
          ${LIST_LABEL}
        </ul>
      </div>
    `
  },
}
export const ListTag = {}

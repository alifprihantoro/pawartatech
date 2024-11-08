import listTag from './'

export type TListTags = {
  name: string
  link: string
}

const ListTags: TListTags[] = [
  {
    name: 'label1',
    link: '/label1',
  },
  {
    name: 'label2',
    link: '/label2',
  },
  {
    name: 'label3',
    link: '/label3',
  },
]
const LIST_LABEL = ListTags.map(({ link, name }) => {
  return html`<li>
    <a href="${link}"> ${name} </a>
  </li>`
}).join('')

export default {
  render: () => {
    return html`
      <div id="tags">
        <ul>
          ${listTag(LIST_LABEL)}
        </ul>
      </div>
    `
  },
}
export const ListTag = {}

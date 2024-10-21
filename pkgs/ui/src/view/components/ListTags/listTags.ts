const ListTags = [
  {
    name: 'tag 1',
    link: '#',
  },
  {
    name: 'tag 2',
    link: '#',
  },
  {
    name: 'tag 3',
    link: '#',
  },
  {
    name: 'tag 4',
    link: '#',
  },
]

export default ListTags.map(({ link, name }) => {
  return html` <a href="${link}" class="btn bg-base-300 btn-sm"> ${name} </a> `
}).join('')

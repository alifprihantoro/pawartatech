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
  return html` <a href="${link}" class="btn btn-primary btn-sm"> ${name} </a> `
}).join('')

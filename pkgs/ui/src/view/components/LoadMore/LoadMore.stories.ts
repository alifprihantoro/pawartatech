import Card from '../Card'
import LoadMoreBtn from '../pagenation/LoadMore'
import LoadMoreEl from './'

// create example news
const ExampleArticle = [
  {
    title: 'Tech Innovations in 2024',
    link: '/tech-innovations-2024',
    img: '/images.webp',
    spoiler:
      'Discover the latest breakthroughs in technology for the year 2024.',
  },
  {
    title: 'Web Development Trends',
    link: '/web-development-trends',
    img: '/images.webp',
    spoiler: 'Stay ahead with the newest trends in web development.',
  },
  {
    title: 'Neovim Lua Tips',
    link: '/neovim-lua-tips',
    img: '/images.webp',
    spoiler: 'Enhance your coding experience with these Neovim Lua tips.',
  },
  {
    title: 'JavaScript Best Practices',
    link: '/javascript-best-practices',
    img: '/images.webp',
    spoiler: 'Improve your JavaScript code with these best practices.',
  },
  {
    title: 'HTML & CSS Techniques',
    link: '/html-css-techniques',
    img: '/images.webp',
    spoiler: 'Learn advanced techniques for HTML and CSS.',
  },
]

const ElList = ExampleArticle.map(({ link, title, img, spoiler }) => {
  return Card({ link, title, img, spoiler })
}).join('')
export default {
  render: () => {
    return LoadMoreEl(ElList + LoadMoreBtn)
  },
}
export const LoadMore = {}

import Post from 'ui/src/view/pages/post'
import NextPrev from '../NextPrev'

export default html`
  ${Post({
    CardArgs: {
      title: 'hello world',
      img: '',
      spoiler: 'description',
    },
    isStoryBook: false,
    Content: '<data:post.body />',
    title: '<data:post.title />',
    NextPrev,
  })}
`
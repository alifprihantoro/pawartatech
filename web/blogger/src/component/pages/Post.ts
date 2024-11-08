import Post from 'ui/src/view/pages/post'
import NextPrev from '../NextPrev'
import BreadCrumb from '../breadcrumb'
import RelatedPost from '../relatedPost'

export default html`
  ${Post({
    Content: '<data:post.body />',
    title: '<data:post.title />',
    NextPrev,
    BreadCrumb,
    RelatedPost,
  })}
`

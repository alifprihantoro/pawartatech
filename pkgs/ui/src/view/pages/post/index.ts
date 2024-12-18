import Comment from '../../components/Comment'
import Scripts from 'mygisqus?raw'

export default function Post({
  Content,
  title,
  NextPrev,
  BreadCrumb,
  RelatedPost,
}: {
  Content: string
  title: string
  NextPrev: string
  BreadCrumb: string
  RelatedPost: string
}) {
  return html`
    <div class="prose lg:prose-xl m-auto">
      <b:if cond='data:blog.pageType != "static_page"'> ${BreadCrumb} </b:if>
      <article class="bg-base-300 p-6 rounded-xl m-auto">
        <h1>${title}</h1>
        <hr />
        ${Content}
      </article>
      <b:if cond='data:blog.pageType != "static_page"'>
        ${Comment(Scripts) + NextPrev}
        <h2 class="text-center uppercase font-Rokkit font-bold">Baca Juga :</h2>
        <div class="w-full my-12 ">${RelatedPost}</div>
      </b:if>
    </div>
  `
}
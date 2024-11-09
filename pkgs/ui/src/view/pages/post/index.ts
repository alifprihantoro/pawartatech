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
      ${BreadCrumb}
      <article class="bg-base-300 p-6 rounded-xl m-auto">
        <h1>${title}</h1>
        <hr />
        ${Content}
      </article>
      ${NextPrev}
      <h2 class="text-center uppercase font-Rokkit font-bold">Baca Juga :</h2>
      <div class="w-full my-12 ">${RelatedPost}</div>
    </div>
  `
}

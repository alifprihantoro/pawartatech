import Card, { TCardArgs } from '../../components/Card'

export default function Post({
  Content,
  CardArgs,
  isStoryBook,
  title,
  NextPrev,
}: {
  Content: string
  title: string
  CardArgs: TCardArgs
  isStoryBook: boolean
  NextPrev: string
}) {
  const Article = []
  const NextPrevEl = []
  if (isStoryBook) {
    for (let i = 0; i <= 5; i++) {
      Article.push(Card(CardArgs))
    }
    NextPrevEl.push(NextPrev)
  } else {
    Article.push(Card(CardArgs))
    NextPrevEl.push(NextPrev)
  }
  return html`
    <div class="prose lg:prose-xl m-auto">
      <article class="bg-base-300 p-6 rounded-xl m-auto">
        <h1>${title}</h1>
        <hr />
        ${Content}
      </article>
      ${NextPrevEl}
    </div>
    <h2 class="text-center uppercase font-Rokkit font-bold">Baca Juga :</h2>
    <div class="w-full my-12">${Article.join('')}</div>
  `
}

import Card, { TCardArgs } from '../../components/Card'
import NextPrev from '../../components/pagenation/NextPrev'

export default function Post({
  Content,
  CardArgs,
}: {
  Content: string
  CardArgs: TCardArgs
}) {
  const Article = []
  for (let i = 0; i <= 5; i++) {
    Article.push(Card(CardArgs))
  }
  return html`
    <div class="prose lg:prose-xl m-auto">
      <article class="bg-base-300 p-6 rounded-xl m-auto">
        <h1>Title</h1>
        <hr />
        ${Content}
      </article>
      ${NextPrev()}
    </div>
    <h2 class="text-center uppercase font-Rokkit font-bold">Baca Juga :</h2>
    <div class="w-full my-12">${Article.join('')}</div>
  `
}

import Card, { TCardArgs } from '../../components/Card'
import LoadMore from '../../components/pagenation/LoadMore'

export default function Home({
  CardArgs,
}: {
  CardArgs: TCardArgs
  ListTagsArgs: string
}) {
  const Article = []
  for (let i = 0; i <= 5; i++) {
    Article.push(Card(CardArgs))
  }
  return html`
    <div class="w-full my-12">${Article.join('')}</div>
    <div class="text-center m-6">${LoadMore()}</div>
  `
}

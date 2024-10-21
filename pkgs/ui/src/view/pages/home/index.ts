import Card, { TCardArgs } from '../../components/Card'
import ListTags from '../../components/ListTags'

export default function Home({
  CardArgs,
}: {
  CardArgs: TCardArgs
  ListTagsArgs: string
}) {
  return ListTags() + Card(CardArgs)
}
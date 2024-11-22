import Card from 'ui/src/view/components/Card'
import getFeed from './getFeed'

type TArgsListContent = {
  published: { $t: string }
  updated: { $t: string }
  title: { $t: string }
  summary: { $t: string }
  media$thumbnail?: {
    url: string
  }
  link: { rel: string; href: string }[]
  author: {
    name: { $t: string }
    gd$image: { src: string }
  }[]
}
export type TArgsRender = (Args: TArgsListContent) => string
export default async function RenderLoadmore(PAGE_NUM: number) {
  const { LIST_CONTET, isNext } = await getFeed(PAGE_NUM)
  const ListEl: string[] = LIST_CONTET.map(
    (ArgsListContent: TArgsListContent) => {
      const { link, summary, title } = ArgsListContent
      const IMG = ArgsListContent.media$thumbnail?.url

      return Card({
        title: title.$t,
        img: IMG,
        spoiler: summary.$t,
        link: link
          .map(({ rel, href }) => {
            if (rel === 'alternate') {
              return href
            }
          })
          .join(''),
      })
    },
  )
  return [ListEl.join(''), isNext] as const
}

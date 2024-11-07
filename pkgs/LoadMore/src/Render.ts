import Card from 'ui/src/view/components/Card'
import getFeed from './getFeed'

type TArgsListContent = {
  published: { $t: string }
  updated: { $t: string }
  title: { $t: string }
  summary: { $t: string }
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
    ({ link, summary, author, title }: TArgsListContent) => {
      return Card({
        title: title.$t,
        img: author[0].gd$image.src,
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
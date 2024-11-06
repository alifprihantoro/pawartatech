export default async function getFeed() {
  const MAX = 5
  const BLOG_NAME = 'pawartatech'
  const ORDER_BY = 'updated' // updated, starttime
  const START_INDEX = 1
  // const SEARCH = '&q='
  // const LABEL = 'category=Blogger'
  const URL_FEED = `https://${BLOG_NAME}.blogspot.com/feeds/posts/summary?alt=json&max-results=${MAX}&start-index=${START_INDEX}&orderby=${ORDER_BY}`
  const CONTENT = await fetch(URL_FEED).then((res) => res.json())

  const FEED = CONTENT.feed
  const isNext: boolean = FEED.link.some(({ rel }: { rel: string }) => {
    if (rel === 'next') {
      return true
    }
  })

  const LIST_CONTET = FEED.entry
  return { isNext, LIST_CONTET }
}
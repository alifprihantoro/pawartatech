export default async function getFeed(PAGE_NUM: number) {
  const getLabelFromUrl = () => {
    const PATH_NAME = new URL(window.location.href).pathname
    const Regex = /\/search\/label\//gim
    if (PATH_NAME.match(Regex)) {
      return '&category=' + PATH_NAME.replace(Regex, '')
    }
    return ''
  }
  const MAX = 5
  const BLOG_NAME = 'pawartatech'
  const ORDER_BY = 'updated' // updated, starttime
  const START_INDEX = PAGE_NUM
  // const SEARCH = '&q='
  const LABEL = getLabelFromUrl()
  const URL_FEED = `https://${BLOG_NAME}.blogspot.com/feeds/posts/summary?alt=json&max-results=${MAX}&start-index=${START_INDEX}&orderby=${ORDER_BY}${LABEL}`
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

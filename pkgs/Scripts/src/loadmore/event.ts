import RenderLoadmore from './Render'
import LoadMore from 'ui/src/view/components/pagenation/LoadMore'
import Loading from 'ui/src/view/components/Loading'

// TODO: multiple author
export default async function LoadMoreEvent(PAGE_NUM: number) {
  const ElList = document.getElementById('LoadMoreList')!
  const ElListBtn = document.getElementById('LoadMoreBtn')!
  const OLD_EL = ElList.innerHTML

  ElList.innerHTML = Loading
  ElListBtn.innerHTML = ''

  const [CONTENT_LIST, isNext] = await RenderLoadmore(PAGE_NUM)
  ElList.innerHTML = OLD_EL + CONTENT_LIST

  if (isNext) {
    ElListBtn.innerHTML = LoadMore
    ElListBtn.onclick = () => {
      LoadMoreEvent(PAGE_NUM + 1)
    }
  }
}

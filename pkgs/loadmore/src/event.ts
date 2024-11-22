import RenderLoadmore from './Render'
import LoadMoreBtn from 'ui/src/view/components/pagenation/LoadMore'

export default async function LoadMoreEvent(PAGE_NUM: number) {
  const ElList = document.getElementById('LoadMoreList')!
  const ElListBtn = document.getElementById('LoadMoreBtn')!
  let OLD_EL = ElList.innerHTML

  if (PAGE_NUM > 1) {
    ElList.innerHTML = ''
    ElListBtn.innerHTML = ''
  } else {
    OLD_EL = ''
  }

  const [CONTENT_LIST, isNext] = await RenderLoadmore(PAGE_NUM)
  ElList.innerHTML = OLD_EL + CONTENT_LIST

  if (isNext) {
    ElListBtn.innerHTML = LoadMoreBtn
    ElListBtn.onclick = () => {
      LoadMoreEvent(PAGE_NUM + 1)
    }
  } else {
    ElListBtn.innerHTML = ''
  }
}

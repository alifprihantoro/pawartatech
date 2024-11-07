import RenderLoadmore from './Render'

// TODO: multiple author
export default async function LoadMoreEvent(PAGE_NUM: number) {
  const [CONTENT_LIST, isNext] = await RenderLoadmore(PAGE_NUM)
  const ElList = document.getElementById('LoadMoreList')
  const ElListBtn = document.getElementById('LoadMoreBtn')

  if (ElListBtn && !isNext) {
    ElListBtn.remove()
  }

  if (ElList) {
    ElList.innerHTML += CONTENT_LIST
    const ElBtn = document.getElementById('LoadMoreBtn')

    if (ElBtn) {
      ElBtn.onclick = () => {
        LoadMoreEvent(PAGE_NUM + 1)
      }
    }
  }
}

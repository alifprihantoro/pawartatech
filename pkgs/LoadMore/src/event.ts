import RenderLoadmore from './Render'

// TODO: multiple author
export default async function LoadMoreEvent() {
  const [CONTENT_LIST, isNext] = await RenderLoadmore()
  const ElList = document.getElementById('LoadMoreList')
  const ElListBtn = document.getElementById('LoadMoreListBtn')

  if (ElListBtn && isNext) {
    ElListBtn.remove()
  }

  if (ElList) {
    ElList.innerHTML = CONTENT_LIST
    const ElBtn = document.getElementById('LoadMoreListBtn')

    if (ElBtn) {
      ElBtn.onclick = () => {
        LoadMoreEvent
      }
    }
  }
}

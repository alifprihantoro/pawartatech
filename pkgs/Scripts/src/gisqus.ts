;(function () {
  let isClick = false
  let isHide = true
  const ELEMENT_COMMENT = document.getElementById('content-comment')!
  const BtnToggle = document.getElementById('toggle-comment')!
  BtnToggle.onclick = () => {
    ELEMENT_COMMENT.classList.toggle('hidden')
    if (isHide) {
      isHide = false
      BtnToggle.innerHTML = 'Hide Comments'
    } else {
      isHide = true
      BtnToggle.innerHTML = 'Show Comments'
    }
    if (!isClick) {
      isClick = true
      const REPO = 'alifprihantoro/pawartatech'
      const REPO_ID = 'R_kgDONCtgBQ'
      const DATA_CATEGORY = 'Gisqus'
      const CATEGORY_ID = 'DIC_kwDONCtgBc4CkVdt'
      const DATA_MAPPING = 'pathname'
      const isLazy = true
      const DATA_THEMES = 'dark'
      const script = document.createElement('script')
      script.src = 'https://giscus.app/client.js'
      script.setAttribute('data-repo', REPO)
      script.setAttribute('data-repo-id', REPO_ID)
      script.setAttribute('data-category', DATA_CATEGORY)
      script.setAttribute('data-category-id', CATEGORY_ID)
      script.setAttribute('data-mapping', DATA_MAPPING)
      script.setAttribute('data-strict', '1')
      script.setAttribute('data-reactions-enabled', '1')
      script.setAttribute('data-emit-metadata', '1')
      script.setAttribute('data-input-position', 'top')
      script.setAttribute('data-theme', DATA_THEMES)
      if (isLazy) {
        script.setAttribute('data-loading', 'lazy')
      }
      script.setAttribute('data-lang', 'id')
      script.setAttribute('crossorigin', 'anonymous')
      ELEMENT_COMMENT.appendChild(script)
    }
  }
})()

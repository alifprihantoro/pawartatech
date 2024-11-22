import script from 'loadmore?raw'
import Loading from 'ui/src/view/components/Loading'

export default html`
  <div id="LoadMoreList">${Loading(5)}</div>
  <div id="LoadMoreBtn" class="w-full mb-6">
    <button class="btn bg-base-300 block m-auto">
      Loading
      <span class="loading loading-spinner loading-xs"></span>
    </button>
  </div>

  <script defer>
    //<![CDATA[
    ${script}
    //]]>
  </script>
`

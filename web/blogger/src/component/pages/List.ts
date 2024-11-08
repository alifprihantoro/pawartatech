import script from 'loadmore?raw'
import LoadMore from 'ui/src/view/components/pagenation/LoadMore'

//TODO: dont render block
export default html`
  <div id="LoadMoreList"></div>
  <div class="w-full mb-6">${LoadMore}</div>

  <script async type="module">
    //<![CDATA[
    ${script}
    //]]>
  </script>
`

import script from 'loadmore?raw'

//TODO: dont render block
export default html`
  <div id="LoadMoreList">
    <div class="btn" id="LoadMoreBtn">Load More</div>
  </div>
  <script async type="module">
    //<![CDATA[
    ${script}
    //]]>
  </script>
`
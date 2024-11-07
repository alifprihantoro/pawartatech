import script from 'loadmore?raw'

//TODO: dont render block
export default html`
  <div id="LoadMoreList"></div>
  <div class="w-full mb-6">
    <button class="btn bg-base-300 block m-auto" id="LoadMoreBtn">
      Load More
    </button>
  </div>
  <script async type="module">
    //<![CDATA[
    ${script}
    //]]>
  </script>
`

export default html`
  <b:if cond='data:blog.pageType == "item"'>
    <div class="flex justify-between w-full my-12" id="blog-pager">
      <b:if cond="data:newerPageUrl">
        <a
          expr:href="data:newerPageUrl"
          expr:id='data:widget.instanceId + "_blog-pager-newer-link"'
          expr:title="data:newerPageTitle"
          class="btn btn-sm"
          >Next</a
        >
        <b:else />
        <span
          ><h6>Next</h6>
          <h5>This is the most recent post.</h5></span
        >
      </b:if>
      <a href="#" class="btn btn-sm">Top</a>
      <b:if cond="data:olderPageUrl">
        <a
          expr:href="data:olderPageUrl"
          expr:id='data:widget.instanceId + "_blog-pager-older-link"'
          expr:title="data:olderPageTitle"
          class="btn btn-sm"
          >Previous</a
        >
        <b:else />
        <span
          ><h6>Previous</h6>
          <h5>This is the last post.</h5></span
        >
      </b:if>
    </div>
  </b:if>
`

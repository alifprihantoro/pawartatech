export default html`
<b:if cond='data:blog.pageType == "index"'>
  <title>Blogger, Code and Ubuntu Platform -
      <data:blog.pageTitle />
  </title>
  <b:else />
  <b:if cond='data:blog.pageType != "error_page"'>
      <title>
          <data:blog.pageName /> -
          <data:blog.title />
      </title>
  </b:if>
</b:if>
<b:if cond='data:blog.pageType == "error_page"'>
  <title>Page Not Found -
      <data:blog.title />
  </title>
</b:if>
`
export default html`
  <!-- Breadcrumb Blogger by igniel.com -->
  <b:if cond="data:view.isPost">
    <b:loop values="data:posts" var="post">
      <div
        class="breadcrumb"
        itemscope="itemscope"
        itemtype="https://schema.org/BreadcrumbList">
        <span
          itemprop="itemListElement"
          itemscope="itemscope"
          itemtype="https://schema.org/ListItem">
          <meta content="1" itemprop="position" />
          <a
            class="no-underline"
            expr:href="data:blog.homepageUrl.canonical"
            title="Home"
            itemprop="item">
            <span itemprop="name">Home</span>
          </a>
        </span>
        <b:if cond="data:post.labels">
          <b:loop index="num" values="data:post.labels" var="label">
            &amp;nbsp;&#8250;&amp;nbsp;
            <span
              itemprop="itemListElement"
              itemscope="itemscope"
              itemtype="https://schema.org/ListItem">
              <meta expr:content="data:num+2" itemprop="position" />
              <a
                expr:href="data:label.url.canonical"
                class="no-underline"
                expr:title="data:label.name"
                itemprop="item">
                <span itemprop="name"><data:label.name /></span>
              </a>
            </span>
          </b:loop>
          <b:else />
          &amp;nbsp;&#8250;&amp;nbsp; Tidak Ada Kategori
        </b:if>
      </div>
    </b:loop>
  </b:if>
`

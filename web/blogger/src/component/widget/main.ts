type TArgs = {
  postContent: string
}
export default function MainWidget({ postContent }: TArgs) {
  return html`
    <b:section class="main" id="main" showaddelement="yes">
      <b:widget id="Blog1" locked="false" title="Postingan Blog" type="Blog">
        <b:includable id="main" var="top">
          <b:if cond="!data:mobile">
            <!-- posts -->
            <div class="blog-posts hfeed">
              <b:loop values="data:posts" var="post">
                <b:if
                  cond="data:post.isDateStart and not data:post.isFirstPost">
                  &lt;/div&gt;&lt;/div&gt;
                </b:if>
                <b:if cond="data:post.isDateStart">
                  &lt;div class=&quot;date-outer&quot;&gt;
                </b:if>
                <div class="post-outer">
                  <b:include data="post" name="post" />
                  <b:include
                    cond='data:blog.pageType in {"static_page","item"}'
                    data="post"
                    name="comment_picker" />
                </div>
              </b:loop>
              <b:if cond="data:numPosts != 0"> &lt;/div&gt;&lt;/div&gt; </b:if>
            </div>
            <b:else />
            <b:include name="mobile-main" />
          </b:if>
        </b:includable>
        <b:includable id="post" var="post">
          <b:if
            cond='data:blog.pageType == "item" || data:blog.pageType == "static_page"'>
            ${postContent}
          </b:if>
        </b:includable>
      </b:widget>
    </b:section>
  `
}

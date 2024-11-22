import myCss from 'ui/src/assets/css/main.css?inline'
import Layout from 'ui/src/view/layouts'
import seo from './seo'
import MainWidget from './widget/main'
import NotFound from './pages/NotFound'
import listPost from './pages/List'
import postContent from './pages/Post'
import tags from './widget/tags'

export default html`
  <html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:b="http://www.google.com/2005/gml/b"
    xmlns:data="http://www.google.com/2005/gml/data"
    xmlns:expr="http://www.google.com/2005/gml/expr">
    &lt;!--<head>
      --&gt;&lt;head&gt; ${seo}
      <b:skin> <![CDATA[ ${myCss} ]]> </b:skin>
      &lt;!--</head
    >--&gt;&lt;/head&gt; &lt;!--
    <body>
      --&gt;&lt;body&gt; ${Layout(`
        <b:if cond='data:blog.pageType != "error_page"'>
          ${tags}
          <b:if cond='data:blog.pageType != "item"'>
          <b:if cond='data:blog.pageType != "static_page"'>
          ${listPost}
          </b:if>
          </b:if>
          ${MainWidget({ postContent })}
          <b:else />
          ${NotFound}
        </b:if>
      <style>
<![CDATA[
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap');
]]>
      </style>
      `)} &lt;!--
    </body>
    --&gt;&lt;/body&gt;
  </html>
`

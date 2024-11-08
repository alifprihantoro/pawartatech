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
      --&gt;&lt;head&gt;
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      ${seo}
      <b:skin> <![CDATA[ ${myCss} ]]> </b:skin>
      &lt;!--</head
    >--&gt;&lt;/head&gt; &lt;!--
    <body>
      --&gt;&lt;body&gt; ${Layout(`
        <b:if cond='data:blog.pageType != "error_page"'>
          ${tags}
          ${MainWidget({ postContent })}
          <b:if cond='data:blog.pageType != "item"'>
          ${listPost}
          </b:if>
          <b:else />
          ${NotFound}
        </b:if>
      `)} &lt;!--
    </body>
    --&gt;&lt;/body&gt;
  </html>
`
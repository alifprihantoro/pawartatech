export default function (Scripts: string) {
  return html`
    <button class="btn btn-primary w-full" id="toggle-comment">
      show comment
    </button>
    <div id="content-comment" class="hidden"></div>
    <script defer>
      //<![CDATA[
      ${Scripts}
      //]]>
    </script>
  `
}

import listHtml from './list'

const TITLE = 'PAWARTA TECH'
export default function () {
  return html`
    <div class="navbar bg-base-300">
      <button class="btn btn-ghost text-xl">${TITLE}</button>
      <nav
        class="fixed bottom-0 left-0 z-50 w-full
        flex justify-center items-center
        md:static md:justify-end md:items-end
        "
        data-aos="zoom-in">
        <div class="w-fit h-fit m-auto md:mr-0">
          <ul
            class="menu menu-horizontal bg-base-200 md:bg-transparent rounded-box align-middle">
            ${listHtml}
          </ul>
        </div>
      </nav>
    </div>
  `
}

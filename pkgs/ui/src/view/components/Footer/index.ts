import ListSosmed from './Sosmed'

export default function Footer() {
  return html`
    <footer
      class="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div class="grid grid-flow-col gap-4">${ListSosmed}</div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Pawarta Tech</p>
      </aside>
    </footer>
  `
}

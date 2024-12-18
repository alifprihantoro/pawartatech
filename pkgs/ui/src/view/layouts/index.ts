import Footer from '../components/Footer'
import nav from '../components/Nav'

export default function Layouts(childern: string) {
  return html`
    <div class="max-w-full md:max-w-7xl mx-auto" data-theme="dark">
      ${nav()} ${childern} ${Footer()}
    </div>
  `
}

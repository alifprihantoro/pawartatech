import Footer from '../components/Footer'
import ListTags from '../components/ListTags'
import nav from '../components/nav'

export default function Layouts(childern: string) {
  return html`
    <div class="w-full max-w-7xl mx-auto" data-theme="dark">
      ${nav()} ${ListTags()} ${childern} ${Footer()}
    </div>
  `
}

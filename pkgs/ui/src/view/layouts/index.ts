import Footer from '../components/Footer'
import nav from '../components/nav'

export default function Layouts(childern: string) {
  return html` ${nav()} ${childern} ${Footer()} `
}

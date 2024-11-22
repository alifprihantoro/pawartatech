// export default html`
//   <div class="w-full flex justify-center">
//     <span class="loading loading-bars loading-xs"></span>
//   </div>
// `
import Skeleton from '../Skeleton'

export default function Loading(ArticleSize: number) {
  let result = ''
  for (let i = 0; i < ArticleSize; i++) {
    result += Skeleton
  }
  return result
}

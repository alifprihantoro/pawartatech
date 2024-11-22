export type TCardArgs = {
  title: string
  img?: string
  spoiler: string
  link: string
}
export default function Card({ title, img, spoiler, link }: TCardArgs) {
  const DEFAULT_IMG = ''
  const IMG =
    img || DEFAULT_IMG
      ? `<img loading="lazy" class="max-w-full w-80" src="${img || DEFAULT_IMG}" alt="Album" />`
      : '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="white" d="M30 3.414L28.586 2L2 28.586L3.414 30l2-2H26a2.003 2.003 0 0 0 2-2V5.414zM26 26H7.414l7.793-7.793l2.379 2.379a2 2 0 0 0 2.828 0L22 19l4 3.997zm0-5.832l-2.586-2.586a2 2 0 0 0-2.828 0L19 19.168l-2.377-2.377L26 7.414zM6 22v-3l5-4.997l1.373 1.374l1.416-1.416l-1.375-1.375a2 2 0 0 0-2.828 0L6 16.172V6h16V4H6a2 2 0 0 0-2 2v16z"/></svg>'

  return html`
    <div class="card lg:card-side bg-base-100 shadow-xl my-6 mx-3">
      <figure>${IMG}</figure>
      <div class="card-body">
        <a href="${link}"><h2 class="card-title">${title}</h2></a>
        <p>${spoiler}</p>
        <div class="card-actions justify-end">
          <a href="${link}"><button class="btn bg-base-300">Baca</button></a>
        </div>
      </div>
    </div>
  `
}

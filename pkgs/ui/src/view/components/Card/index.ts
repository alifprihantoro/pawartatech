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
      ? `<img loading="lazy" class="min-w-full w-80" src="${img || DEFAULT_IMG}" alt="Album" />`
      : ''

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

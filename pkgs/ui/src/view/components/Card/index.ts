export type TCardArgs = {
  title: string
  img: string
  spoiler: string
}
export default function Card({ title, img, spoiler }: TCardArgs) {
  return html`
    <div class="card lg:card-side bg-base-100 shadow-xl my-6 mx-3">
      <figure>
        <img src="${img}" alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${title}</h2>
        <p>${spoiler}</p>
        <div class="card-actions justify-end">
          <button class="btn bg-base-300">Baca</button>
        </div>
      </div>
    </div>
  `
}

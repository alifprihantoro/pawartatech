export default function Card({
  title,
  img,
  spoiler,
}: {
  title: string
  img: string
  spoiler: string
}) {
  return html`
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src="${img}" alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${title}</h2>
        <p>${spoiler}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Baca</button>
        </div>
      </div>
    </div>
  `
}

export default html`
  <div class="join">
    <div>
      <div>
        <input class="input input-bordered join-item" placeholder="Search" />
      </div>
    </div>
    <select class="select select-bordered join-item">
      <option disabled selected>Filter</option>
      <option>Sci-fi</option>
      <option>Drama</option>
      <option>Action</option>
    </select>
    <div class="indicator">
      <span class="indicator-item badge badge-secondary">new</span>
      <button class="btn join-item">Search</button>
    </div>
  </div>
`
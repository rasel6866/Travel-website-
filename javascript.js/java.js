// Destination Data
const destinations = [
  {
    name: "Cox's Bazar",
    category: "sea",
    img: "images/coxs.jpg",
    desc: "The world's longest sandy beach, perfect for sea lovers.",
    link: "details-coxs.html"
  },
  {
    name: "Sajek Valley",
    category: "hill",
    img: "images/sajek.jpg",
    desc: "Beautiful hill area in Rangamati, also called the queen of hills.",
    link: "details-sajek.html"
  },
  {
    name: "Sundarbans",
    category: "forest",
    img: "images/sundarban.jpg",
    desc: "The largest mangrove forest and home of the Royal Bengal Tiger.",
    link: "details-sundarban.html"
  },
  {
    name: "Saint Martin",
    category: "sea",
    img: "images/saintmartin.jpg",
    desc: "A small coral island with crystal clear water.",
    link: "details-saintmartin.html"
  },
  {
    name: "Bandarban",
    category: "hill",
    img: "images/bandarban.jpg",
    desc: "Stunning green hills and waterfalls, a paradise for travelers.",
    link: "details-bandarban.html"
  }
];

// Render Destinations
const list = document.getElementById("destinationList");
const searchBox = document.getElementById("searchBox");
const filterCategory = document.getElementById("filterCategory");

function renderDestinations(filterText = "", category = "all") {
  list.innerHTML = "";
  destinations
    .filter(d => d.name.toLowerCase().includes(filterText.toLowerCase()))
    .filter(d => category === "all" || d.category === category)
    .forEach(d => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${d.img}" alt="${d.name}">
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
        <a href="${d.link}" class="btn">View Details</a>
      `;
      list.appendChild(card);
    });
}

// Initial Render
renderDestinations();

// Event Listeners
searchBox.addEventListener("input", e => {
  renderDestinations(e.target.value, filterCategory.value);
});
filterCategory.addEventListener("change", e => {
  renderDestinations(searchBox.value, e.target.value);
});

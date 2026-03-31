const cards = [
  { title: "Card 1", img: "https://via.placeholder.com/150", desc: "Description 1" },
  { title: "Card 2", img: "https://via.placeholder.com/150", desc: "Description 2" },
  { title: "Card 3", img: "https://via.placeholder.com/150", desc: "Description 3" }
];

const container = document.getElementById('card-container');

cards.forEach(card => {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.innerHTML = `
    <img src="${card.img}" alt="${card.title}" />
    <h3>${card.title}</h3>
    <p>${card.desc}</p>
  `;
  container.appendChild(cardDiv);
});

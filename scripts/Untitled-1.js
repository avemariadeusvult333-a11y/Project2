const coolGames = [
  {
    name: "Metro Exodus",
    href: "pages/Metro.html",
    year: 2019,
    rating: 8.5,
    multiplayer: false
  },
  {
    name: "Resident Evil 3",
    href: "pages/ResdidentEvil.html",
    year: 2020,
    rating: 8.0,
    multiplayer: false
  },
  {
    name: "The Witcher 3",
    href: "pages/TheWitcher3.html",
    year: 2015,
    rating: 9.5,
    multiplayer: false
  }
];
const container = document.querySelector("#games");
coolGames.forEach(game => {
  let status;
  if (game.year > 2020) {
    status = "Новая игра";
  } else {
    status = "Классика";
  }
  const card = document.createElement("div");

  card.innerHTML = `
    <h3>${game.name}</h3>
    <p>Год: ${game.year}</p>
    <p>Рейтинг: ${game.rating}</p>
    <p>Мультиплеер: ${game.multiplayer ? "да" : "нет"}</p>
    <p>${status}</p>
    <a href="${game.href}">Открыть страницу</a>
  `;
  container.appendChild(card);
});


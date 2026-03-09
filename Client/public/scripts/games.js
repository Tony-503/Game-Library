let allGames = [];



const renderGameCards = (games) => {
  const mainContainer = document.querySelector('.main-container');
  mainContainer.innerHTML = '';

  if (!games || games.length === 0) {
    const message = document.createElement('h2');
    message.textContent = 'No games found.';
    mainContainer.appendChild(message);
    return;
  }

  games.forEach((game) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const topSection = document.createElement('div');
    topSection.classList.add('top-section');
    card.appendChild(topSection);

    const buttomSection = document.createElement('div');
    buttomSection.classList.add('buttom-section');
    card.appendChild(buttomSection);

    const image = document.createElement('img');
    image.src = game.image;
    image.alt = `${game.name} cover art`;
    topSection.appendChild(image);

    const name = document.createElement('h3');
    name.textContent = game.name;
    buttomSection.appendChild(name);

    const pricePoint = document.createElement('p');
    pricePoint.textContent = 'Price: ' + game.pricePoint;
    buttomSection.appendChild(pricePoint);

    const audience = document.createElement('p');
    audience.textContent = 'Audience: ' + game.audience;
    buttomSection.appendChild(audience);

    const link = document.createElement('a');
    link.textContent = 'More Details';
    link.classList.add('details-link');
    link.setAttribute('role', 'button');

    const slug = game.name;
    link.href = `/games/${game.id}-${slug.toLowerCase().replace(/\s+/g, '-')}`;
    buttomSection.appendChild(link);

    mainContainer.appendChild(card);
  });
};

const applySearchAndRender = () => {
  const searchInput = document.querySelector('#searchInput');
  const text = (searchInput?.value || '').toLowerCase().trim();

  const filtered = allGames.filter((game) =>
    game.name.toLowerCase().includes(text)
  );

  renderGameCards(filtered);
};

const setupSearchListener = () => {
  const searchInput = document.querySelector('#searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', applySearchAndRender);
};

const renderGames = async () => {
  try {
    const response = await fetch('/api/games');
    allGames = await response.json();
    renderGameCards(allGames);
    setupSearchListener();
  } catch (error) {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.innerHTML = '<h2>Could not load games.</h2>';
    console.error('Failed to load games:', error);
  }
};



const path = window.location.pathname;
const isHomePage = path === '/' || path.endsWith('/index.html');

if (isHomePage) {
  renderGames();
} else {
  window.location.href = '/404.html';
}


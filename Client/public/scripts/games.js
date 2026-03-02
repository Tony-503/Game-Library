const renderGames = async () => {
  const response = await fetch('/api/games');
    const games = await response.json();

  const mainContainer = document.querySelector('.main-container');

    if(games){
      games.map(game => {
        const card = document.createElement('div')
        card.classList.add('game-card');
        mainContainer.appendChild(card);

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

        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        topSection.appendChild(textContainer); 

        const name = document.createElement('h3');
        name.textContent = game.name;
        textContainer.appendChild(name);

        const pricePoint = document.createElement('p');
        pricePoint.textContent = 'Price: $' + game.pricePoint;
        textContainer.appendChild(pricePoint);

        const audience = document.createElement('p');
        audience.textContent = 'Audience: ' + game.audience;
        textContainer.appendChild(audience);

        const link = document.createElement('a');
        link.textContent = 'More Details';
        link.classList.add('details-link');
        link.setAttribute('role', 'button');
        const slug = game.name
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        link.href = `/games/${game.id}-${slug}`;
        textContainer.appendChild(link);

        card.appendChild(topSection);
        card.appendChild(buttomSection);
        mainContainer.appendChild(card);
      })

    }else{
      const message = document.createElement('h2');
      message.textContent = 'No games found.';
      mainContainer.appendChild(message);
    }
}



renderGames();
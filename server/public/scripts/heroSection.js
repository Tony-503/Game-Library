const renderHeroSection = async () => {

    const response = await fetch('/api/games');
    const games = await response.json();
    const headerSection = document.querySelector('.header-section');

    let ramdomIndex = Math.floor(Math.random() * games.length);

    if(games && games.length > 0){

        headerSection.style.backgroundImage = `url('${games[ramdomIndex].image}')`;
        const message = document.createElement('h2');

        const secondContainer = document.createElement('div');
        secondContainer.classList.add('second-container');
        headerSection.appendChild(secondContainer);
     
        const title = document.createElement('h2');
        title.textContent = 'Welcome to Game Library!';
        title.classList.add('featured-game-title');
        
        secondContainer.appendChild(title);


        const text = document.createElement('h3');
        text.textContent = 'Featured Game';
        text.classList.add('featured-game-text');
        secondContainer.appendChild(text);

        const name = document.createElement('h3');
        name.textContent = games[ramdomIndex].name;
        name.classList.add('featured-game-name');
        secondContainer.appendChild(name);

        

        const description = document.createElement('p');
        description.textContent = games[ramdomIndex].description;
        secondContainer.appendChild(description);

        const  pricePoint = document.createElement('p');
        pricePoint.textContent = 'Price:' + games[ramdomIndex].pricePoint;
        secondContainer.appendChild(pricePoint);

        const more = document.createElement('a');
        more.textContent = 'More Details';
        more.setAttribute('role', 'button');
        const slug = games[ramdomIndex].name
        more.href = `/games/${games[ramdomIndex].id }-` + slug.toLowerCase().replace(/\s+/g, '-');
        secondContainer.appendChild(more);


    }else{
        const message = document.createElement('h2');
        message.textContent = 'Welcome to Game Library! Explore our collection of games and find your next adventure.';

        const secondContainer = document.createElement('div');
        secondContainer.classList.add('second-container');
        headerSection.appendChild(secondContainer);
        secondContainer.appendChild(message);
    }
}



    renderHeroSection()


const rendergame = async () => {

    const slugSegment = window.location.pathname.split('/').pop() || '';
    const requestID = Number(slugSegment.split('-')[0]);
    
    
    const response = await fetch(`/games`);
    const data = await response.json();

    const gamecontent = document.getElementById('game-content');

    let game;
    if(data){
        game =  data.find((gameitem) => gameitem.id === requestID)
    }
    
    if(game){
        document.title = game.name + ' - Game Library';
        document.getElementById('game-title').textContent = game.name;
        document.getElementById('game-image').src = game.image;
        document.getElementById('game-description').textContent = game.description;
        document.getElementById('game-price').textContent = 'Price: ' + game.pricePoint;
        document.getElementById('game-release-date').textContent = 'Release Date: ' + new Date(game.submittedOn).toLocaleDateString();
        document.getElementById('game-audience').textContent = 'Audience: ' + game.audience;    
        document.getElementById('game-submitted-by').textContent = 'Submitted By: ' + game.submittedBy;

    }else{
        const message = document.createElement('h2');
        message.textContent = 'Game not found.';
        gamecontent.appendChild(message);
    }
};

rendergame();
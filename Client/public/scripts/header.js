const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';


const image = document.createElement('img');
image.src = '/logo.png';
headerLeft.appendChild(image);

const headerRight = document.createElement('div');
headerRight.className = 'header-right';


const title = document.createElement('h1');
title.textContent = 'Game Library';
headerRight.appendChild(title);


const headerButtons = document.createElement('button');
headerButtons.textContent = 'Lobby';
headerButtons.addEventListener('click', function handleClick(event) {
    window.location = '/';
});

headerRight.appendChild(headerButtons);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);
header.appendChild(headerContainer);

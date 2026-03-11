let currentYear = new Date().getFullYear();

const renderFooter = () => {

    const footer = document.querySelector('footer');
    const message = document.createElement('p');
    message.classList.add('footer-message');
    message.textContent = `© ${currentYear} Game Library. All rights reserved.`;
    
    footer.appendChild(message);


    


}

renderFooter();

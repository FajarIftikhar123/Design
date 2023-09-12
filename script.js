// script.js
//its allowing me to interact with these elements in  web page
const buyButton = document.getElementById('buyButton');
const sellButton = document.getElementById('sellButton');

// click event listeners -> buttons
buyButton.addEventListener('click', () => {
    alert('You clicked Buy NFT');
});

sellButton.addEventListener('click', () => {
    
    alert('You clicked Sell NFT');
});
const hearts = document.getElementsByClassName('fa-heart');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function(){
        const loveElement = document.getElementById('love-count');
        const loveCount = parseInt(loveElement.innerText);
        loveElement.innerText = loveCount + 1;
    })    
}

const coin = 100;
const coinElement = document.getElementById('coin');
coinElement.innerText = coin;
const coinValue = parseInt(coinElement.innerText);


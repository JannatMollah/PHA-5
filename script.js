const hearts = document.getElementsByClassName('fa-heart');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function(){
        const loveElement = document.getElementById('love-count');
        const loveCount = parseInt(loveElement.innerText);
        loveElement.innerText = loveCount + 1;
    })    
}

let coins = parseInt(document.getElementById('coin').innerText);
let callHistory = [];

function newCoin() {
    document.getElementById('coin').textContent = coins;
}


function updateCallHistory() {
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = '';

    callHistory.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-card';
        div.innerHTML = `
            <div>
                <p class="history-heading">${item.name}</p>
                <p class="history-number">${item.number}</p>
            </div>
            <p class="history-time">${item.time}</p>`;
        historyContainer.appendChild(div);
    });
}

function callClick(event) {
    const card = event.currentTarget.closest('.bg-white');
    const serviceName = card.querySelector('h1').textContent;
    const serviceNumber = card.querySelector('.text-\\[25px\\]').textContent;

    if (coins < 20) {
        alert("Not enough coins to make a call. You need at least 20 coins.");
        return;
    }

    coins -= 20;
    newCoin();
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    const now = new Date();
    const time = now.toLocaleTimeString();

    callHistory.push({ name: serviceName, number: serviceNumber, time: time });
    updateCallHistory();
}

function clearHistory() {
    callHistory = [];
    updateCallHistory();
    alert("Call history cleared!");
}

let copyCount = 0; 

function updateCounters() {
    const copyCountElement = document.querySelector('.bg-\\[\\#00a63e\\] span');
    if (copyCountElement) {
        copyCountElement.textContent = copyCount;
    }
}

function copyBtn(event) {
    const card = event.currentTarget.closest('.bg-white');
    const serviceNumber = card.querySelector('.text-\\[25px\\]').textContent;

    navigator.clipboard.writeText(serviceNumber).then(() => {
        copyCount++; 
        updateCounters();
        alert(`Copied ${serviceNumber} to clipboard`);
    })
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button:has(.fa-phone)').forEach(button => {
        button.addEventListener('click', callClick);
    });

    document.querySelectorAll('button:has(.fa-copy)').forEach(button => {
        button.addEventListener('click', copyBtn);
    });

    const clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click', clearHistory);
});
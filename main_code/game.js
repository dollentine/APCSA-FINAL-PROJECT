
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const startButton = document.getElementById('startButton');
const backButton = document.getElementById('backButton');

let score = 0;
let gameRunning = true;
let animationId = null;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = {
    x: 400,
    y: 450,
    size: 20
};

let target = {
    x: 200,
    y: 200,
    size: 15,
    active: true
};

function startGame() {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    
    score = 0;
    document.getElementById('score').innerHTML = score;
    
    player.x = 400;
    target.x = Math.random() * (canvas.width - 100) + 50;
    target.y = Math.random() * (canvas.height - 150) + 50;
    

    if (!animationId) {
        gameLoop();
    }
}


function backToMenu() {
 
    gameScreen.style.display = 'none';
    startScreen.style.display = 'block';
    

    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}

canvas.addEventListener('mousemove', function(e) {
    if (gameScreen.style.display !== 'block') return;
    
    let rect = canvas.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    
    if (mouseX > player.size && mouseX < canvas.width - player.size) {
        player.x = mouseX;
    }
});

canvas.addEventListener('click', function() {
    if (gameScreen.style.display !== 'block') return;
    
    let dx = player.x - target.x;
    let dy = player.y - target.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < player.size + target.size) {
        score++;
        document.getElementById('score').innerHTML = score;
        
        target.x = Math.random() * (canvas.width - 100) + 50;
        target.y = Math.random() * (canvas.height - 150) + 50;
    }
});

document.getElementById('resetBtn').addEventListener('click', function() {
    score = 0;
    document.getElementById('score').innerHTML = score;
    target.x = Math.random() * (canvas.width - 100) + 50;
    target.y = Math.random() * (canvas.height - 150) + 50;
});

function draw() {
    if (!ctx) return;
    
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#667eea';
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#e53e3e';
    ctx.beginPath();
    ctx.arc(target.x, target.y, target.size, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#333';
    ctx.font = '16px Arial';
    ctx.fillText('Move mouse to move blue circle', 20, 40);
    ctx.fillText('Click to hit red circle!', 20, 70);
}

function gameLoop() {
    draw();
    animationId = requestAnimationFrame(gameLoop);
}

// BUTTON EVENT LISTENERS
startButton.addEventListener('click', startGame);
backButton.addEventListener('click', backToMenu);

// Initialize - draw canvas once so it's ready
draw();

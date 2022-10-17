const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

let startButton = document.querySelector('#start')
let isGameOver = false;
let gameId = 0;
let fruitImageX = canvas.width / 2 - 20;
let fruitImageY = 0;
let fruitImageWidth = 40;
let fruitImageHeight = 40
let seasonBlockHeight = 40;

///// creating the fruit class 
class Fruit {
    constructor(name) {
        this.name = name;
        this.image = new Image;
        this.image.src = `./style/images/${name}.png`;
        this.x = canvas.width / 2 - 20;
        this.y = 0;
        this.season = '';
    }

    moveImageDown() {
        if (this.y + fruitImageHeight <= canvas.height - seasonBlockHeight) {
             this.y += 1;
        };
    }
    
    moveLeft() {
        if (this.x > 0) {
            this.x -= 5;
        };
    };

    moveRight() {
        if (this.x < (canvas.width - fruitImageWidth)) {
            this.x += 5;
        }
    };
    
    fastDown() {
        if (this.y + fruitImageHeight <= canvas.height - seasonBlockHeight) {
            this.y += 10;
        }
    }
}

let bareFruitArray = ['apple', 'apricot', 'avocado', 'banana', 'blackberry', 'blueberry', 'cherries', 'coconut', 'currant', 'custardapple', 'dragonfruit', 'fig', 'grapefruit', 'grapes', 'khaki', 'kiwi', 'lemon', 'lime', 'lychee', 'mango', 'medlar', 'melon', 'olives', 'orgage', 'papaya', 'passionfruit', 'peach', 'pear', 'pineapple', 'plum', 'pomegranate', 'raspberry', 'strawberry', 'tangerine', 'watermelon'];
let fruitArray = [];
bareFruitArray.forEach ((name) => {
    fruitArray.push(new Fruit(name))
})

/// define seasons 
const Season = { 
    'apple': ['autumn', 'winter'],
    'apricot': ['spring', 'summer'],
    'avocado': ['autumn', 'winter', 'spring'],
    'banana': ['spring', 'summer', 'autumn', 'winter'],
    'blackberry': ['summer'],
    'blueberry': ['spring', 'summer'],
    'cherries': ['spring', 'summer'],
    'coconut': ['spring', 'summer'],
    'currant': ['summer'],
    'custardapple': ['winter'],
    'dragonfruit': ['summer'],
    'fig': ['summer'],
    'grapefruit': ['winter', 'spring'],
    'grapes': ['autumn'],
    'khaki': ['autumn'],
    'kiwi': ['autumn', 'winter'],
    'lemon': ['spring', 'autumn', 'winter'],
    'lime': ['autumn'],
    'lychee': ['spring', 'summer'],
    'mango': ['autumn', 'summer'],
    'medlar': ['spring'],
    'melon': ['summer'],
    'olives': ['autumn'],
    'orange': ['spring', 'autumn', 'winter'],
    'papaya': ['autumn', 'winter', 'spring'],
    'passionfruit': ['spring', 'summer'],
    'peach': ['spring', 'summer'],
    'pear': ['summer', 'autumn', 'winter'],
    'pineapple': ['winter', 'spring'],
    'plum': ['summer'],
    'pomegranate': ['autumn'],
    'raspberry': ['autumn', 'winter'],
    'strawberry': ['spring'],
    'tangerine': ['autumn', 'winter'],
    'watermelon': ['summer'],
}


/////// start 
const start = () => {
    canvas.style.visibility = "visible";
    animate()
}

const drawImage = () => {
    ctx.drawImage(fruitArray[0].image, fruitArray[0].x, fruitArray[0].y, fruitImageWidth, fruitImageHeight)  
    if (fruitArray[0].y + fruitImageHeight > canvas.height - seasonBlockHeight) {
        fruitArray.shift()
    }   
}

/// moving image down / right / left on arrowkey
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
        fruitArray[0].moveRight()
    } else if (event.key === 'ArrowLeft') {
        fruitArray[0].moveLeft()
    } else if (event.key === 'ArrowDown') {
        fruitArray[0].fastDown()
    }
})

///// draw season blocks 
const drawSeasonBlocks = () => {
    ctx.fillStyle = "pink";
    ctx.fillRect(0, canvas.height - seasonBlockHeight, canvas.width/4, seasonBlockHeight);
    ctx.fillStyle = "orange";
    ctx.fillRect(canvas.width/4, canvas.height - seasonBlockHeight, canvas.width/4, seasonBlockHeight);
    ctx.fillStyle = "brown";
    ctx.fillRect(canvas.width/4 * 2, canvas.height - seasonBlockHeight, canvas.width/4, seasonBlockHeight);
    ctx.fillStyle = "lightgray";
    ctx.fillRect(canvas.width/4 * 3, canvas.height - seasonBlockHeight, canvas.width/4, seasonBlockHeight);
}
console.log(fruitArray[0]);

/// create motion
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSeasonBlocks();
    drawImage();
    fruitArray[0].moveImageDown();
    console.log(fruitArray[0]);
    
    /// gameover (simple version with 2 areas)

    /* if ((fruitsArray[index].season == "spring") && (fruitImageY + fruitImageHeight >=  canvas.height - seasonBlockHeight) && (fruitImageX + fruitImageWidth > canvas.width / 4)) {
        console.log("gameover")
        isGameOver = true;
    } else {
        ctx.font = '48px serif';
        ctx.fillText('Well done!', 10, 50);
    } */

    if (isGameOver) {
        cancelAnimationFrame(gameId);
    } else {
        gameId = requestAnimationFrame(animate);
    }
}

/// gameover screen
/* if (isGameOver) {
    gameoverscreen.visibility = "visible";
    canvas.visibility = "hidden"
} */

//// wait to load and if start clicked, start game
window.onload = () => {
    startButton.addEventListener('click', start)
}
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
const startscreen = document.querySelector('#startscreen');

let startButton = document.querySelector('#start')
let restartButton = document.querySelector('#restart')
let isGameOver = false;
let gameId = 0;
let fruitImageX = canvas.width / 2 - 20;
let fruitImageY = 0;
let fruitImageWidth = 60;
let fruitImageHeight = 60
let seasonBlockHeight = 40;

///// creating the fruit class 
class Fruit {
    constructor(name) {
        this.name = name;
        this.image = new Image;
        this.image.src = `./style/images/${name}.png`;
        this.x = canvas.width / 2 - 20;
        this.y = -100;
        this.season = '';
    }

    moveImageDown() {
        if (this.y + fruitImageHeight <= canvas.height - seasonBlockHeight) {
             this.y += 1;
        };
    }
    
    moveLeft() {
        if (this.x > 0) {
            this.x -= 8;
        };
    };

    moveRight() {
        if (this.x < (canvas.width - fruitImageWidth)) {
            this.x += 8;
        }
    };
    
    fastDown() {
        if (this.y + fruitImageHeight <= canvas.height - seasonBlockHeight) {
            this.y += 10;
        }
    }
}

let bareFruitArray = ['apple', 'apricot', 'avocado', 'banana', 'blackberry', 'blueberry', 'cherries', 'coconut', 'currant', 'custardapple', 'dragonfruit', 'fig', 'grapefruit', 'grapes', 'khaki', 'kiwi', 'lemon', 'lime', 'lychee', 'mango', 'medlar', 'melon', 'olives', 'orange', 'papaya', 'passionfruit', 'peach', 'pear', 'pineapple', 'plum', 'pomegranate', 'raspberry', 'strawberry', 'tangerine', 'watermelon'];
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
    canvas.style.display = "block";
    startscreen.style.display = "none";
    animate()
}

///////  draw fruit images
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
    ctx.fillStyle = "#1e202d";
    ctx.textBaseline='middle';
    ctx.textAlign='center';
    ctx.font = '18px Nunito';
    ctx.fillText('Spring', (canvas.width/4) / 2, canvas.height - (seasonBlockHeight / 2))
    ctx.fillStyle = "#81b29a";
    ctx.fillRect(canvas.width/4, canvas.height - seasonBlockHeight, canvas.width/4, seasonBlockHeight);
    ctx.fillStyle = "#1e202d";
    ctx.textBaseline='middle';
    ctx.textAlign='center';
    ctx.font = '18px Nunito';
    ctx.fillText('Summer', (canvas.width / 2 / 4 * 3), canvas.height - (seasonBlockHeight / 2))
    ctx.fillStyle = "#f2cc8f";
    ctx.fillRect(canvas.width/4 * 2, canvas.height - seasonBlockHeight, canvas.width/4, seasonBlockHeight);
    ctx.fillStyle = "#1e202d";
    ctx.textBaseline='middle';
    ctx.textAlign='center';
    ctx.font = '18px Nunito';
    ctx.fillText('Autumn', (canvas.width / 2 / 4 * 5), canvas.height - (seasonBlockHeight / 2))
    ctx.fillStyle = "lightgray";
    ctx.fillRect(canvas.width/4 * 3, canvas.height - seasonBlockHeight, canvas.width/4, seasonBlockHeight);
    ctx.fillStyle = "#1e202d";
    ctx.textBaseline='middle';
    ctx.textAlign='center';
    ctx.font = '18px Nunito';
    ctx.fillText('Winter', (canvas.width - canvas.width / 4 / 2), canvas.height - (seasonBlockHeight / 2))
}

//// display positive feedback if user gets it right 
let displayPositiveFeedback = false;

const positiveFeedback = () => {
    ctx.fillStyle = "#1e202d";
    ctx.font = '18px Nunito';
    ctx.textAlign='center';
    ctx.textBaseline='top';
    ctx.fillText(`Score: ${count}`, 400, 15)
    ctx.fillText(`Max score: ${maxScore}`, 357, 40)
}

const disappearText = () => {
    displayPositiveFeedback = false;
}

if (displayPositiveFeedback === true) {
    console.log("always true")
    setTimeout(disappearText, 3000)
    positiveFeedback()    
}

///// initializing scores 
let count = 0;
let score = document.querySelector('.score')
let maxScore = 0;
let maxScorePlace = document.querySelector('.maxscore');

/// create motion
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSeasonBlocks();
    displayScore()
    drawImage();
    fruitArray[0].moveImageDown();

    ///// win and lose logic
    let canvasBottom = canvas.height - seasonBlockHeight;
    let fruitImageBottom = fruitArray[0].y + fruitImageHeight;
    let fruitMaxX = fruitArray[0].x + fruitImageWidth;
    let endSpringBeginSummer = canvas.width / 4;
    let endSummerBeginAutumn = canvas.width / 2;
    let endAutumnBeginWinter = canvas.width / 4 * 3;

    if (fruitImageBottom ==  canvasBottom) {
        let landed = '';
        if (fruitArray[0].x < endSpringBeginSummer) {
            landed = 'spring'
        } else if ((fruitArray[0].x > endSpringBeginSummer) && (fruitMaxX < endSummerBeginAutumn)) {
            landed = 'summer'
        } else if ((fruitArray[0].x > endSummerBeginAutumn) && (fruitMaxX < endAutumnBeginWinter)) {
            landed = 'autumn'
        } else if (fruitArray[0].x > endAutumnBeginWinter) {
            landed = 'winter'
        }

        if (Season[fruitArray[0].name].includes(landed)) {
            console.log('well done')
            count = count + 1;
            if (count > maxScore) {
                maxScore = count;
                maxScorePlace.innerText = maxScore;
            }
            score.innerText = count;
            displayPositiveFeedback = true;
            console.log(displayPositiveFeedback)
        } else {
            console.log(`gameover`)
            isGameOver = true;
        }    
    }

    const gameoverscreen = document.querySelector('#gameoverscreen');
    if (isGameOver) {
        cancelAnimationFrame(gameId);
        gameoverscreen.style.display = "block";
        canvas.style.display = "none";
    } else {
        gameId = requestAnimationFrame(animate);
    }
}

///// display score & maxscore
const displayScore = () => {
    ctx.fillStyle = "#1e202d";
    ctx.font = '18px Nunito';
    ctx.textAlign='start';
    ctx.textBaseline='top';
    ctx.fillText(`Score: ${count}`, 418, 15)
    ctx.fillText(`Max score: ${maxScore}`, 381, 40)

}

//// wait to load and if start clicked, start game and reset
window.onload = () => {
    startButton.addEventListener('click', start)
    document.getElementById("restart").onclick = () => {
        console.log("restarting");
        canvas.style.display = "block";
        isGameOver = false;
        score.innerText = 0
        count = 0;
        fruitArray = [];
        bareFruitArray.forEach ((name) => {
            fruitArray.push(new Fruit(name))
        })
        gameoverscreen.style.display = "none";
        animate()
    }
}
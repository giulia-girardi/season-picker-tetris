const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
const startscreen = document.querySelector('#startscreen');

const arrows = document.querySelector('.mobilearrows');
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

//// randomize fruit array

const randomize = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

randomize(bareFruitArray)

let fruitArray = [];
bareFruitArray.forEach ((name) => {
    fruitArray.push(new Fruit(name))
})

/// define seasons 
const season = { 
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
    console.log(window.screen.width)
    if (window.screen.width < 800) {
        arrows.style.display = "flex"
    }
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


/// moving image down / right / left on touch for mobile
const arrowrighticon = document.querySelector('#arrowrighticon');
const arrowlefticon = document.querySelector('#arrowlefticon');
const arrowdownicon = document.querySelector('#arrowdownicon');

arrowrighticon.addEventListener('touchstart', event => {
    fruitArray[0].moveRight()
    console.log("itworks right")
})
arrowlefticon.addEventListener('touchstart', event => {
    console.log("itworks left")
    fruitArray[0].moveLeft()
})
arrowdownicon.addEventListener('touchstart', event => {
    fruitArray[0].fastDown()
    console.log("itworks down")
})



///// draw season blocks 
const drawseasonBlocks = () => {
    //winter
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, canvas.height - seasonBlockHeight, canvas.width/4, seasonBlockHeight);
    ctx.fillStyle = "#1e202d";
    ctx.textBaseline='middle';
    ctx.textAlign='center';
    ctx.font = '18px Nunito';
    ctx.fillText('Winter', (canvas.width/4) / 2, canvas.height - (seasonBlockHeight / 2))

    //spring
    ctx.fillStyle = "pink";
    ctx.fillRect(canvas.width/4, canvas.height - seasonBlockHeight, canvas.width/4, seasonBlockHeight);
    ctx.fillStyle = "#1e202d";
    ctx.textBaseline='middle';
    ctx.textAlign='center';
    ctx.font = '18px Nunito';
    ctx.fillText('Spring', (canvas.width / 2 / 4 * 3), canvas.height - (seasonBlockHeight / 2))
    
    //summer
    ctx.fillStyle = "#81b29a";
    ctx.fillRect(canvas.width/4 * 2, canvas.height - seasonBlockHeight, canvas.width/4, seasonBlockHeight);
    ctx.fillStyle = "#1e202d";
    ctx.textBaseline='middle';
    ctx.textAlign='center';
    ctx.font = '18px Nunito';
    ctx.fillText('Summer', (canvas.width / 2 / 4 * 5), canvas.height - (seasonBlockHeight / 2))
    
    //autumn
    ctx.fillStyle = "#f2cc8f";
    ctx.fillRect(canvas.width/4 * 3, canvas.height - seasonBlockHeight, canvas.width/4, seasonBlockHeight);
    ctx.fillStyle = "#1e202d";
    ctx.textBaseline='middle';
    ctx.textAlign='center';
    ctx.font = '18px Nunito';
    ctx.fillText('Autumn', (canvas.width - canvas.width / 4 / 2), canvas.height - (seasonBlockHeight / 2))
}

//// positive feedback if user gets it right 
let displayPositiveFeedback = false;

const positiveFeedback = () => {
    ctx.fillStyle = "#1e202d";
    ctx.font = '14px Nunito';
    ctx.textAlign='center';
    ctx.textBaseline='top';
    ctx.fillText('Well done!', 445, 70)
}

const noMoreText = () => {
    setTimeout(() => {
        displayPositiveFeedback = false;
    }, 1000)
}

///// make fruit name appear 
const fruitName = () => {
    ctx.fillStyle = "#1e202d";
    ctx.textBaseline='end';
    ctx.textAlign='start';
    ctx.font = '18px Nunito';
    ctx.fillText(`${fruitArray[0].name.charAt(0).toUpperCase()}${fruitArray[0].name.slice(1).toLowerCase()}`, 15, 15)
}

///// initializing scores 
let count = 0;
let score = document.querySelector('.score')
let maxScore = 0;
let maxScorePlace = document.querySelector('.maxscore');

/// create motion
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawseasonBlocks();
    displayScore()
    drawImage();
    fruitArray[0].moveImageDown();
    fruitName();

    ///// win and lose logic
    let canvasBottom = canvas.height - seasonBlockHeight;
    let fruitImageBottom = fruitArray[0].y + fruitImageHeight;
    let fruitMaxX = fruitArray[0].x + fruitImageWidth;
    let endWinterBeginSpring = canvas.width / 4;
    let endSpringBeginSummer = canvas.width / 2;
    let endSummerBeginAutumn = canvas.width / 4 * 3;



    if (fruitImageBottom == canvasBottom) {
        let landed = '';
        if (fruitArray[0].x < endWinterBeginSpring) {
            landed = 'winter'
        } else if ((fruitArray[0].x > endWinterBeginSpring) && (fruitMaxX < endSpringBeginSummer)) {
            landed = 'spring'
        } else if ((fruitArray[0].x > endSpringBeginSummer) && (fruitMaxX < endSummerBeginAutumn)) {
            landed = 'summer'
        } else if (fruitArray[0].x > endSummerBeginAutumn) {
            landed = 'autumn'
        }

        console.log('landed:' + landed )
        console.log((Object.values(season[fruitArray[0].name])));


        if (season[fruitArray[0].name].includes(landed)) {
            console.log('well done')
            count = count + 1;
            if (count > maxScore) {
                maxScore = count;
                maxScorePlace.innerText = maxScore;
            }
            score.innerText = count;
            displayPositiveFeedback = true;
            noMoreText()
        } else {
            console.log(`gameover`)
            isGameOver = true;
        }       
    }

    //// make positive feedback appear if got it right
    if (displayPositiveFeedback === true) {
        positiveFeedback()   
    }

    /// show game over screen if lost 
    const gameoverscreen = document.querySelector('#gameoverscreen');
    const explanation = document.querySelector('.explanation');
    if (isGameOver) {
        cancelAnimationFrame(gameId);
        gameoverscreen.style.display = "block";
        canvas.style.display = "none";
        arrows.style.display = "none"
        explanation.innerText = `${fruitArray[0].name.charAt(0).toUpperCase()}${fruitArray[0].name.slice(1).toLowerCase()}s are in season during: ${Object.values(season[fruitArray[0].name]).join(', ')} `
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
    
    /// restart
    document.getElementById("restart").onclick = () => {
        console.log("restarting");
        randomize(bareFruitArray);
        canvas.style.display = "block";
        arrows.style.display = "flex"
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
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


// image importing 
const apple = new Image;
apple.src = './style/images/apple.png'
apple.classList.add('spring')
apple.classList.add('autumn')
const apricot = new Image;
apricot.src = './style/images/apricot.png'
apricot.classList.add('spring')
apricot.classList.add('summer')
const avocado = new Image;
avocado.src = './style/images/avocado.png'
avocado.classList.add('winter')
const banana = new Image;
banana.src = './style/images/banana.png'
banana.classList.add('spring')
banana.classList.add('summer')
banana.classList.add('autumn')
banana.classList.add('winter')
const blackberry = new Image;
blackberry.src = './style/images/blackberry.png'
blackberry.classList.add('summer')
const blueberry = new Image;
blueberry.src = './style/images/blueberry.png'
blueberry.classList.add('summer')
const cherries = new Image;
cherries.src = './style/images/cherries.png'
const coconut = new Image;
coconut.src = './style/images/coconut.png'
coconut.classList.add('spring')
const currant = new Image;
currant.src = './style/images/currant.png'
const custardapple = new Image;
custardapple.src = './style/images/custard-apple.png'
const dragonfruit = new Image;
dragonfruit.src = './style/images/dragonfruit.png'
const fig = new Image;
fig.src = './style/images/fig.png'
const grapefruit = new Image;
grapefruit.src = './style/images/grapefruit.png'
const grapes = new Image;
grapes.src = './style/images/grapes.png'
const khaki = new Image;
khaki.src = './style/images/khaki.png'
const kiwi = new Image;
kiwi.src = './style/images/kiwi.png'
const lemon = new Image;
lemon.src = './style/images/lemon.png'
const lime = new Image;
lime.src = './style/images/lime.png'
const lychee = new Image;
lychee.src = './style/images/lychee.png'
const mango = new Image;
mango.src = './style/images/mango.png'
const medlar = new Image;
medlar.src = './style/images/medlar.png'
const melon = new Image;
melon.src = './style/images/melon.png'
const olives = new Image;
olives.src = './style/images/olives.png'
const orange = new Image;
orange.src = './style/images/orange.png'
const papaya = new Image;
papaya.src = './style/images/papaya.png'
const passionfruit = new Image;
papaya.src = './style/images/passion-fruit.png'
const peach = new Image;
peach.src = './style/images/peach.png'
const pear = new Image;
pear.src = './style/images/pear.png'
const pineapple = new Image;
pineapple.src = './style/images/pineapple.png'
const plum = new Image;
plum.src = './style/images/plum.png'
const pomegranate = new Image;
pomegranate.src = './style/images/pomegranate.png'
const raspberry = new Image;
raspberry.src = './style/images/raspberry.png'
const starapple = new Image;
starapple.src = './style/images/star-apple.png'
const strawberry = new Image;
strawberry.src = './style/images/strawberry.png'
const tangerine = new Image;
tangerine.src = './style/images/tangerine.png'
const watermelon = new Image;
watermelon.src = './style/images/watermelon.png'

////// creating the fruit array
/* const fruitsArray = [
    {
        img: apple,
        x: canvas.width / 2 - 20,
        y: 0,
        season: 'spring',
        moveImageDown: function () {
            if (this.y + fruitImageHeight <= canvas.height - seasonBlockHeight) {
                 this.y += 1;
            }
         },
         moveLeft: function () {
            if (fruitImageX > 0) {
                fruitImageX -= 3;
            }
        },
    },
/*     {
        img: apricot,
        x: canvas.width / 2 - 20,
        y: 0,
        season: 'spring',
    },
    {
        img: avocado,
        x: canvas.width / 2 - 20,
        y: 0,
        season: 'spring',
    }, 
    {
        img: banana,
        x: canvas.width / 2 - 20,
        y: 0,
        season: 'spring',
        moveImageDown: function () {
            if (this.y + fruitImageHeight <= canvas.height - seasonBlockHeight) {
                 this.y += 1;
            }
        },
        moveLeft: function () {
            if (fruitImageX > 0) {
                fruitImageX -= 3;
            }
        }
    },
    {
        img: blackberry,
        x: canvas.width / 2 - 20,
        y: 0,
        season: 'spring',
        moveImageDown: function () {
            if (this.y + fruitImageHeight <= canvas.height - seasonBlockHeight) {
                 this.y += 1;
            }
        },
        moveLeft: function () {
            if (this.x > 0) {
                this.x -= 3;
            }
        }
    },
    {
        img: blueberry,
        x: canvas.width / 2 - 20,
        y: 0,
        season: 'spring',
        moveImageDown: function () {
            if (this.y + fruitImageHeight <= canvas.height - seasonBlockHeight) {
                 this.y += 1;
            }
         },
        moveLeft: function () {
            if (fruitImageX > 0) {
                fruitImageX -= 3;
            }
        }
    },
    {
        img: cherries,
        x: canvas.width / 2 - 20,
        y: 0,
        season: 'spring',
        moveImageDown: function () {
            if (this.y + fruitImageHeight <= canvas.height - seasonBlockHeight) {
                 this.y += 1;
            }
         },
        moveLeft: function () {
            if (fruitImageX > 0) {
                fruitImageX -= 3;
            }
        }
    },
/*     {
        img: coconut,
        x: canvas.width / 2 - 20,
        y: 0,
        season: 'spring',
        moveImageDown: function () {
           if (this.y + fruitImageHeight <= canvas.height - seasonBlockHeight) {
                this.y += 1;
           }
        }
    } */


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

let bareFruitArray = ['apple', 'apricot', 'avocado'];
let fruitArray = [];
bareFruitArray.forEach ((name) => {
    fruitArray.push(new Fruit(name))
})

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

/// moving image down / right / left 

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
        moveRight()
    } else if (event.key === 'ArrowLeft') {
        moveLeft()
    } else if (event.key === 'ArrowDown') {
        fastDown()
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
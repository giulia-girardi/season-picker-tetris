const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let startButton = document.querySelector('#start')
let isGameOver = false;
let gameId = 0;
const testImage = new Image();
testImage.src = './style/images/apple.pmg'
let testImageX = canvas.width / 2 - 10;
let testImageY = 0;
let testImageWidth = 20;
let testImageHeigth = 20

/* // image importing 
const apple = new Image();
apple.src = './style/images/apple.jpg'
const apricot = new Image();
apricot.src = './style/images/apricot.jpg'
const avocado = new Image();
avocado.src = './style/images/avocado.jpg'
const banana = new Image();
banana.src = './style/images/banana.jpg'
const blackberry = new Image();
blackberry.src = './style/images/balckberry.jpg'
const blueberry = new Image();
blueberry.src = './style/images/blueberry.jpg'
const cherries = new Image();
cherries.src = './style/images/cherries.jpg'
const coconut = new Image();
coconut.src = './style/images/coconut.jpg'
const currant = new Image();
currant.src = './style/images/currant.jpg'
const custardapple = new Image();
custardapple.src = './style/images/custard-apple.jpg'
const dragonfruit = new Image();
dragonfruit.src = './style/images/dragonfruit.jpg'
const fig = new Image();
fig.src = './style/images/fig.jpg'
const grapefruit = new Image();
grapefruit.src = './style/images/grapefruit.jpg'
const grapes = new Image();
grapes.src = './style/images/grapes.jpg'
const khaki = new Image();
khaki.src = './style/images/khaki.jpg'
const kiwi = new Image();
kiwi.src = './style/images/kiwi.jpg'
const lemon = new Image();
lemon.src = './style/images/lemon.jpg'
const lime = new Image();
lime.src = './style/images/lime.jpg'
const lychee = new Image();
lychee.src = './style/images/lychee.jpg'
const mango = new Image();
mango.src = './style/images/mango.jpg'
const medlar = new Image();
medlar.src = './style/images/medlar.jpg'
const melon = new Image();
melon.src = './style/images/melon.jpg'
const olives = new Image();
olives.src = './style/images/olives.jpg'
const orange = new Image();
orange.src = './style/images/orange.jpg'
const papaya = new Image();
papaya.src = './style/images/papaya.jpg'
const papaya = new Image();
papaya.src = './style/images/passion-fruit.jpg'
const peach = new Image();
peach.src = './style/images/peach.jpg'
const pear = new Image();
pear.src = './style/images/pear.jpg'
const pineapple = new Image();
pineapple.src = './style/images/pineapple.jpg'
const plum = new Image();
plum.src = './style/images/plum.jpg'
const pomegranade = new Image();
pomegranade.src = './style/images/pomegranade.jpg'
const raspberry = new Image();
raspberry.src = './style/images/raspberry.jpg'
const starapple = new Image();
starapple.src = './style/images/star-apple.jpg'
const strawberry = new Image();
strawberry.src = './style/images/strawberry.jpg'
const tangerine = new Image();
tangerine.src = './style/images/tangerine.jpg'
const watermelon = new Image();
watermelon.src = './style/images/watermelon.jpg'
 */


///////
const start = () => {
    canvas.style.visibility = "visible";
    drawImage()
    animate()
}

const drawImage = () => {
    ctx.drawImage(testImage, testImageX, testImageY, testImageWidth, testImageHeigth)
}

const moveImageDown = () => {
    if (testImageY + testImageHeigth < canvas.height) {
        testImageY += 0.2;
   }
}

//// move right and left
const moveRight = () => {
    if (testImageX < (canvas.width - testImageWidth)) {
        testImageX += 3;
    }
}
const moveLeft= () => {
    if (testImageX > 0) {
        testImageX -= 3;
    }
}

const moveDown= () => {
    if (testImageY + testImageHeigth < canvas.height) {
        testImageY += 7;
    }
}

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
        moveRight()
    } else if (event.key === 'ArrowLeft') {
        moveLeft()
    } else if (event.key === 'ArrowDown') {
        moveDown()
    }
})

/// create motion
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImage();
    moveImageDown();

    /// gameover (simple version with 2 areas)
    if ((testImageY + testImageHeigth ===  canvas.height) && (testImageX + testImageWidth > canvas.width/2)) {
        //console.log("hello")
        isGameOver = true;
    }

    if (isGameOver) {
        cancelAnimationFrame(gameId);
        //console.log("it's game over")
    } else {
        gameId = requestAnimationFrame(animate);
    }
}

//// wait to load and if start clicked, start game
window.onload = () => {
    startButton.addEventListener('click', start)
}
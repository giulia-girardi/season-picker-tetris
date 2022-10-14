const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let startButton = document.querySelector('#start')
const testImage = new Image();
testImage.src = './style/test-image.jpg'
let testImageX = canvas.width / 2 - 10;
let testImageY = 0;
let testImageWidth = 20;


const start = () => {
    canvas.style.visibility = "visible";
    drawImage()
    animate()
}

const drawImage = () => {
    ctx.drawImage(testImage, testImageX, testImageY, testImageWidth, 20)
}

const moveImageDown = () => {
    testImageY += 0.1;
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

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
        moveRight()
    } else if (event.key === 'ArrowLeft') {
        moveLeft()
    }
})

/// create motion
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImage();
    moveImageDown();
    requestAnimationFrame(animate)
}

/// gameover

//// wait to load and if start clicked, start game
window.onload = () => {
    startButton.addEventListener('click', start)
}
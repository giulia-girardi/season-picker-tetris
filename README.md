# Season Picker Tetris
# Description
This is an educational game to learn when are fruits in season. As fruit comes down the screen, the user needs to move arrowkeys to position it in the right season. 

# MVP
A different fruit appears every time at the top of the screen. 
Allow move right, left and down with arrowkeys, or using the arrow icons on mobile.
Game is over in case fruit is positioned in the wrong season. 
Restart possibility. 

# Backlog
- Have 3 lives instead of game over on the first error 
- Vegetables version
- Fruits stacked like tetris in the right section of the screen

# Data structure
- Fruit () {this.name; this.image; this.image.src; this.x; this.y; this.season;}
- moveImageDown()
- moveLeft()
- moveRight()
- fastDown()
- randomize()
- start()
- drawImage()
- drawseasonBlocks()
- positiveFeedback()
- noMoreText()
- fruitName()
- animate()
- displayScore()

# States y States Transitions
- Start 
- Game 
- Gameover 

# Links 
 - [Slides]
 - [Github](https://github.com/giulia-girardi/season-picker-tetris)
 - [Live version](https://giulia-girardi.github.io/season-picker-tetris/)
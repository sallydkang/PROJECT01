#PROJECT#1  
##GAME NAME: 
_____
###STARTING SCREEN --->
- The player is asked to **ENTER NAME**:
- Then gets to **choose** one of these avatar images :

_____
![img](img/avatar.jpg)
____

###STARTING GAME --->
- Large **GAME START** button
- Game starts after the count down
- **Instructions will be here:** "Guess the image as fast as possible before the time runs out"

####START BUTTON IMAGE
______

![img](img/5Wk8m79.gif)
______

#GAME --->
- Picture is in the middle of the page but only part of it will show.
- objective: within 1min guess as many pictures as possible.

###SCORE --->
- Have player **name** and **avatar** stored on a "high score" list.
- Players can play again to achieve highest score.


___
#APPROACH
- Have an array of objects that connects the image urls with image names.
- users "answers" would have to equal the name of the image in the array.
- After the user inputs the right answer, another image from the array will show and repeat.
- Each picture will give points which is stored to userScore that will add up in the end.
- userScore is stored with the name input value and is recorded on the highscore array.

**CIRCLE**

- Set the image on the back and set a circle on top.
- Only be able to see inside the circle.

____
#USER STORIES
- As a user I want to be able to know when the game is going to start.
- As a user I want to be able to choose my own unique symbol other than my name to represent myself on the highscore board. 
- As a user I want to be able to enter the answer without clicking on the text input.
- As a user I want to be able to know how to play the game before it starts.
- As a user I want to be able to know how much time I have to guess the pictures.
- As a user I want to be able to know how many points I recieved for one picture. 
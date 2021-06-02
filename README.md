# TITLE: STAR WARS TRIVIA GAME

## Project Title: trivia-game
Purpose: This project was created to explore vanilla JavaScript. New skills learned included working with timers, event delegation, working with objects, multiple HTML files, & local memory. \
The project is a trivia game where the user is presented with Star Wars trivia quesitons and is able to select from 4 multiple choice answers. Incorrect answers deduct time from local timer. \
At the end of the game, the user is provided a chance to record their score which is saved in local browser memory as a high scores list which is displayed on its own page.

Creation date: May 2021
Collaborators: Sheri Elgin

## Screen Cap
![screen cap of Password Generator](./Assets/screencap.png )

## Project Links
GitHub Source Code: https://github.com/grudgecat/trivia-game \
Site URL/Pages link: https://grudgecat.github.io/trivia-game/

 
## Expected Behavior 
_Expected bevhavior:_ \
User is presented with title and initial first trivia question, no timer or score is running, on page load. \
If user clicks an answer before starting timer, page alerts user to start game with button first. \
Once user clicks the start button, the button disappears and the timer starts with 90 seconds on the clock. \
The user can select one of the 4 answers provided (display changes on hover to indicate which option is being selected), \
on click, the user will get a reply of 'correct' or 'incorrect' based on whether they selected the right answer for a brief time. \
If the answer is correct, the score is incremented by one. \
If the answer is incorrect, the score is not changed but the timer is decremented by 10 seconds. \
Once the timer runs out, or the user answers the full set of 50 questions, the game will end. \
At the end of the game, the user is provided an option to record their name/initials in the High Score list. \
User can view High Scores list by clicking View High Scores link at bottom of game display. \
The high scores list is stored in local browser memory, will retain high score data until cleared by user. \




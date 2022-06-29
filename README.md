# minesweeper

classic mine sweeper game with three levels.<br>
<img src="public\readMeScreenShots\gameplay.png" alt="beginner game play" width="250"/>
<img src="public\readMeScreenShots\gameplayIntermediate.png" alt="intermediate game play" width="250"/>
<img src="public\readMeScreenShots\gameplayexpert.png" alt="expert game play" width="370"/>

# How to play

1-Aim of the game is to clear all tiles without a mine under them.<br>
2-When you click on a empty tile it will clear all the adjacent empty tiles untill it reaches a tile with a number under it<br>
3-The numbers represent the number of adjacent mines.<br>
&nbsp;&nbsp;&nbsp; i- The yellow highlighted tile dipays a 1 meaing it is next to a mine the only covered tiles is the red highlighted tile meaing it must have a mine hidden there.<br>
<img src="public\readMeScreenShots\whatNumberMean.png" alt="numbers adjacent to mine" width="100" />

<img src="public\readMeScreenShots\whatNumberMean2.png" alt="numbers adjacent to mine with annotation" width="100" />

4-By right clicking on a tile you are able to place a flag on it to indicate that there is a mine at that tile and thus revents you from mistakenly clicking on it.<br>
&nbsp;&nbsp;&nbsp; i- By right clicking a second time on the same tile it will remove the flag

<img src="public\readMeScreenShots\flag.png" alt="flaged tile" width="100" />

5-If you click on a mine its gameover.

<img src="public\readMeScreenShots\mines.png" alt="mine tile" width="250" />

# Tech Stack

## -React<br>

## -CSS<br>

## -jest<br>

# How to run project

1- run "git clone https://github.com/abdullahiali89/minesweeper.git ." (make sure you are in the place you want to store this project in you dirctory)<br>
2- run "npm i" to install all dependencies <br>
3- run "npm start" to launch project at localhost:3000<br>
4- run "npm run test" to run all unit test suites with jest <br>

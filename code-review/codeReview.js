// Write a reusable function to return the score for a specific player
// You have access to a scoreApiService and a method getScores which returns
// an list of all scores.

// Then call the function to return player name with id 10 and write it to the console

const scoreApiService = require("./scoreApiService");

// Your answer (please review)
function getPlayerScore()
{
    let score = scoreApiService.getScores().find(score => score.playerId == '10');
    console.log(score);
}

getPlayerScore();
// End: Your answer
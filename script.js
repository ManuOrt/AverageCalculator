// Back to the two gymnastics teams, the dolphins and the koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins.
/*
* 1. Create an arrow function `calcAverage` to calculate the average of 3 scores
* 2. Use the funtion to calculate the average for both teams
* 3. Create a function ´checkWinner´ that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'),
* and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
* 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
* 5. Ignore draws this time
*
* TEST DATA: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
* */

'use strict';

const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
    const totalPoints = scoreOne + scoreTwo + scoreThree;
    const calcTheAvg = totalPoints / 3;
    return calcTheAvg;
}
const dolphinScore = (calcAverage(1,23,71))
const koalaScore = (calcAverage(339,54,49))
console.log(`The average of Dolphins is ${dolphinScore} and Koalas is ${koalaScore}`)

const winner = function checkWinner(){
    if (dolphinScore >= koalaScore * 2){
        return `Dolphins team wins with ${dolphinScore}`;
    }if (koalaScore >= dolphinScore * 2){
        return `Koalas team wins with ${koalaScore}`;
    }else{
        return "Nobody wins";
    }
}

const result = winner()
console.log(result)
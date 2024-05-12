let myScores = [92, 98, 84, 76, 89, 99, 100]; 
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 
let testScores = [10, 10, 20, 20, 40]


function getAverage(Scores){
    scoresLen = Scores.length;
    totalScore = 0;
    for(let i=0; i< scoresLen; i++){
        totalScore += Scores[i];
    }
    avgScore = totalScore / scoresLen;
    return avgScore

}

let averageScore = getAverage(testScores);
console.log(averageScore);
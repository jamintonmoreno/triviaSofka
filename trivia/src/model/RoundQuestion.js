
export class RoundQuestion {
    constructor (difficulty, question, incorrectAnswer, correctAnswer ) {
        
        this.difficulty = difficulty
        this.question = question
        this.incorrectAnswer = incorrectAnswer
        this.correctAnswer = correctAnswer
    }

    checkAnswer (userAnswer){
        if (userAnswer === this.correctAnswer){
            return true
        }else{
            return false
        }
    }
}
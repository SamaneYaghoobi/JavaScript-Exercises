(function () {
    var score;

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++)
            console.log((i + 1) + '. ' + this.answers[i]);
    }

    Question.prototype.checkAnswer = function (answer) {
        if (answer === this.correct) {
            console.log('Correct!');
            score++;
            console.log('Score: ' + score);
        } else {
            console.log('incorrect. Try again! :)');
            console.log('Score: ' + score);
        }
    }
    var question_1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 1);
    var question_2 = new Question('How many days are 1 week?', ['5days', '9days', '7days', '11days'], 3);
    var arr = [question_1, question_2];
    score = 0;
    makeQuestion();

    function makeQuestion() {
        var num = Math.floor(Math.random() * arr.length);
        arr[num].displayQuestion();
        var answer = prompt('Enter the number of the correct answer');
        if (answer !== 'exit') {
            arr[num].checkAnswer(parseInt(answer));
            console.log('------------');
            makeQuestion();
        }
    }
})();

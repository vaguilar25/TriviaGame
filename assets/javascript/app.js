$(function () {
    //Create a trivia Object

    function gameTrivia(question, op1, op2, op3, op4, answer, point, user_answer) {
        this.question = question;
        this.op1 = op1;
        this.op2 = op2;
        this.op3 = op3;
        this.op4 = op4;
        this.answer = answer;
        this.points = point;
        this.user_answer = user_answer;
        this.count++;

    }

    var trivia1 = new gameTrivia("Question 1", "op1", "op2", "op3", "op4", "op1", 5, "");

    var trivia2 = new gameTrivia("Question 2", "op1", "op2", "op3", "op4", "op1", 5, "");

    var trivia3 = new gameTrivia("Question 3", "op1", "op2", "op3", "op4", "op1", 5, "");


    var pointCounter = 0;
    //create a function to display trivia at the DOM
    var numberOfCuestions = 4;
    var countQuestions = 0

    function createTriviaDom(trivia) {
        var divQuestion = $("<div>");
        divQuestion.addClass("card-header");
        divQuestion.text(trivia.question);
        divQuestion.attr("answer", trivia.answer);
        $("#triviaHead").prepend(divQuestion);

        //build answer object op name
        var opName = "op";
        //iterate 4 times because there are 4 answers
        for (i = 1; i <= 4; i++) {
            //concatenate i and the build the variable name
            var option = opName.concat(i);
            var answerVarName = "trivia." + option;

            console.log("option:" + answerVarName);

            var liAnswer = $("<li>");
            liAnswer.addClass("mask list-group-item answer rgba-red-strong");
            liAnswer.attr("answer", eval(answerVarName));
            liAnswer.attr("correctanswer", trivia.answer);
            liAnswer.attr("points", trivia.points);
            liAnswer.text(eval(answerVarName));

            //add hover effect
            $(liAnswer).hover(function () {
                $(this).css("background", "#f5f5f5");
            }, function () {
                $(this).css("background", "#fff");
            });

            $("#answersOp").append(liAnswer);


        }

    }


    $(document).on("click", ".answer", function () {
        var correctAnswer = $(this).attr("correctanswer");
        var answerSelected = $(this).attr("answer");
        var questionPoints = $(this).attr("points");
        console.log("correctAnswer: " + correctAnswer);
        console.log("answerSelected: " + answerSelected);

        if (answerSelected === correctAnswer) {
            $("#triviaHead").text("Correct");
            pointCounter += questionPoints;
        } else {
            $("#triviaHead").text("Incorrect");
        }
        console.log(pointCounter);
    });

    var counter = 0;
    var number = 5;

    var questions = setInterval(function () {
        clearTrivia();
        counter += 1;
        number = 5;

        var varName = "trivia"
        var triviaNumber = varName.concat(counter);
        console.log("counter: " + counter);
        createTriviaDom(eval(triviaNumber));

    }, 1000 * 5);


    //clearTimeout(question05);
    var stopQuestions = setTimeout(function () {
        clearInterval(questions);
        // clearTrivia();
    }, 1000 * 15);
    //}
    function clearTrivia() {
        $(".card-header").remove();
        $(".answer").remove();
        console.log("remove");
    }

    var intervalId;
    //var number = 5;
    function run() {
        //clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        
    }

    //  The decrement function.
    function decrement() {

        //  Decrease number by one.
        number--;

        //  Show the number in the #show-number tag.
        $("#show-number").html("<h2>" + number + "</h2>");


        //  Once number hits zero...
        if (number === 0) {

            //  ...run the stop function.
            stop();

            // show the next queestion

        }
    }

    //  The stop function
    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
    }

    //  Execute the run function.
    run();





    // var number=5;
    // function run() {
    //clearInterval(intervalId);
    //var number=5;
    //   intervalId = setInterval(decrement(number), 1000);
    /// var varName="trivia"
    // var triviaNumber = varName.concat(i);
    ///  createTriviaDom(eval(triviaNumber));
    // }

    //function run() {
    //clearInterval(intervalId);
    //   intervalId = setInterval(decrement, 1000);
    //}

    // function decrement() {

    //  Decrease number by one.
    //    number--;

    //  Show the number in the #show-number tag.
    //  $("#show-number").html("<h2>" + number + "</h2>");
    //    console.log(number);

    //  Once number hits zero...
    //    if (number === 0) {

    //  ...run the stop function.
    //       stop();
    // show the next queestion



    //    }
    //}

    //function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    //   clearInterval(intervalId);
    //  number = 5;
    // }

    //    var intervalId;
    //var i;
    //for (i = 1; i <= 3; i++) {
    //var intervalId;
    //var intervalId;
    //console.log("i" + i);
    // number = 5;
    // run();
    // console.log()
    //}


    //  displayTimer();


})
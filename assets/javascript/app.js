$(function () {

    function startGame() {
        //object to hold questions
        function gameTrivia(question, op1, op2, op3, op4, answer, user_answer, inlineRadio) {
            this.question = question;
            this.op1 = op1;
            this.op2 = op2;
            this.op3 = op3;
            this.op4 = op4;
            this.answer = answer;

            this.user_answer = user_answer;
            this.radio = inlineRadio;

        }
        //questions and answers
        var trivia1 = new gameTrivia(
            "Which actor played Freddie Mercury in the 2018 film Bohemian Rhapsody?",
            "Rami Malek",
            "Tom Hanks",
            "Will Smith",
            "Clint Eastwood",
            "Rami Malek",
            "", "inlineRadio1");

        createTriviaDom(trivia1);

        var trivia2 = new gameTrivia(
            "In which Disney film do two cats sing “The Siamese Cat Song”?",
            "The Aristocats",
            "The Cat in the Hat",
            "Lady and the Tramp",
            "Oliver and Company",
            "Lady and the Tramp",
            "", "inlineRadio2");

        createTriviaDom(trivia2);

        var trivia3 = new gameTrivia(
            "What popular Disney movie is set near Salem, Massachusetts in the years 1693 and 1993?",
            "The rescuers",
            "Candle Shoe",
            "Hocus Pocus",
            "Robin Hood",
            "Hocus Pocus",
            "", "inlineRadio3");

        createTriviaDom(trivia3);

        var trivia4 = new gameTrivia(
            "What is Shawshank, in the movie The Shawshank Redemption?",
            "The prison",
            "A fabric",
            "City",
            "House",
            "The prison",
            "", "inlineRadio4");

        createTriviaDom(trivia4);

        var trivia5 = new gameTrivia(
            "Who plays Jack Ryan in the 2002 American spy thriller “The Sum of all Fears?",
            "George Clooney",
            "Ben Affleck",
            "Brad Pitt",
            "Will Smith",
            "Ben Affleck",
            "", "inlineRadio5");

        createTriviaDom(trivia5);


        var trivia6 = new gameTrivia(
            "Which actor played the fictional character Dr. Emmett Brown in the Back to the Future trilogy?",
            "Matt Damon",
            "Adam Sandler",
            "Leonardo DiCaprio",
            "Christopher Lloyd",
            "Christopher Lloyd",
            "", "inlineRadio1");

        createTriviaDom(trivia6);


        var totalQuestions = 6;
        // create Dom for questions
        function createTriviaDom(trivia) {
            //Form 
            var formQuestions = $("<form>");
            formQuestions.attr("id", "triviaHead" + trivia.radio);
            $(".formContainer").prepend(formQuestions);

            var br = $("<br>");
            $("#triviaHead" + trivia.radio).append(br);
            //Question
            var labelQuestion = $("<label>");
            labelQuestion.addClass("font-weight-bold");
            labelQuestion.attr("answer", trivia.answer);
            labelQuestion.attr("for", trivia.radio);
            labelQuestion.text(trivia.question);
            $("#triviaHead" + trivia.radio).append(labelQuestion);



            var br = $("<br>");
            $("#triviaHead" + trivia.radio).append(br);

            //Div to hold options
            var divContainer = $("<div>");
            divContainer.addClass("form-check form-check-inline");
            divContainer.attr("id", "answersOp" + trivia.radio);
            $("#triviaHead" + trivia.radio).append(divContainer);
           
            //build answer object op name
            var opName = "op";


            //iterate 4 times because there are 4 answers
            for (i = 1; i <= 4; i++) {
               
                //concatenate i and the build the variable name
                var option = opName.concat(i);
                var answerVarName = "trivia." + option;


                //Create options
                var liAnswer = $("<input>");
                liAnswer.addClass("form-check-input");
                liAnswer.attr("id", "inlineRadio" + i);
                liAnswer.attr("type", "radio");
                liAnswer.attr("name", "inlineRadioOptions");
                liAnswer.attr("answer", eval(answerVarName));
                liAnswer.attr("questionContainer", "#triviaHead" + trivia.radio);
                liAnswer.attr("correctanswer", trivia.answer);

                liAnswer.attr("question", trivia.question);
                // liAnswer.text(eval(answerVarName));
                $("#answersOp" + trivia.radio).append(liAnswer);

                //create labels for options
                var label = $("<label>");
                label.addClass("form-check-label");
                label.attr("for", "inlineRadio" + i);
                label.text(eval(answerVarName));
                $("#answersOp" + trivia.radio).append(label);




            }



        }

        //Get the radio button clicked with the data attributes
        var correctAnswerCount = 0;
        var incorrectAnswerCount = 0;
        var notanswered = 0;
        jQuery(document).delegate("input[type='radio']", "click",
            function (e) {

                var answerClicked = $(this).attr("answer");
                var correctAnswer = $(this).attr("correctanswer");

                var questionSelected = $(this).attr("questionContainer")
                $(questionSelected).click(false);

                if (answerClicked === correctAnswer) {

                    correctAnswerCount++
                   
                } else {
                    incorrectAnswerCount++
                    
                }



            });

        //On click done delete trivia and show score
        $("#buttonDone").on("click", function () {
            stop();

        });

        function showCorrectAnswer() {
            unansweredQuestions = (totalQuestions - correctAnswerCount - incorrectAnswerCount)
            $("#show-number").html("<br><br><br><br><h2 class=text-center>Your Results!</h2><h3 class=text-center >Correct Answers: " + correctAnswerCount + "</h3>"
                + "<h3 class=text-center>Incorrect Answers: " + incorrectAnswerCount + "</h3>"
                + "<h3 class=text-center>Unsanswered Questions: " + unansweredQuestions + "</h3>");

        }
        //clear trivia questions
        function clearTrivia() {
            $(".formContainer").remove();
        }

        var intervalId;
        var number = 40;
        function run() {
            //clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
           
        }
        //  The decrement function.
        function decrement() {
            //  Decrease number by one.
            number--;
            //  Show the number in the #show-number tag.
            $("#show-number").html("<h3>Time Remaining: " + number + "</h3>");
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
            clearTrivia();
            showCorrectAnswer();
        }

        //  Execute the run function.

        run();
    }
    ///Start Trivia
    $("#buttonStart").on("click", function () {

        $(".startGame").remove();
        $("#buttonDone").show();
        startGame();

    });
})
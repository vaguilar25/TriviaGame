$(function () {
    //object to hold questions
    function gameTrivia(question, op1, op2, op3, op4, answer, point, user_answer, inlineRadio) {
        this.question = question;
        this.op1 = op1;
        this.op2 = op2;
        this.op3 = op3;
        this.op4 = op4;
        this.answer = answer;
        this.points = point;
        this.user_answer = user_answer;
        this.radio = inlineRadio;

    }
    //questions and answers
    var trivia1 = new gameTrivia("Question 1", "op1", "op2", "op3", "op4", "op1", 5, "", "inlineRadio1");
    createTriviaDom(trivia1);
    var trivia2 = new gameTrivia("Question 2", "op1", "op2", "op3", "op4", "op1", 5, "", "inlineRadio2");
    createTriviaDom(trivia2);
    var trivia3 = new gameTrivia("Question 3", "op1", "op2", "op3", "op4", "op1", 5, "", "inlineRadio3");
    createTriviaDom(trivia3);

    var gamePoints =0;
    // create Dom for questions
    function createTriviaDom(trivia) {
        //Form 
        var formQuestions = $("<form>");
        formQuestions.attr("id","triviaHead" + trivia.radio);
        $(".formContainer" ).prepend(formQuestions);

        var br = $("<br>");
        $("#triviaHead"+ trivia.radio).append(br);
        //Question
        var labelQuestion = $("<label>");
        labelQuestion.attr("answer", trivia.answer);
        labelQuestion.attr("for", trivia.radio);
        labelQuestion.text(trivia.question);
        $("#triviaHead"+ trivia.radio).append(labelQuestion);

        var br = $("<br>");
        $("#triviaHead"+ trivia.radio).append(br);

        //Div to hold options
        var divContainer = $("<div>");
        divContainer.addClass("form-check form-check-inline");
        divContainer.attr("id", "answersOp" + trivia.radio);
        $("#triviaHead"+ trivia.radio).append(divContainer);
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
            liAnswer.attr("correctanswer", trivia.answer);
            liAnswer.attr("points", trivia.points);
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


})

//Get the radio button clicked with the data attributes
var correctAnswerCount=0;
var incorrectAnswerCount=0;
var notanswered=0;
jQuery(document).delegate( "input[type='radio']", "click",
    function(e){
    var questionClicked = $(this).attr("question");
    var answerClicked=$(this).attr("answer");
    var correctAnswer=$(this).attr("correctanswer");
    

   // console.log("entra" + test);
    if (answerClicked === correctAnswer) {
       
        correctAnswerCount++
        console.log("correct: " + correctAnswerCount);
    } else {
        incorrectAnswerCount++
        console.log("incorrect" + incorrectAnswerCount);
    }
    
    
    
});

//On click done delete trivia and show score
$("#buttonDone").on("click",function(){
clearTrivia();
$("#show-number").html("<h3>Correct Answers: " + correctAnswerCount + "</h3>"
                        + "<h3>Incorrect Answers: " + incorrectAnswerCount + "</h3>");

                      

});

//clear trivia questions
function clearTrivia() {
    $(".formContainer").remove();
    
    console.log("remove");
}

//$("input[type=radio]").click(function(event) {
  //  var text = event.target.id;
   // console.log("text" + text);
//});
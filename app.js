// arithmetics game - where a random arithmetic operation will be shown, 
// where operator will be hidden. at the bottom of the equation, 
// arithmetic operators will be shown only for few seconds and changed to "?" sign.
// user should first understand what operator is used for the the equation and select the right operator.
//
// 1- build a page where with a display to - show the level- indicate win/lose status
// 2- window to show the equation 
// 3- for separate containers to show/hide arithmetic operators
// message to welcome the user into the game as well as instructions- should have a start button
// blanc page with dedicated windows for the level status, equation, 4x equation operators 
// blanc page should have a countdown to show the content for a spesific time and hide some of the content
// user makes a choice && computer will compare the results if true- { users goes to the next level
// next level will be similar- the only difference would be, the time to show the content is less

 //alert("hi");

 var $display;

 var initialize = function(){
 	$display = $('#display');
 	bindEvents();
 }


 var randomNumber = function(min,max) {
 	return parseInt(Math.floor(Math.random()*(max-min+1)+min));
 }

 var randomOperator = function() {
 	var operators = ["+", "-", "/", "*"];
 	return operators[Math.floor(Math.random() * operators.length)]
 }

 var generateEquation = function() {
 	var min = 1,
 	max = 100,
 	firstRandomNumber = randomNumber(min, max),
 	secondRandomNumber = randomNumber(min, max),
 	operator = randomOperator(),
 	answer;

 	switch (operator) {
 		case "+": 
 		answer = firstRandomNumber + secondRandomNumber;
 		break;
 		case "-": 
 		answer = firstRandomNumber - secondRandomNumber;
 		break;
 		case "/": 
 		answer = firstRandomNumber / secondRandomNumber;
 		break;
 		case "*": 
 		answer = firstRandomNumber * secondRandomNumber;
 		break;
 	}

 	return answer = {
 		firstRandomNumber: firstRandomNumber,
 		operator: operator,
 		secondRandomNumber: secondRandomNumber,
 		answer: answer
 	}
 }

 function shuffle(array) {
 	var currentIndex = array.length, temporaryValue, randomIndex ;

   // While there remain elements to shuffle...
   while (0 !== currentIndex) {

     // Pick a remaining element...
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;

     // And swap it with the current element.
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
   }

   return array;
 }



 var easyGame = function(){
 	var operators = ["+", "-", "/", "*"];

 	for(var i = 1; i<5; i++){
 		$('#operator'+i).html(newShuffle = shuffle(operators).splice(0, 1))
 		$('#operator'+i).attr("data-id", newShuffle.splice(0, 1))
 	}


 	event.preventDefault();
 	var answer = generateEquation();
 	if (answer.answer !== Math.round(answer.answer)) {
 		answer = generateEquation();
 	}

 	$display.text(answer.firstRandomNumber + " " + "?" + " "+ answer.secondRandomNumber + " = " + answer.answer)

 	$(".operator").on("click", function(){
 		if(this.getAttribute("data-id") === answer.operator){
 			alert("correct")
 		}else{
 			alert("wrong answer")
 		}
 	})

 	setTimeout(function(){
 		$('.operator').html('?')
 	}, 2000); //buttons fadeOut

 }

 var bindEvents = function(){
 	$('#easy').on('click', easyGame);
 	$('#progress').on('click', easyGame);
 }



 $(function() {
 	initialize();
 });





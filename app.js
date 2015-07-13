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
	var min = 100,
			max = 1,
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

var easyGame = function(){
	event.preventDefault();
	var answer = generateEquation();
	if (answer.answer !== Math.round(answer.answer)) {
		answer = generateEquation();
	}

	$display.text(answer.firstRandomNumber + " " + "?" + " "+ answer.secondRandomNumber + " = " + answer.answer)
}

var bindEvents = function(){
	$('#easy').on('click', easyGame);
}

$(function() {
	initialize();
});

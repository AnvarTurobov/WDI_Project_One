var $display;
var roundsPlayed= [];
var time = 3000;

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

cancel = true;

function startTimer(duration, display) {
	var timer = duration, minutes, seconds;

	var interval = setInterval(function () {
		seconds = parseInt(timer % 60, 10);
		seconds = seconds < 10 ? seconds : seconds;

		display.text(seconds);
		console.log(timer)


		if (timer == -1) {
			display.text("");
			clearInterval(interval)
			easyGame();
		} else if(--timer < -1) {
			display.text("");
		}
	},1000);
}


var easyGame = function(){
	$('#easy').addClass('animated rubberBand');

	setTimeout(function() {
		$('#easy').removeClass('animated rubberBand');
	}, 2000)

	var operators = ["+", "-", "/", "*"];
	for(var i = 1; i<5; i++){
		$('#operator'+i).html(newShuffle = shuffle(operators).splice(0, 1))
		$('#operator'+i).attr("data-id", newShuffle.splice(0, 1))
	}

 	var answer = generateEquation();
 	if ((answer.answer !== Math.round(answer.answer)) || (answer.answer.toString().indexOf("-") >= 0)) {
 		debugger
 		answer = generateEquation();
 	}


 	$display.text(answer.firstRandomNumber + " " + "?" + " "+ answer.secondRandomNumber + " = " + answer.answer)

 	$(".operator").on("click", function(){
 		if(this.getAttribute("data-id") === answer.operator){
 			$('#progress').html('Correct! Верно! Кichtig! 正確! Correctto!<br><button id="continue">CONTINUE</button>');
 			$("#continue").on("click", function(){
 				$('#progress').html("");
 				roundsPlayed++;
 				time -= 200;
 			})  
 		} else {
 		$('#progress').html('WRONG! come one, you can do better than that! Неправильно! Falsch! 錯! Sbagliato!<br><button id="startAgain">START AGAIN</button>'); //alert("wrong answer")

 		$("#startAgain").on("click", function(){
 			$('#progress').html("");
 		})
 	}
 	
 })


 	setTimeout(function() {
 		$('.operator').html('?')
 	}, time);

 }

 var bindEvents = function() {
 	var three_seconds = 3,
 	display = $("#display");
 	
 	$('#easy').on('click', function(){
 		startTimer(three_seconds, display)
 	});

 	$('#progress').on('click', function(){
 		$('#display').html("")
 		startTimer(three_seconds, display)
 	});
 }


 $(function() {
 	initialize();
 });
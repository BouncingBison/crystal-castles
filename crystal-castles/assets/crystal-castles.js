

$(document).ready(function() {


var wins = 0;
var losses = 0;

var randomizer = 0;

/**Random Number**/
var digitz = Math.floor((Math.random()* 100) + 19);

/**Random Crystal Power**/
var diamond = Math.floor((Math.random()* 12) + 1);
var ruby = Math.floor((Math.random()* 12) + 1);
var topaz = Math.floor((Math.random()* 12) + 1);
var emerald = Math.floor((Math.random()* 12) + 1);

var configmath = function(){
	$('#win-counter').empty();
	$('#win-counter').append(wins);
	$('#loss-counter').empty();
	$('#loss-counter').append(losses);
	$('#playerScore').empty();
	$('#playerScore').append(math);
	
}

var reset = function(){
	randomizer = 0;
    digitz = Math.floor((Math.random()* 100) + 19);

	$('#computerScore').empty();
	$('#computerScore').append(number);

	diamond = Math.floor((Math.random()* 12) + 1);
    ruby = Math.floor((Math.random()* 12) + 1);
    topaz = Math.floor((Math.random()* 12) + 1);
    emerald = Math.floor((Math.random()* 12) + 1);
    reset();
}

var pushedOut = function (){
	if (randomizer == digitz) {
		wins = wins + 1;
		reset();
}
	else if(randomizer > digitz){
		losses = losses + 1;
		reset();
}
	else{
		reset();
}}

	$('#playerScore').append(math);
	$('#computerScore').append(number);

	$(document).ready(function(){

	$('#Diamond').click(function(){
		randomizer = randomizer + diamond;
		pushedOut();
	})
	$('#Ruby').click(function(){
		randomizer  = randomizer  + ruby;
		pushedOut();
	})
	$('#Topaz').click(function(){
		randomizer  = randomizer  + topaz;
		pushedOut();
	})
	$('#Emerald').click(function(){
		randomizer = randomizer  + emerald;
		pushedOut();
	})

});

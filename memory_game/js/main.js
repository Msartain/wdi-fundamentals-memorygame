console.log("ready to go");

const cards = [
{	
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"	
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"	
},
];

var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		setTimeout(function(){alert("You found a match!");},350);
	} else {
		setTimeout(function(){alert("Sorry, try again.");},350);
	}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id')
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
		checkForMatch();
	} 
}

var createBoard = function(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

var shuffle = function(cards){
	let i, randomNum;
	let num = 0;
	for (i = cards.length - 1; i >= 0; i--) {
		randomNum = Math.floor(Math.random() * (i + 1));
		console.log(" random number ",randomNum);
		console.log("cards",cards[i]);
		[cards[i], cards[randomNum]] = [cards[randomNum], cards[i]];
		num++;
	}
	console.log(num);
	return cards;
	console.log("new deck of cards",cards);
}


var resetTheGame = function(){
	cardsInPlay = [];
	shuffle(cards);
	for (var i = 0; i < cards.length; i++){
		var resetImage = document.getElementsByTagName("img")[i];
		resetImage.setAttribute('src', "images/back.png");

	}
}

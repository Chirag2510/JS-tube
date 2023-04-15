const cards = document.querySelectorAll(".card");

cards.forEach( (card) => card.addEventListener("click",flip));

var firstCard;
var secondCard;
var isFlipped = false;

function flip () {
  // console.log("this is flipped");
  //console.log(this);
  this.classList.add("flip");

  if (!isFlipped) {
    firstCard = this;
    isFlipped = true;
  } else {
    isFlipped = false;
    secondCard = this;
    checkCards();
  }
 
}

function checkCards() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    firstCard.removeEventListener("click",flip);
    secondCard.removeEventListener("click",flip);
  }
  else {
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetValues();
    }, 500);
  }
}

function resetValues() {
  var firstCard = null; 
  var secondCard = null;
  var isFlipped = false;
}


(function suffle() {
    cards.forEach( (card) => {
      var index = Math.floor(Math.random() * 16);
      card.style.order = index;
    })
})();


const cards = document.querySelectorAll(".card");

var isFlipped = false;
var cardlist = {
    firstCard: null,
    secondCard: null,
};

var {firstCard,secondCard} = cardlist;

let flip = function () {
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
    resetValues();
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
    isFlipped = false; 
    var {firstCard,secondCard} = cardlist;
}


function suffle() {
    cards.forEach( (card) => {
      var index = Math.floor(Math.random() * 16);
      card.style.order = index;
    })
}

window.addEventListener("load",suffle);

cards.forEach( (card) => card.addEventListener("click",flip));


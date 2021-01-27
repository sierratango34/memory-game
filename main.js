let clickedCard = null;
let preventClick = null;
let combos = 0;
const colors = ['teal', 'orange', 'hotpink', 'purple', 'blue', 'green', 'maroon', 'yellow']

const cards = [...document.querySelectorAll('.card')]

for (let color of colors) {
  cardAIndex = parseInt(Math.random() * cards.length)
  const cardA = cards[cardAIndex]
  cards.splice(cardAIndex, 1)
  cardA.className += ` ${color}`;
  cardA.setAttribute('data-color', color)

  cardBIndex = parseInt(Math.random() * cards.length)
  const cardB = cards[cardBIndex]
  cards.splice(cardBIndex, 1)
  cardB.className += ` ${color}`
  cardB.setAttribute('data-color', color)
}



function onCardClick(e) {
  const target = e.currentTarget;
  color = target.getAttribute('data-color')

  if (preventClick || target === clickedCard || target.className.includes('done')) {
    return;
  }

  target.className = target.className.replace('color-hidden', '').trim();
  target.className += ' done'

  if (!clickedCard) {
    clickedCard = target;
  } else if (clickedCard) {

    if (clickedCard.getAttribute('data-color') !== color) {
      preventClick = true;
      setTimeout(() => {
        clickedCard.className = clickedCard.className.replace('done', '').trim() + ' color-hidden'
        target.className = target.className.replace('done', '').trim() + ' color-hidden';
        clickedCard = null;
        preventClick = false;
      }, 500);
    } else {
      combos++
      clickedCard = null;
      preventClick = false
      if (combos === 8) {
        setTimeout(() => {
          alert("you win!")
        }, 510)
      }
    }
  }
}
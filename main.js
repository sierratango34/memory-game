let clickedCard = null;
let preventClick = null;
let combos = null;

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
      clickedCard = null;
      preventClick = false
    }
  }
}
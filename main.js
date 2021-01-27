let clickedCard = null;

function onCardClick(e) {
  const target = e.currentTarget;
  color = target.getAttribute('data-color')

  if (target.className.includes('done')) {
    return;
  }

  target.className = target.className.replace('color-hidden', '').trim();
  target.className += ' done'

  if (!clickedCard) {
    clickedCard = target;
  } else if (clickedCard) {

    if (clickedCard.getAttribute('data-color') !== color) {
      setTimeout(() => {
        clickedCard.className = clickedCard.className.replace('done', '').trim() + ' color-hidden'
        target.className = target.className.replace('done', '').trim() + ' color-hidden';
        clickedCard = null;
      }, 500);
    } else {
      clickedCard = null;
    }
  }
}
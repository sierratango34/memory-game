
function onCardClick(e) {
  let clickedCard1 = null;
  const target = e.currentTarget;
  color = target.getAttribute('data-color')

  target.className = target.className.replace('color-hidden', '').trim();

  if (!clickedCard1) {
    clickedCard = target;
  };



}
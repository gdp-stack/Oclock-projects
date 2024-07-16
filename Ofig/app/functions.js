function notationDisplay(noteGlobal, reviewsNumber = 1) {
  const note = Number(noteGlobal) / Number(reviewsNumber);

  if (note === 5) {
    return "&#9733; &#9733; &#9733; &#9733; &#9733;";
  } else if (note >= 4 && note < 5) {
    return "&#9733; &#9733; &#9733; &#9733; &#9734;";
  } else if (note >= 3 && note < 4) {
    return "&#9733; &#9733; &#9733; &#9734; &#9734;";
  } else if (note >= 2 && note < 3) {
    return "&#9733; &#9733; &#9734; &#9734; &#9734;";
  } else if (note >= 1 && note < 2) {
    return "&#9733; &#9734; &#9734; &#9734; &#9734;";
  } else {
    return "&#9734; &#9734; &#9734; &#9734; &#9734;";
  }
}

module.exports = notationDisplay;

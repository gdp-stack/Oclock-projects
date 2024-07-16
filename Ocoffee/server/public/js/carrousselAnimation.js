document.addEventListener("DOMContentLoaded", () => {
  //Affichage initial de 3 nouveaux produits de manière aléatoire
  const articles = document.querySelectorAll(".nouveautes article");
  let index = Math.round(Math.random() * (articles.length - 4) + 1);
  console.log(index);
  for (let i = index - 1; i < index + 2; i++) {
    articles[i].classList.remove("carroussel-element-invisible");
    articles[i].classList.add("carroussel-element-visible");
  }

  //Ecouteur d'evenement bouton suivant
  const buttonNext = document.querySelector(".button-next");

  buttonNext.addEventListener("click", () => {
    if (index === articles.length - 2) {
      return;
    }
    index++;
    console.log(index);
    if (index === 1) {
      articles[articles.length - 1].classList.remove(
        "carroussel-element-visible"
      );
      articles[articles.length - 1].classList.add(
        "carroussel-element-invisible"
      );
      articles[2].classList.remove("carroussel-element-invisible");
      articles[2].classList.add("carroussel-element-visible");
    } else {
      articles[index - 2].classList.remove("carroussel-element-visible");
      articles[index - 2].classList.add("carroussel-element-invisible");
      articles[index + 1].classList.remove("carroussel-element-invisible");
      articles[index + 1].classList.add("carroussel-element-visible");
    }
  });

  //Ecouteur d'evenement bouton précédent
  const buttonPrevious = document.querySelector(".button-previous");

  buttonPrevious.addEventListener("click", () => {
    if (index === 1) {
      return;
    }
    index--;
    console.log(index);
    if (index === articles.length - 2) {
      articles[0].classList.add("carroussel-element-visible");
      articles[0].classList.remove("carroussel-element-invisible");
      articles[3].classList.add("carroussel-element-invisible");
      articles[3].classList.remove("carroussel-element-visible");
    } else {
      articles[index - 1].classList.add("carroussel-element-visible");
      articles[index - 1].classList.remove("carroussel-element-invisible");
      articles[index + 2].classList.add("carroussel-element-invisible");
      articles[index + 2].classList.remove("carroussel-element-visible");
    }
  });
});

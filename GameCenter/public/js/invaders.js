const invader = document.querySelector("#invader");

//Creation et integration dans le DOM du formulaire et des boutons
function formInit() {
  const configuration = document.querySelector(".configuration");
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  formContainer.innerHTML = `<input required="required" type="number" placeholder="Taille de la grille" class="btn" id="form-grid-size" />
  <input required="required" type="number" placeholder="Taille des pixels" class="btn" id="form-pixels-size" />
  <button class="btn" id="button-validate"> Valider </button>`;
  configuration.appendChild(formContainer);
}

//function pour  afficher la grille
function displayGrid() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const gridSize = document.querySelector("#form-grid-size").value;
    const pixelsSize = document.querySelector("#form-pixels-size").value;
    update(gridSize, pixelsSize);
    displayColorPalette();
  });
}

// function pour  afficher la palette de couleur
function displayColorPalette() {
  const styles = ["plain", "empty", "yellow", "green"];
  // création de la div qui sera le container des palettes colors
  const paletteContainer = document.createElement("div");
  paletteContainer.classList.add("palette-container");

  // utilisation d'une boucle forEach sur tableau styles pour créer les éléments palettecolor
  styles.forEach((style) => {
    const paletteColor = document.createElement("div");
    paletteColor.classList.add("palette-color", style);
    paletteContainer.appendChild(paletteColor);

    //   event lisctener sur les palettecolor
    paletteColor.addEventListener("click", function () {
      // séléctionne touts les éléments qui ont la classe ".palette-color"
      const colors = document.querySelectorAll(".palette-color");
      // boucle forEach pour supprimer la class selected de tous les éléments (permet de réinitialiser à chaque click)
      colors.forEach((color) => {
        color.classList.remove("selected-color");
      });
      // ajout de la classe selected à l'élément clické
      paletteColor.classList.add("selected-color");
    });
  });
  invader.appendChild(paletteContainer);
}
// Initialisation et mise à jour de la grid
function update(gridSize = 8, pixelsSize = 32) {
  invader.style.gridTemplateColumns = `repeat(${gridSize} ,${pixelsSize}px )`;
  invader.style.gridTemplateRows = `repeat(${gridSize} ,${pixelsSize}px )`;
  invader.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      invader.appendChild(cell);
      cell.classList.add("cell");
      cell.style.backgroundColor = "rgb(210, 218, 226)";
      cell.addEventListener("click", changeColor);
    }
  }
}

// Fonction pour changer la couleur d'un pixel lors d'un click sur une cellule
function changeColor(event) {
  const pixel = event.target;
  //utiliser classList pour changer la couleur
  pixel.style.backgroundColor = window.getComputedStyle(
    document.querySelector(".selected-color")
  ).backgroundColor;

  //   if (pixel.style.backgroundColor === "rgb(0, 0, 0)") {
  //     pixel.style.backgroundColor = "rgb(210, 218, 226)";
  //   } else {
  //     pixel.style.backgroundColor = "rgb(0, 0, 0)";
  //   }
}

//Initialisation d'une grille 8 cases de largeur et de hauteur, de taille 32px
update();

//Initialisation du formulaire
formInit();

//Recuperation des nouveaux inputs utilisateurs
displayGrid();

//Affichage palette de couleurs
displayColorPalette();

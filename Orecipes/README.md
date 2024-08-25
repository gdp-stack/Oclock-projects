# Challenge atelier O'Recipes

**Objectif de la journée** : réaliser une interface front en React qui affiche des recettes. 💪

## 1. Création du projet

- Créez un nouveau projet React avec Vite (appelez le S16-orecipes-front-votrePseudoGithub).
- [Installez Biome](https://github.com/O-clock-Mimir/S15-16-React-recaps/blob/main/recap-E01-outils.md#linter-et-formateur).

#### Git

- Initialisez un repo git local.
- Créez un nouveau repo distant sur github (du même nom). Branchez votre repo local avec ce nouveau distant.
  Pensez à commit+push votre code régulièrement ;)

## 2. Structure statique de composants

**Objectif** : Créez la structure de la page d'acceuil en découpant avec les composants qui vous semblent pertinents.

Vous pouvez vous inspirer de la maquette suivante :

![maquette page acceuil](./front_docs/maquette-page-acceuil.png)

Pour commencer, vous pouvez afficher juste 1 ou 2 cartes recettes avec des données en dur. Vous allez dynamiser ensuite avec les données de l'API.

### Style 🎨

Pour le style, vous pouvez utiliser CSS, [SASS](https://sass-lang.com/), [tailwind](https://tailwindcss.com/) ou une bibliothèque de composants pré-stylés comme [SemanticUI React](https://react.semantic-ui.com/).
Dans tous les cas le style n'est pas imposé, n'y passez pas 2h mais faites en sorte d'avoir un site avec une présentation sympa qui vous plait.

Vous pouvez récuperer le logo dans le dossier `front_docs/` de ce repo.

## 3. Recettes de l'API

**Objectif** : afficher les recettes de l'API.

Le code est l'API est dispo dans ce repo, par curiosité vous pouvez regarder le code dans le dossier `back_api/`.  
Cette API est hebergée et tourne sur un serveur onRender ici : https://orecipesapi.onrender.com/. Vous n'avez donc pas besoin de la lancer en local !  
L'API est documentée avec un Swagger qui vous permet de tester les requêtes directement dans le navigateur.

- Mettez en place un state qui permet d'accueillir la liste des recettes.
- N'oubliez pas de [typer ce state](https://github.com/O-clock-Mimir/S15-16-React-recaps/blob/main/recap-E03-typescript.md) pour qu'il puisse acceuillir un tableau d'objet recette meme si vous l'initialisez avec un tableau vide.
- Après le premier rendu de votre app, fetchez les données et enregistrez les dans le state.
- Utilisez les données du state pour créer les cartes recettes et les liens recettes du menu. A chaque fois, vous devrez utiliser map sur le tableau du state pour créer un tableau d'elements dans votre JSX.

#### BONUS

- Mettez en place un loader qui sera affiché tant que les recettes ne sont pas encore dans le state.

## 4. Router et page recette

**Objectif** : au click sur un lien recette, afficher une page avec les détails de la recette (ingrédients et instructions)

Pour la page recette vous pouvez vous inspirer de la maquette suivante :
![maquette page acceuil](./front_docs/maquette-page-recette.png)

Il vous faudra créer un routeur à l'aide de [react-router-dom](https://reactrouter.com/en/main). Servez-vous de la [fiche récap sur react-router-dom](https://github.com/O-clock-Mimir/S15-16-React-recaps/blob/main/recap-E06-react-router-dom.md) et sur ce qui a été vu la veille pour vous guider !

- Installez react-router-dom
- Mettez en place le BrowserRouter
- Replacez tous les liens par des Link ou NavLink
- Créez vos routes :
  - page d'acceuil avec toutes les cartes recettes
  - page recette avec les détails de la recette dont le slug sera dans l'URL (il faudra créer une route dynamique, elle doit matcher quelque soit le slug)
- Créez le composant pour cette page recette, dans ce composant pour récupérer le slug de l'URL vous devrez utiliser la fonction useParams de react-router-dom.

#### BONUS

- Vous remarquez que si on scrolle un peu puis on change de page, on reste scrollé ! Normal, on n'a pas réélement changé de page ... donc faites en sorte qu'à chaque changement de page le scroll revienne à zéro. (utilisez la fonction scrollTo sur l'objet window)
- indice : le scroll de la fenetre de navigateur est un effet de bord ;)

## 5. Login Form

Objectif : à la validation du formulaire de login, envoyez une requête au back pour vérifier les credentials et afficher un message en fonction de la réponse : "Bienvenue Pseudo" ou "Erreur de connexion".

- Après le premier rendu du formulaire, récupérez l'élément du DOM input email et placez le focus dedans. Vous devrez utiliser une ref pour récuperer le node input _(getElementById ou querySelector interdit !! ;) )_

- Au submit du formulaire envoyez une requête POST vers le end point `https://orecipesapi.onrender.com/api/login/` avec les identifiants saisis par l'utilisateur. A vous de choisir [comment récuperer les saisies utilisateur](https://github.com/O-clock-Pavlova/S15-16-react-recaps-SoleneOclock/blob/main/E04-formulaires.md).
- En fonction de la réponse, enregistrez un message dans le state.
- Utilisez ce message pour l'afficher sur la page.

### Si vous avez tout fini : Bravo 🔥

-> venez me demander des idées de bonus supplémentaires 😉

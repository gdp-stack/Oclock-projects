# Feuille de route (roadmap)

> ⚠️ Vous êtes libre d'implémenter les **fonctionnalités que vous souhaitez**, de la manière dont vous souhaitez ! 

> ⚠️ En cas d'ambiguité sur un cas d'utilisation, la décision vous revient : choississez ce qui vous semble pertinent. 

> Vous pouvez également ne pas implémenter certaines fonctionnalités listées ici, aux profits d'autres fonctionnalités qui vous semblent intéressantes.


## Version 1

| En tant que | je souhaite pouvoir                        | afin de                               |
| ----------- | ------------------------------------------ | ------------------------------------- |
| visiteur    | consulter la page des Pokémons             | voir la liste des Pokémons existants  |
| visiteur    | consulter la page d'un Pokémon             | consulter ses caractéristiques        |
| visiteur    | consulter la page récapitulative des types | lister les différents types existants |
| visiteur    | consulter la page récupitulative d'un type | lister les Pokémons de ce type        |
| visiteur    | consulter la page de mes équipes           | les administrer                       |
| visiteur    | consulter la page d'une équipe             | l'administrer                         |

Attention :warning:, les équipes ne sont pas présentes dans le script de seeding, à vous d'en ajouter 2/3 pour les tests via le script `seeding_tables.sql`.


## Version 2

| En tant que | je souhaite pouvoir                                   | afin de |
| ----------- | ----------------------------------------------------- | ------- |
| visiteur    | créer une équipe                                      |         |
| visiteur    | modifier le nom d'une équipe                          |         |
| visiteur    | ajouter un Pokémon à une équipe                       |         |
| visiteur    | retirer un Pokémon d'une équipe                       |         |


## Version 3

| En tant que | je souhaite pouvoir                 | afin de                                            |
| ----------- | ----------------------------------- | -------------------------------------------------- |
| visiteur    | comparer deux Pokémons              | m'aider à faire mon choix                          |
| visiteur    | rechercher un Pokémon par son nom   | le retrouver facilement via une barre de recherche |
| visiteur    | supprimer une équipe                | supprimer le groupement de Pokémons                |
| visiteur    | voter pour un Pokémon               | montrer mon intéret pour ce Pokémon                |
| visiteur    | voir le nombre de vote d'un Pokémon | voir l'intérêt général de ce pokémon               |
| visiteur    | consulter le podium des Pokémons    | voir les 10 Pokémons les plus populaire            |

Notes : 
- dans un premier temps, n'importe quel visiteur peut voter, y compris plusieurs fois, pour le même Pokémon ;
- dans un second temps (V4), un utilisateur ne pourra voter qu'une fois par Pokémon.

En compléments : 
- limiter les équipes à 6 Pokémons maximum.
- afficher une modale de confirmation lors de la suppression d'une équipe complète.
- afficher des bulles de notification ("toast") lorsqu'une opération est réalisée avec succès.


## Version 4 - Bonus authentification

| En tant que | je souhaite pouvoir              | afin de                                         |
| ----------- | -------------------------------- | ----------------------------------------------- |
| visiteur    | accéder à une page d'inscription | me créer un compte                              |
| visiteur    | accéder à une page de connexion  | me connecter et profiter des droits des membres |

Droits d'un membre : 
- administrer ses propres équipes : les équipes ne sont plus communes entre les visiteurs.
- droit de voter pour un Pokémon et de retirer son vote. 

Non droits d'un visiteur :
- accéder à l'administration d'une/des équipes : il faut à présent se connecter.

- Assurer l'accessibilité de l'application, y compris sur mobile.
- Assurer la sécurité de l'application face aux entrées utilisateurs.


## Version 5 - Bonus complémentaires 

- **Infinite scroll** : ne pas afficher tous les Pokémons dès la première consultation de la page d'accueil, mais afficher les Pokémons par groupe de 20 au fur et à mesure que l'utilisateur scroll vers le bas de la page. 

- **Dynamic search bar** : à chaque keyup dans la barre de recherche de Pokémon, les Pokémons correspondant s'affichent, à la manière des moteurs de recherche, sous celle-ci.

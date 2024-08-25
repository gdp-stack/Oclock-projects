# Routes API

## Pokémons

| Verbe | Chemin        | Request Body | Response Body          | Code (succès) |
| ----- | ------------- | ------------ | ---------------------- | --------------- |
| GET   | /pokemons     |              | un tableau de Pokémons | 200             |
| GET   | /pokemons/:id |              | un Pokémon             | 200             |

## Types

| Verbe | Chemin     | Request Body | Response Body       | Code (succès) |
| ----- | ---------- | ------------ | ------------------- | ----------- |
| GET   | /types     |              | un tableau de Types | 200         |
| GET   | /types/:id |              | un Type             | 200         |

## Équipes

| Verbe  | Chemin     | Request Body           | Response Body       | Code (succès) |
| ------ | ---------- | ---------------------- | ------------------- | ------------- |
| GET    | /teams     |                        | un tableau de Teams | 200           |
| GET    | /teams/:id |                        | une Team            | 200           |
| POST   | /teams     | les données d'une team | la Team créée       | 201           |
| PATCH  | /teams/:id | les données à modifier | la Team mise à jour | 200           |
| DELETE | /teams/:id |                        |                     | 204           |


| Verbe  | Chemin                  | Request Body | Response Body       | Code (succès) |
| ------ | ----------------------- | ------------ | ------------------- | ------------- |
| PUT    | /teams/:id/pokemons/:id |              | la Team mise à jour | 200           |
| DELETE | /teams/:id/pokemons/:id |              | la Team mise à jour | 200           |

Notes : 
- on ne doit pas pouvoir mettre deux fois le même Pokémon dans une même Team ;
- on ne doit pas pouvoir mettre plus de 6 Pokémons dans une Team.

## Votes 

| Verbe | Chemin                | Request Body | Response Body                                               | Code (succès) |
| ----- | --------------------- | ------------ | ----------------------------------------------------------- | ------------- |
| POST  | /pokemons/:id/votes   |              | le nombre de voix actuel du Pokémon                         | 201           |
| GET   | /pokemons/leaderboard |              | les 10 Pokémons les plus populaires et leur nombre de votes | 200           |

Notes :
- la route POST permet d'ajouter une voix supplémentaire à un Pokémon ;
- dans un premier temps, les utilisateurs peuvent l'appeler autant de fois qu'ils le souhaitent ;
- dans un second temps, il faudrait : 
  - limiter cette route à un appel par utilisateur ;
  - offrir la possibilité à un utilisateur de retirer son vote via une route additionnelle.

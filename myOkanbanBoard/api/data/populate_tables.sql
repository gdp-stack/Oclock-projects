BEGIN;

INSERT INTO "list"
  ("id", "title", "position")
VALUES
  (1, 'Liste des courses', 1),
  (2, 'Todo', 2),
  (3, 'Liste des anniversaires', 3)
;


INSERT INTO "card" 
  (id, position, content, color, list_id)
VALUES
  (1, 3, 'Savon', '#FF00FF', 1),
  (2, 2, 'Chartreuse', NULL, 1),
  (3, 1, 'Concombre', '#00FF00', 1),

  (4, 1, 'Dormir', '#FF0000', 2),
  (5, 2, 'Nourrir le chat', NULL, 2),
  (6, 2, 'Devenir le meilleur dresseur', NULL, 2),

  (7, 1, 'Maman le 01/01/1970', '#0000FF', 3)
;

INSERT INTO "tag" 
  (id, name, color)
VALUES 
  (1, 'Urgent', '#FF00FF'),
  (2, 'En retard', '#000000'),
  (3, 'Eco-friendly', '#00FF00')
;

INSERT INTO "card_has_tag" 
  (card_id, tag_id) 
VALUES 
  (1, 3), 
  (1, 1), 
  (5, 1), 
  (4, 2)  
;

SELECT setval('list_id_seq', (SELECT MAX(id) from "list"));  
SELECT setval('card_id_seq', (SELECT MAX(id) from "card"));
SELECT setval('tag_id_seq', (SELECT MAX(id) from "tag"));


COMMIT;

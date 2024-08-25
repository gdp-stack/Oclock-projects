-- Insert data into projects table
INSERT INTO "projects" (name, creator)
VALUES 
    ('Project 1', 'Alice'),
    ('Project 2', 'Bob'),
    ('Project 3', 'Charlie'),
    ('Project 4', 'David'),
    ('Project 5', 'Eva'),
    ('Project 6', 'Frank'),
    ('Project 7', 'Grace'),
    ('Project 8', 'Hannah'),
    ('Project 9', 'Isaac'),
    ('Project 10', 'Jack');

-- Insert data into lists table
INSERT INTO "lists" (name, position, project_id)
VALUES
    -- Lists for Project 1
    ('Backlog 1-1', 1, 1), ('In Progress 1-1', 2, 1), ('Review 1-1', 3, 1), ('Done 1-1', 4, 1),
    -- Lists for Project 2
    ('Todo 2-1', 1, 2), ('Doing 2-1', 2, 2), ('Completed 2-1', 3, 2),
    -- Lists for Project 3
    ('Pending 3-1', 1, 3), ('Active 3-1', 2, 3), ('Resolved 3-1', 3, 3),
    -- Lists for Project 4
    ('Backlog 4-1', 1, 4), ('Development 4-1', 2, 4), ('Testing 4-1', 3, 4), ('Deployment 4-1', 4, 4),
    -- Lists for Project 5
    ('New Tasks 5-1', 1, 5), ('In Progress 5-1', 2, 5), ('Completed 5-1', 3, 5),
    -- Lists for Project 6
    ('Planning 6-1', 1, 6), ('Implementation 6-1', 2, 6), ('Verification 6-1', 3, 6),
    -- Lists for Project 7
    ('Idea 7-1', 1, 7), ('Development 7-1', 2, 7), ('Launch 7-1', 3, 7), ('Maintenance 7-1', 4, 7),
    -- Lists for Project 8
    ('New Features 8-1', 1, 8), ('Ongoing 8-1', 2, 8), ('Completed 8-1', 3, 8),
    -- Lists for Project 9
    ('Tasks 9-1', 1, 9), ('In Progress 9-1', 2, 9), ('Review 9-1', 3, 9), ('Done 9-1', 4, 9),
    -- Lists for Project 10
    ('Ideas 10-1', 1, 10), ('Working On 10-1', 2, 10), ('Finished 10-1', 3, 10);

-- Insert data into cards table
INSERT INTO "cards" (title, description, position, color, list_id)
VALUES
    -- Cards for Project 1
    ('Setup environment', 'Set up development environment', 1, 'blue', 1),
    ('Create project plan', 'Define project milestones', 2, 'green', 1),
    ('Develop feature A', 'Develop the feature A', 3, 'yellow', 2),
    ('Test feature A', 'Test the feature A', 4, 'purple', 3),
    ('Deploy feature A', 'Deploy the feature A', 5, 'red', 4),

    -- Cards for Project 2
    ('Requirement gathering', 'Gather all project requirements', 1, 'blue', 5),
    ('Design database schema', 'Design the database schema', 2, 'green', 5),
    ('Develop module X', 'Develop the module X', 3, 'yellow', 6),
    ('Test module X', 'Test the module X', 4, 'purple', 6),
    ('User acceptance testing', 'Perform user acceptance testing', 5, 'red', 7),

    -- Cards for Project 3
    ('Define project scope', 'Define the scope of the project', 1, 'blue', 8),
    ('Set up CI/CD', 'Set up continuous integration and deployment', 2, 'green', 8),
    ('Develop component Y', 'Develop the component Y', 3, 'yellow', 9),
    ('Test component Y', 'Test the component Y', 4, 'purple', 9),
    ('Release version 1.0', 'Release the first version of the project', 5, 'red', 10),

    -- Cards for Project 4
    ('Draft project charter', 'Draft the project charter document', 1, 'blue', 11),
    ('Develop core features', 'Develop the core features of the project', 2, 'green', 12),
    ('Test core features', 'Test the core features of the project', 3, 'yellow', 13),
    ('Post-release support', 'Provide support post-release', 4, 'red', 14),

    -- Cards for Project 5
    ('Initial brainstorming', 'Brainstorm initial project ideas', 1, 'blue', 15),
    ('Create wireframes', 'Create wireframes for the UI', 2, 'green', 15),
    ('Develop prototype', 'Develop the project prototype', 3, 'yellow', 16),
    ('Finalize documentation', 'Finalize all project documentation', 4, 'red', 17),

    -- Cards for Project 6
    ('Project kickoff', 'Kickoff the project with all stakeholders', 1, 'blue', 18),
    ('Develop module 1', 'Develop the first module', 2, 'green', 19),
    ('Test module 1', 'Test the first module', 3, 'yellow', 20),
    ('System testing', 'Perform system testing', 4, 'red', 21),

    -- Cards for Project 7
    ('Concept approval', 'Get approval for the project concept', 1, 'blue', 21),
    ('Develop MVP', 'Develop the minimum viable product', 2, 'green', 22),
    ('Test MVP', 'Test the MVP', 3, 'yellow', 23),
    ('Launch marketing campaign', 'Launch the marketing campaign', 4, 'red', 24),

    -- Cards for Project 8
    ('Feature planning', 'Plan the new features', 1, 'blue', 25),
    ('Develop feature 1', 'Develop the first new feature', 2, 'green', 26),
    ('Test feature 1', 'Test the first new feature', 3, 'yellow', 27),
    ('QA testing', 'Perform QA testing', 4, 'red', 28),

    -- Cards for Project 9
    ('Task prioritization', 'Prioritize the project tasks', 1, 'blue', 28),
    ('Develop task 1', 'Develop the first task', 2, 'green', 29),
    ('Test task 1', 'Test the first task', 3, 'yellow', 30),
    ('Client review', 'Review the project with the client', 4, 'red', 31),

    -- Cards for Project 10
    ('Idea validation', 'Validate the project idea', 1, 'blue', 32),
    ('Prototype development', 'Develop the project prototype', 2, 'green', 33),
    ('Test prototype', 'Test the project prototype', 3, 'yellow', 34),
    ('Final presentation', 'Present the final project', 4, 'red', 34);

-- Insert data into labels table
INSERT INTO "labels" (name, color)
VALUES
    ('Bug', 'red'), ('Feature', 'blue'), ('Enhancement', 'green'), 
    ('Documentation', 'yellow'), ('Testing', 'purple'), ('Discussion', 'orange'), 
    ('Research', 'pink'), ('Deployment', 'cyan'), ('Performance', 'brown'), 
    ('Security', 'grey');

-- Insert data into card_labels table
INSERT INTO "card_labels" (card_id, label_id)
VALUES
    -- Assign labels to cards in various projects
    (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), 
    (7, 1), (8, 2), (9, 3), (10, 4), (11, 5), (12, 6),
    (13, 1), (14, 2), (15, 3), (16, 4), (17, 5), (18, 6),
    (19, 1), (20, 2), (21, 3), (22, 4), (23, 5), (24, 6),
    (25, 1), (26, 2), (27, 3), (28, 4), (29, 5), (30, 6),
    (31, 1), (32, 2), (33, 3), (34, 4), (35, 5), (36, 6),
    (37, 1), (38, 2), (39, 3), (40, 4);

-- Update the sequences
BEGIN;

SELECT setval('projects_id_seq', (SELECT MAX(id) FROM "projects"));
SELECT setval('lists_id_seq', (SELECT MAX(id) FROM "lists"));
SELECT setval('cards_id_seq', (SELECT MAX(id) FROM "cards"));
SELECT setval('labels_id_seq', (SELECT MAX(id) FROM "labels"));

COMMIT;
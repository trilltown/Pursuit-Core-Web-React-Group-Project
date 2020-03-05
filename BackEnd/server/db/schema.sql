DROP DATABASE IF EXISTS thebox_db;
CREATE DATABASE thebox_db;

\c thebox_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS hashtags;
DROP TABLE IF EXISTS likes;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    display_name TEXT not null UNIQUE,
    profile_pic VARCHAR,
    created TIMESTAMP
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    user_post_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    post_pic VARCHAR,
    caption TEXT,
    created TIMESTAMP
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    user_comments_id INTEGER REFERENCES users(id),
    post_comment_id INTEGER REFERENCES posts(id),
    body TEXT,
    created TIMESTAMP
);

CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    user_like_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    post_like_id INTEGER REFERENCES posts(id) ON DELETE SET NULL
);

CREATE TABLE hashtags
(
    id SERIAL PRIMARY KEY,
    tag VARCHAR,
    search_post_id INT REFERENCES posts(id)
);

INSERT INTO users(first_name, last_name, display_name, profile_pic)
VALUES('Phil','Awich','phil_dafreshprince','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEhY0PZ7NmFfEFBfr9IyWjgBAqe-z8yChCEVxHvl24ajspuR0Z'),
    ('David','Maravillas','classicmanDavid','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5dhjpy7u_2LL3I1Br50Tb-7m-qFAmFMeoup7huUuuflooC-Nx'),
    ('Ohidur','Rahman','Oh_ImmaBoogie','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS-SVVy7YdUm6dbp96UMP0t-cmPBdq3oJMrv407LEHpuOFXoib'),
    ('Kevin','Brutus','BrutusBeats','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2SVuAezR73mkWrG3szf9XkhOSfzpGgktIpoow7kNWYmhmvKUL');

INSERT INTO posts(user_post_id,post_pic,caption)
VALUES(1,'this my pic','this my caption'),
    (2,'Davids pic', 'My twin is danny'),
    (3,'Oheeheedurrr', 'Skedaddle?'),
    (4,'Broodus', 'big butts do not lie');

INSERT INTO comments(user_comments_id, post_comment_id,body)
VALUES(1, 2, 'Phil commenting on David'),
    (2,3,'Davi commenting on Ohidur'),
    (3,4,'Ohidur getting back at Brutus'),
    (4, 1, 'Brutus nods at Phil');

INSERT INTO likes(user_like_id,post_like_id)
VALUES(1,2),
    (2,3),
    (3,4),
    (4,1);

INSERT INTO hashtags(tag,search_post_id)
VALUES('#EehErr',4);
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
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    user_post_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    post_pic VARCHAR,
    caption TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    user_comments_id INTEGER REFERENCES users(id),
    post_comment_id INTEGER REFERENCES posts(id),
    body TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
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
VALUES('Phil','Awich','phil_dafreshprince','https://avatars3.githubusercontent.com/u/53059632?s=460&v=4'),
    ('David','Maravillas','classicmanDavid','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5dhjpy7u_2LL3I1Br50Tb-7m-qFAmFMeoup7huUuuflooC-Nx'),
    ('Ohidur','Rahman','Oh_ImmaBoogie','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS-SVVy7YdUm6dbp96UMP0t-cmPBdq3oJMrv407LEHpuOFXoib'),
    ('Kevin','Brutus','BrutusBeats','https://pbs.twimg.com/profile_images/1163474125219946497/WKdG7GRj_400x400.jpg');

INSERT INTO posts(user_post_id,post_pic,caption)
VALUES(1,'https://snworksceo.imgix.net/ohi/b23abe80-2f2e-4e4c-9d2f-9262528acb0f.sized-1000x1000.jpg?w=1000','The Box is hot'),
    (2,'https://images-na.ssl-images-amazon.com/images/I/51sgjBsnFBL._SX425_.jpg', 'Kingdom Hearts was a classic'),
    (3,'https://images-na.ssl-images-amazon.com/images/I/91dHRGIV65L._SL1500_.jpg', 'My Dark Beautiful Twisted Fantasy'),
    (4,'https://media.pitchfork.com/photos/5d37241d1852280008e542c3/1:1/w_320/popsmoke_thewoo.png', 'Woo In Peace'),
    (1,'https://images-na.ssl-images-amazon.com/images/I/61bnnLO1WCL._SY355_.jpg', 'Sweet n Flossy'),
    (2,'https://images-na.ssl-images-amazon.com/images/I/41Fbtr2VASL._SX355_.jpg', 'Classic'),
    (3,'https://omegamusicdayton.com/Photo/418459519694', 'Astro'),
    (4,'https://images.genius.com/74c8eed9a5dc07c67dad48d9a98525b8.1000x1000x1.jpg', 'Treeshin'),
    (3,'https://i1.sndcdn.com/avatars-000220478901-054n09-t500x500.jpg', 'Freethrow 69'),
    (1, 'https://ibighit.com/bts/images/bts/discography/skool_luv_affair/album-cover.jpg', 'Kpop is life');

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
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(50),
password VARCHAR(50),
user_img TEXT
);


CREATE TABLE posts (
post_id SERIAL PRIMARY KEY,
post_img TEXT,
post TEXT
);

SELECT * FROM users;
SELECT * FROM posts;
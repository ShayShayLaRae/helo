DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
user_id SERIAL PRIMARY ,
name VARCHAR(100),
email VARCHAR(100),
user_img TEXT
);

CREATE TABLE posts (
post_id SERIAL PRIMARY KEY,
post_img TEXT,
post TEXT
);

SELECT * FROM users;
SELECT * FROM posts;
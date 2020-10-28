-- CREATE DATABASE perntodo; didn't need this because database is already created on heroku

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);
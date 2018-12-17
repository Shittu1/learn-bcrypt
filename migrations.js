DROP DATABASE IF EXISTS "node-bcrypt-sql";

CREATE DATABASE "node-bcrypt-sql";

CREATE TABLE users 
    (id SERIAL PRIMARY KEY, 
    username TEXT NOT NULL UNIQUE, 
    password TEXT NOT NULL);
CREATE DATABASE tasksdb;

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title varchar(350) UNIQUE,
    description varchar(6000)
);
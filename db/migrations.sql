CREATE DATABASE tasklist;

\c tasklist;

CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
	task VARCHAR(50),
	taskDescription VARCHAR(250),
	manager VARCHAR(100),
	deadline TIMESTAMP,
	hoursLeftToComplete FLOAT(4)
);
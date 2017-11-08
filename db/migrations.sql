CREATE DATABASE tasklist;

\c tasklist;

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	task VARCHAR(50),
	taskDescription VARCHAR(250),
	manager VARCHAR(100)
	deadline DATE,
	hoursLeftToComplete, FLOAT(4)
);
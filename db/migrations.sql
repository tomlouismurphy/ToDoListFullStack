CREATE DATABASE tasklist;

\c tasklist;

CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
	task VARCHAR(50),
	taskdescription VARCHAR(250),
	manager VARCHAR(100),
	deadline TIMESTAMP,
	hourslefttocomplete FLOAT(4)
);
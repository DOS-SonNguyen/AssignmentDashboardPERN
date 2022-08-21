CREATE DATABASE assignmentdashboard;

CREATE TABLE assignment (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    due_date TIMESTAMP NOT NULL,
    year VARCHAR(4) NOT NULL,
    month VARCHAR(4) NOT NULL,
    day VARCHAR(4) NOT NULL,
    hour VARCHAR(4) NOT NULL,
    minute VARCHAR(4) NOT NULL,
    status VARCHAR(255) NOT NULL,
    progress VARCHAR(4) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
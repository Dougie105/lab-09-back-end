DROP TABLE IF EXISTS coordinates;

CREATE TABLE coordinates (
    id SERIAL PRIMARY KEY,
    latitude NUMERIC,
    longitude NUMERIC
);

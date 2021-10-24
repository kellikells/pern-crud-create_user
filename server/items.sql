CREATE DATABASE items_db;



CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    date_created TIMESTAMP
);



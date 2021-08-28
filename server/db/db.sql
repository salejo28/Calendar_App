CREATE DATABASE calendar_app;

--table users
CREATE TABLE users(
    id INT(11) NOT NULL,
    ip_address VARCHAR(250) NOT NULL,
    fullname VARCHAR(250) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    image VARCHAR(250) NOT NULL,
    forgotten_password_code VARCHAR(191) DEFAULT NULL,
    forgotten_password_time DATETIME DEFAULT NULL,
    email_confitmation TINYINT NOT NULL DEFAULT 0,
    active TINYINT NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE users;

-- table event
CREATE TABLE events (
    id INT(11) NOT NULL,
    name VARCHAR(100) NOT NULL,
    details TEXT NOT NULL,
    date_time VARCHAR(100) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT(11),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE events
    ADD PRIMARY KEY (id);

ALTER TABLE events
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

-- table files
CREATE TABLE files(
    id INT(11) NOT NULL,
    url TEXT NOT NULL,
    user_id INT(11),
    event_id INT(11),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (event_id) REFERENCES events(id)
);

ALTER TABLE files
    ADD PRIMARY KEY (id);

ALTER TABLE files
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
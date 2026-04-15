CREATE TABLE IF NOT EXISTS author (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    birth_date DATE,
    nationality VARCHAR(30),
    email VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS book (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    isbn VARCHAR(100),
    author_id INT,
    publication_year INT,
    edition VARCHAR(30),
    language VARCHAR(30),
    FOREIGN KEY (author_id) REFERENCES author(id)
);

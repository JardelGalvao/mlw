CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
	email VARCHAR(254) NOT NULL UNIQUE,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL
);

CREATE TABLE categories(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(36),
    name VARCHAR(50) NOT NULL,
    description VARCHAR(254),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE sub_categories(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(36),
    category_id INT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(254),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE items(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(36),
    category_id INT,
    sub_category_id INT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(254),
    creation_date DATETIME NOT NULL,
    estimated_date DATETIME NULL,
    update_date DATETIME NOT NULL,
    due_date DATETIME NULL,
    value DECIMAL(10.2),
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (sub_category_id) REFERENCES sub_categories(id) ON DELETE CASCADE
);
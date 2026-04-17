import database from better-sqlite;


const db = new database('../database/pep.db')


db.prepare(`
	CRAET TABLES IF NOT EXIST users(
	id INT PRIMARY KEY,
	name VARCHAR(50),
	email VARCHAR(50),
	password VARCHAR(50),
	role VARCHAR(50)
	);`);
db.prepare(`
	CREATE TABLE IF NOT EXIST UserSession(
	user_id INT PRIMARY KEY,
	session_id INT ,

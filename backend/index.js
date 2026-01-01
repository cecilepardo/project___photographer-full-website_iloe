// Imports
require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

// Initialisation
const app = express();
app.use(express.json());

// Database connexion
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

// Connexion test
db.connect((err) => {
	if (err) {
		console.error("Connexion error:", err.message);
		return;
	}
	console.log("Success ! Node.js and MySQL are connected together.");
});

// Settings and routes
// GET all categories
app.get("/api/categories", (_req, res) => {
	const sqlQuery = "SELECT * FROM Category";

	db.query(sqlQuery, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});
// POST a new category
app.post("/api/categories", (req, res) => {
	const { name } = req.body; // Getting data from the request body
	const sqlQuery = "INSERT INTO Category (name_cat) VALUES (?)";

	db.query(sqlQuery, [name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		// Sending back the 201 status and the new ID
		res.status(201).json({
			message: "Category created !",
			id: result.insertId,
		});
	});
});

// Server launch
app.listen(3001, () => {
	console.log("Launched server on port 3001 !");
});

// server/server.js
import express from "express";
import cors from "cors";
import connection from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// GET all employees
app.get("/employees", (req, res) => {
  connection.query("SELECT * FROM employees", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// POST new employee
app.post("/employees", (req, res) => {
  const { first_name, last_name, email, birthdate, salary } = req.body;
  const sql = "INSERT INTO employees (first_name, last_name, email, birthdate, salary) VALUES (?, ?, ?, ?, ?)";
  connection.query(sql, [first_name, last_name, email, birthdate, salary], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ employee_id: result.insertId, first_name, last_name, email, birthdate, salary });
  });
});

// DELETE employee
app.delete("/employees/:id", (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM employees WHERE employee_id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Deleted successfully" });
  });
});

// UPDATE employee
app.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, birthdate, salary } = req.body;

  const sql = `
    UPDATE employees 
    SET first_name = ?, last_name = ?, email = ?, birthdate = ?, salary = ?
    WHERE employee_id = ?`;
  
  connection.query(sql, [first_name, last_name, email, birthdate, salary, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Employee updated successfully" });
  });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, TextField, Box, Typography
} from "@mui/material";

const API_URL = "http://localhost:5000/employees";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    birthdate: "",
    salary: ""
  });

  const [editingId, setEditingId] = useState(null);
  const [editEmployee, setEditEmployee] = useState({});

  // Load employees on page load
  useEffect(() => {
    axios.get(API_URL).then(res => setEmployees(res.data));
  }, []);

  // Add new employee
  const handleAdd = async () => {
    try {
      await axios.post(API_URL, newEmployee);
      const res = await axios.get(API_URL);
      setEmployees(res.data);
      setNewEmployee({ first_name: "", last_name: "", email: "", birthdate: "", salary: "" });
    } catch (err) {
      console.error("❌ Add failed:", err);
    }
  };

  // Delete employee
  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      axios.get(API_URL).then(res => setEmployees(res.data));
    });
  };

  // Update employee
  const handleUpdate = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}`, editEmployee);
      const res = await axios.get(API_URL);
      setEmployees(res.data);
      setEditingId(null);
    } catch (err) {
      console.error("❌ Update failed:", err);
    }
  };

  // Format birthdate
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(new Date(dateString));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ color: "#f8f8f8", mb: 2 }}>
        Employee Management
      </Typography>

      {/* Employee Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#cc5500" }}>
              <TableCell sx={{ color: "white" }}>First Name</TableCell>
              <TableCell sx={{ color: "white" }}>Last Name</TableCell>
              <TableCell sx={{ color: "white" }}>Email</TableCell>
              <TableCell sx={{ color: "white" }}>Birthdate</TableCell>
              <TableCell sx={{ color: "white" }}>Salary</TableCell>
              <TableCell sx={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.employee_id}>
                {editingId === emp.employee_id ? (
                  <>
                    <TableCell>
                      <TextField
                        value={editEmployee.first_name}
                        onChange={(e) => setEditEmployee({ ...editEmployee, first_name: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={editEmployee.last_name}
                        onChange={(e) => setEditEmployee({ ...editEmployee, last_name: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={editEmployee.email}
                        onChange={(e) => setEditEmployee({ ...editEmployee, email: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type="date"
                        value={editEmployee.birthdate ? editEmployee.birthdate.split("T")[0] : ""}
                        onChange={(e) => setEditEmployee({ ...editEmployee, birthdate: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={editEmployee.salary}
                        onChange={(e) => setEditEmployee({ ...editEmployee, salary: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => handleUpdate(emp.employee_id)}>Save</Button>
                      <Button onClick={() => setEditingId(null)}>Cancel</Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{emp.first_name}</TableCell>
                    <TableCell>{emp.last_name}</TableCell>
                    <TableCell>{emp.email}</TableCell>
                    <TableCell>{formatDate(emp.birthdate)}</TableCell>
                    <TableCell>${emp.salary}</TableCell>
                    <TableCell>
                      <Button onClick={() => { setEditingId(emp.employee_id); setEditEmployee(emp); }}>
                        Edit
                      </Button>
                      <Button color="error" onClick={() => handleDelete(emp.employee_id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Employee Form */}
      <Paper elevation={3} sx={{ mt: 3, p: 2, backgroundColor: "#f8f8f8" }}>
        <Typography variant="h6" gutterBottom>
          Add New Employee
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label="First Name"
            name="first_name"
            value={newEmployee.first_name}
            onChange={(e) => setNewEmployee({ ...newEmployee, first_name: e.target.value })}
          />
          <TextField
            label="Last Name"
            name="last_name"
            value={newEmployee.last_name}
            onChange={(e) => setNewEmployee({ ...newEmployee, last_name: e.target.value })}
          />
          <TextField
            label="Email"
            name="email"
            value={newEmployee.email}
            onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
          />
          <TextField
            label="Birthdate"
            name="birthdate"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={newEmployee.birthdate}
            onChange={(e) => setNewEmployee({ ...newEmployee, birthdate: e.target.value })}
          />
          <TextField
            label="Salary"
            name="salary"
            value={newEmployee.salary}
            onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
          />
          <Button variant="contained" onClick={handleAdd}>
            Add
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default EmployeeManagement;

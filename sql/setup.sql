-- schema
CREATE TABLE employees (
  employee_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  birthdate DATE,
  salary DECIMAL(10,2)
);

-- seed data
INSERT INTO employees (first_name, last_name, email, birthdate, salary) VALUES
('John', 'Doe', 'john.doe@example.com', '1980-04-01', 50000),
('Jane', 'Smith', 'jane.smith@example.com', '1990-07-15', 60000),
('Bob', 'Builder', 'bob.builder@example.com', '1975-12-25', 55000);

SELECT * FROM employees;

CREATE TABLE IF NOT EXISTS alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    apellidos VARCHAR(200), 
    nombres VARCHAR(200), 
    dni INT(11), 
    nota INT(11) NOT NULL
);

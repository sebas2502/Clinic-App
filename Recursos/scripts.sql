use clinica;

create table doctor(
	id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    enrollment INT NOT NULL,
    specialty VARCHAR(50) NOT NULL,

	PRIMARY KEY(id)
    
);

INSERT INTO doctor(name,lastname,enrollment,specialty)VALUES
('Arturo','Gonzalez',123456,'Cardiologo');

INSERT INTO doctor(name,lastname,enrollment,specialty)VALUES
('Nicolas','Martinez',123457,'Clinico');

INSERT INTO doctor(name,lastname,enrollment,specialty)VALUES
('Andres','Gimenez',124456,'Traumatologo');

INSERT INTO doctor(name,lastname,enrollment,specialty)VALUES
('Mariano','Fonseca',100456,'Dermatologo');

INSERT INTO doctor(name,lastname,enrollment,specialty)VALUES
('Jose','Juarez',813456,'Pediatra');

INSERT INTO doctor(name,lastname,enrollment,specialty)VALUES
('Marina','Gomez',171456,'Diabetologa');

INSERT INTO doctor(name,lastname,enrollment,specialty)VALUES
('Carmen','Fernandez',128856,'Otorrinolaringologa');

INSERT INTO doctor(name,lastname,enrollment,specialty)VALUES
('Maria','Gomez',121056,'Nutricionista');

INSERT INTO doctor(name,lastname,enrollment,specialty)VALUES
('Lucia','Perez',149456,'Nutricionista');

INSERT INTO doctor(name,lastname,enrollment,specialty)VALUES
('Macarena','Candia',582677,'Pediatra');

SELECT * FROM doctor;



import Alumno from "./Alumno.js";

class NotasFinales extends Alumno {
    constructor(edad, fecha_nacimiento, dni, nota1, nota2, libre, condicion, mayor_edad) {
        super(edad, fecha_nacimiento, dni, nota1, nota2, libre);
        this.condicion = condicion;
        this.mayorEdad = mayor_edad;
    }
}

export default NotasFinales;
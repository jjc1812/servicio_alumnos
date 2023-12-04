import moment from "moment";

class AlumnoSave {
    constructor (edad, fecha_nacimiento, dni, nota1, nota2, libre) {
        this.edad = edad;
        this.fechaNacimiento = fecha_nacimiento;
        this.dni = dni;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.libre = libre;
    }

    parseDate() {
        this.fechaNacimiento = moment(this.fechaNacimiento).format("YYYY-MM-DD");
    }

    parseLibre() {
        if(this.libre)
            this.libre = 1;
        else
            this.libre = 0;
    }
}

export default AlumnoSave;
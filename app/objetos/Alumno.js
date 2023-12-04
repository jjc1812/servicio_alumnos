class Alumno {
    constructor (edad, fecha_nacimiento, dni, nota1, nota2, libre) {
        this.edad = edad;
        this.fechaNacimiento = fecha_nacimiento;
        this.dni = dni;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.libre = libre;
    }

    mayor() {
        if(this.edad > 17) return true;
        else return false;
    }

    condicion() {
        if(this.libre) {
            return "libre";
        } else {
            const notaFinal = (this.nota1 + this.nota2)/2;
            if(notaFinal > 6){
                return "Promocion";
            } else if (notaFinal >= 4) {
                return "Aprobado";
            } else {
                return "Reprobado";
            }
        }
    };
    
    getLibre(){
        return this.libre;
    };

    setLibre(newLibre) {
        this.libre = newLibre;
    };
}

export default Alumno;
import moment from "moment";
import AlumnoDTO from "../dto/AlumnoDTO.js";
import NotasFinales from "../objetos/NotasFinales.js";
import AlumnoMapping from "../mapping/AlumnoMapping.js";

class AlumnoService {
    getAlumnos(){
        try {
            const alumnoDTO = new AlumnoDTO();
            const alumnos = alumnoDTO.getAllAlumno();
            let allAlumnos = [];
            alumnos.forEach(elemento => {
                if(elemento.getLibre() == 1)
                    elemento.setLibre(true)
                else
                    elemento.setLibre(false)
                allAlumnos.push(this.notaFinal(elemento))
            });
            return allAlumnos;
        } catch (error) {
            console.error(error);
        }
    }

    postAlumno(alumno) {
        if(!this.validaEdad(alumno.edad))
            return "ERROR_EDAD";
        if(!this.validaDNI(alumno.dni))
            return "ERROR_DNI";
        
        try {
            const alumnoMapping = new AlumnoMapping();
            const alumnoSave = alumnoMapping.convertAlumnoSave(alumno);
            const alumnoDTO = new AlumnoDTO();
            alumnoDTO.postAlumno(alumnoSave);

            return "OK";
        } catch (error) {
            return error;
        }
    }
    
    validaEdad(edad) {
        if(edad < 13) {
            console.error("No tiene edad suficiente para ser evaluado.");
            return false;
        }
        return true;
    }

    validaDNI(dni) {
        if(dni < 1000000) {
            console.error("El numero de dni tiene que ser mayor a 1000000.");
            return false;
        }
        return true;
    }
    
    notaFinal(alumno) {
        const nota_final = new NotasFinales(
            alumno.edad,
            moment(alumno.fechaNacimiento).format("DD/MM/YYYY"),
            alumno.dni,
            alumno.nota1,
            alumno.nota2,
            alumno.libre,
            alumno.condicion(),
            alumno.mayor()
        )
        return nota_final;
    }
}

export default AlumnoService;
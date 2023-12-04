import Alumno from "../objetos/Alumno.js";
import moment from "moment";
import AlumnoSave from "../objetos/AlumnoSave.js";

class AlumnoMapping {
    convertAlumno(alumnoBase){
        const alumno = new Alumno(alumnoBase.edad, 
            moment(alumnoBase.fecha_nacimiento).format(),
            alumnoBase.dni,
            alumnoBase.nota1,
            alumnoBase.nota2,
            alumnoBase.libre
            )
        return alumno;
    }

    convertAlumnoSave(alumno){
        const alumnoSave = new AlumnoSave(alumno.edad, alumno.fecha_nacimiento, alumno.dni, alumno.nota1, alumno.nota2, alumno.libre);
        alumnoSave.parseDate();
        alumnoSave.parseLibre();
        return alumnoSave;
    }
}

export default AlumnoMapping;
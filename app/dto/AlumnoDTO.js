import AlumnoMapping from "../mapping/AlumnoMapping.js";
import {LISTA_ALUMNOS} from "../model/ListaAlumnos.js"

class AlumnoDTO {

    getAllAlumno() {
        const alumnoMapping = new AlumnoMapping();
        try {

            const results = LISTA_ALUMNOS;
            
            const alumnoMap = results.map(elemento => alumnoMapping.convertAlumno(elemento));
            return alumnoMap;
        } catch (error) {
            return error;
        }
    };

    postAlumno(alumno) {
      try {
        console.log(alumno);
        const result = "OK"
        return result;
      } catch (error) {
        return error;
      }
    };
}

export default AlumnoDTO
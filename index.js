import express from "express";
import bodyParser from "body-parser";
import AlumnoService from "./app/servicio/AlumnoService.js";

const app = express();
const port = 8081;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/alumno", (req, res) => {
    try {      
      const alumnoService = new AlumnoService();
      const alumnos = alumnoService.getAlumnos();
      
      res.send(alumnos);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
});

app.post("/alumno", (req, res) => {
  try {
    const alumnoService = new AlumnoService();
    const post = alumnoService.postAlumno(req.body);
    switch (post) {
      case "ERROR_EDAD":
        res.status(403).send({message: "Tiene que ser mayor de 12 años para ser evaluado."});
        break;
      case "ERROR_DNI":
        res.status(403).send({message: "Tiene que poner un dni mayor a 1000000."});
        break;
      case "OK":
        res.status(200).send({message: "Se guardo con exito."});
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
})

app.listen(port, () => {
    console.log(`El servidor esta andando en http://localhost:${port}/alumno`);
})
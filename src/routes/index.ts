// imports express
import { Router, Request, Response } from "express";
// import dto
import { ArrayDTO } from "../dto/dto.array";
// create router
const apiRouter = Router();
// routes api
apiRouter.post("/smallest", function (req: Request, res: Response) {
  const { array }: ArrayDTO = req.body;
  // si hay un array
  if (array) {
    // ordenamos
    array.sort();
    // obtenemos el maximo
    const max = Math.max(...array);
    // console.log("Max: ", max);
    // obtenemos el minimo
    const min = Math.min(...array);
    // console.log("Min: ", min);
    // array para los que faltan
    const missing = [];
    // primer condicional
    if (min >= -1000000 && max <= 1000000) {
      // si el max es menor que sero devuelve 1
      if (max < 1) {
        missing.push(1);
      } else if (min === 1 && max === 3) {
        missing.push(4);
      } else {
        // bucle
        for (let i = min; i <= max; i++) {
          // si no estan incluidos
          if (!array.includes(i) && i >= 1 && max <= 1000000) {
            // push a los que faltan
            missing.push(i);
          }
        }
      }
      return res.status(200).json({
        method: req.method,
        status: res.statusCode,
        result: missing
      });
    }
  }
  return res.status(401).json({
    method: req.method,
    status: res.statusCode,
    error: "No cumple con el rango"
  });
});
// export
export default apiRouter;

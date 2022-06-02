// imports express
import { Router, Request, Response } from "express";
// prisma
import { PrismaClient } from "@prisma/client";
// import dto
import { ArrayDTO } from "../dto/dto.array";
// import interface
import { IArrays } from "../interface/interface.array";
// ini prisma
const prisma = new PrismaClient();
// create router
const apiRouter = Router();
// routes api
apiRouter.post("/smallest", async function (req: Request, res: Response) {
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
    // obtenemos el minimo
    let minNum = 0;
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
            //console.log("array nums: ", missing);
            minNum = Math.min(...missing);
          }
        }
      }
      await prisma.arrays.create({
        data: {
          min: min,
          max: max,
          numbers: array,
          missing: missing,
          minNum: minNum
        }
      });
      return res.status(200).json({
        method: req.method,
        status: res.statusCode,
        resultArray: missing,
        result: minNum
      });
    }
  }
  return res.status(401).json({
    method: req.method,
    status: res.statusCode,
    error: "No cumple con el rango"
  });
});
// stats
apiRouter.get("/stats", async function (req: Request, res: Response) {
  // const number = req.query.isnumber;
  const { isnumber }: IArrays = req.query;
  if (isnumber) {
    // count todos
    const resultTot = await prisma.arrays.count();
    // console.log("all: ", resultTot);
    // count todos por el numero
    const resultCount = await prisma.arrays.count({
      where: {
        minNum: Number(isnumber)
      }
    });
    // console.log("count: ", resultCount);
    // mostrar lo que hay en Bd
    const result = await prisma.arrays.findMany({
      where: {
        minNum: Number(isnumber)
      }
    });
    // calculamos el ratio
    const ratio = (Number(resultCount) / Number(resultTot)).toFixed(1);
    // console.log("ratio: ", ratio);
    // return de la data
    return res.status(200).json({
      method: req.method,
      status: res.statusCode,
      total: resultTot,
      count: resultCount,
      ratio: ratio,
      result: result
    });
  }
  return res.status(401).json({
    method: req.method,
    status: res.statusCode,
    error: "No chay numero que buscar"
  });
});
// export
export default apiRouter;

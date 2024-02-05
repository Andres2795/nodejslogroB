import { getempleadoModel, createEmpleado, filtrar,calcular, ordenarFecha, buscar,deleteUser } from "../controller/empleadoController.js";
import { Router } from "express";




const router = Router();

router.get('/', getempleadoModel);
router.post('/save', createEmpleado);
router.get('/filtrar',filtrar);
router.get('/ordenar',ordenarFecha);
router.get('/calcular',calcular);
router.post('/buscar',buscar);
router.delete('/delete/:id',deleteUser);

export const  routerEmpleado = router;
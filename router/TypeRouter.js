
import { Router } from "express";
import { gettype1,createtype } from "../controller/typeControllers.js";


const router = Router();

router.get('/type', gettype1);
router.post('/save/type', createtype);
export const  routerType = router;
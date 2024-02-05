import { typel } from '../model/TypeModel.js';
import { empleado } from '../model/empleadoModel.js'

 export const gettype1 = async(req, res) =>{

     const empleados = await empleado.findAll();
     const tipo = await typel.findAll();
   
     res.render('type',{empleados:empleados,tipos:tipo}); 
 }
 
  export const getempleadoModel= async (req, res)=>{
 try {
     const tipo = await typel.findAll();
     res.render('type',{tipos:tipo}); 
 
 } catch (er) {
     res.render('type',{error:er.message});
     
 }
 }

 export const createtype = async (req, res) => {
    try {
        
        const { empleadoId, nombre, horasEmpleadas} = req.body;
        if (!(empleadoId || nombre || horasEmpleadas )) {
            res.render('type', {mensaje:"existen campos vacios"});
        }
        await typel.create({
            nombre,
            horasEmpleadas,
            empleadoId
        });
        res.redirect('/type')
      } catch (error) {
        res.render('type', {mensaje:error.message });
      }
};

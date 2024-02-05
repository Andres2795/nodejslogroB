import { where } from 'sequelize';
import { empleado } from '../model/empleadoModel.js';


export const getempleadoModel = async(req, res) =>{
    const user = await empleado.findAll();
    res.render('index',{usuarios:user}); 

}

 export const gettype1= async (req, res)=>{
try {
    const user = await empleado.findAll();
    res.render('index',{usuario:user}); 

} catch (er) {
    res.render('index',{error:er.message});
    
}
}

export const createEmpleado = async (req, res) => {
    try {
        
        const { nombre, datesingle,salario,horasTrabajadas,depaCarrespondiente} = req.body;
        if (!(nombre || datesingle || salario || horasTrabajadas|| depaCarrespondiente)) {
            res.render('index', {mensaje:"existen campos vacios"});
        }
        const fechaDeContrato = datesingle
        await empleado.create({
            nombre,
            fechaDeContrato:datesingle,
            salario,
            horasTrabajadas,
            depaCarrespondiente,
               
        });
        res.redirect("/");
      } catch (error) {
        res.render('index', {mensaje:error.message });
      }
};

export const filtrar = async (req, res) => {

  const departamentos = await empleado.findAll();
  res.render('filtrar',{departamentos})
    
  };
  export const ordenarFecha = async (req, res) => {
    try {
      // Realizar la consulta utilizando Sequelize
      const departamentos = await empleado.findAll({
        order: [["fechaDeContrato", "desc"]], // Ordenar por fecha de contratación
      });
      res.render('ordenar', {departamentos})
    } catch (error) {
        res.render('ordenar', {mensaje:error.message });
      
    }
  };
  export const buscar=async(req, res)=>{
      const {depaCarrespondiente} = req.body
      const  departamentosfiltrados =await empleado.findAll({where:{depaCarrespondiente:depaCarrespondiente}})
      const departamentos = await empleado.findAll();
  res.render('filtrar',{departamentos, departamentosfiltrados})
  }
  export const calcular = async (req, res) => {
    try {
        
      const user = await empleado.findAll();
      const totalSalarios = await empleado.sum('salario');
      res.render("calcular", { usuario: user,totalSalarios:totalSalarios, });
    } catch (er) {
      res.render("calcular", { error: er.message });
    }
  };
  export const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await empleado.findByPk(userId); 
      await user.destroy();
      res.redirect('/');
    } catch (error) {
        res.render('index',{error:error.message});
    }
  };
 
  
import {DataTypes} from "sequelize";
import { sequelize } from '../db/conexion.js';
import {empleado} from '../model/empleadoModel.js'
export const typel = sequelize.define('type', {
    // Los atributos del modelo se definen aquí
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING, 
      allowNull: false 
    },
    horasEmpleadas: {
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    empleadoId: {
      type: DataTypes.INTEGER,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
  }, {
    // Para desactivar los campos createdAt y updatedAt que sequelize genera por defecto para cada modelo lo desactivamos de la siguiente línea de código
    timestamps: false
  });
  
 empleado.hasMany(typel,{ as:'tipo', forekey:"id"});



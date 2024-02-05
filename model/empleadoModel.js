import {DataTypes} from "sequelize";
import { sequelize } from '../db/conexion.js';

export const empleado = sequelize.define('empleados', {
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
    fechaDeContrato: {
      type: DataTypes.DATE
    },
    salario: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    horasTrabajadas: {
        type: DataTypes.INTEGER,
        allowNull: false 
      },
      depaCarrespondiente: {
        type: DataTypes.STRING,
        allowNull: false 
      },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
  }, {
    // Para desactivar los campos createdAt y updatedAt que sequelize genera por defecto para cada modelo lo desactivamos de la siguiente línea de código
    timestamps: false
  });
 
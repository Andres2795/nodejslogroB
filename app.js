
import  express from 'express';
import hbs from'hbs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sequelize } from './db/conexion.js';
import { routerEmpleado } from './router/empleadoRouter.js'
import { routerType } from './router/TypeRouter.js';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.use(methodOverride('_method'));
//ruta estatica
app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use('/', routerEmpleado)
app.use('/', routerType)

  const conexion= async () =>{
      try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });

        console.log('Connection has been established successfully.');
        app.listen(port, () => {
          console.log(`Servidor corriendo en el puerto ${port}`)
        })
    } catch (error) {
        console.error(`Error ${error}`);
    }
  }
  conexion();
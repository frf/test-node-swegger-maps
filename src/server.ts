import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import env from './configs/env';
import "reflect-metadata";
import swaggerUi from 'swagger-ui-express';
import configSwegger from './configs/swagger';


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(configSwegger.config));

app.listen(process.env.PORT || 3000);

console.log("Express application is up and running on port " + env.PORT);

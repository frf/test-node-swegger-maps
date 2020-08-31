import express, { Request, Response } from 'express';
import MapController from '../controllers/MapController';
import SpendingController from '../controllers/SpendingController';

const routes = express.Router();

const mapController = new MapController();
const spendingController = new SpendingController();

routes.get('/markers', mapController.index);
routes.get('/spendings', spendingController.index);
routes.get('/spendings/show', spendingController.show);

export default routes;

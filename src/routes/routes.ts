import express, { Request, Response } from 'express';
import MapController from '../controllers/MapController';

const routes = express.Router();

const mapController = new MapController();

routes.get('/markers', mapController.index);

export default routes;

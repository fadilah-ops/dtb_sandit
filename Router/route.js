import express from 'express';
import { getdata,getbyid,getbytype } from '../Controler/controler.js';

let Route = express.Router();

Route.get('/data',getdata)
Route.get('/data/:id',getbyid)
Route.get('/data/type/:type',getbytype)

export default Route;
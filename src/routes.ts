import { Router } from 'express';
import CustomerController from './controller/CustomerController';

const route = Router();

route.post("/create-costumer", CustomerController.CreateCustomer)

export default route
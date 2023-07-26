import { Router } from 'express';
import CustomerController from './controller/CustomerController';

const route = Router();

route.post("/create-costumer", CustomerController.CreateNewCustomer);
route.get("/all-customers", CustomerController.getCustomers);

export default route
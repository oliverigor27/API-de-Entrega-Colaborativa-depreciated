import { Request, Response } from "express";
import CustomerModel from "../model/CustomerModel";


class CustomerController {

    async CreateNewCustomer(req: Request, res: Response) {
        try {

            const { customer_name,
                customer_email,
                customer_password,
                customer_adress,
                customer_city,
                customer_state } = req.body;
    
            await CustomerModel.createCustomer( customer_name,
                customer_email,
                customer_password,
                customer_adress,
                customer_city,
                customer_state );
    
            res.status(200).json({
                message: "User create into database!",
            });
        } catch (error) {
            res.status(500).json({
                message: "Error when tried to create a new customer in database"
            })
            console.error(error);
        }
    }

    async getCustomers() {
        return await CustomerModel.getCustomer();
    }
}

export default new CustomerController();
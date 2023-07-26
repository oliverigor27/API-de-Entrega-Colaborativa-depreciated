import { Request, Response } from "express";
import CustomerModel from "../model/CustomerModel";


class CustomerController {
    private customerModel = CustomerModel;

    async CreateCustomer(req: Request, res: Response) {
        try {
            const { customer_name,
                customer_adress,
                customer_city,
                customer_email,
                customer_password,
                customer_state } = req.body;
    
            this.customerModel.createCustomer( customer_name,
                customer_adress,
                customer_city,
                customer_email,
                customer_password,
                customer_state );
    
            res.status(200).json({
                message: "User create into database!"
            });
        } catch (error) {
            res.json({
                message: "Error when tried to create a new customer in database"
            })
            console.error(error);
        }
    }
}

export default new CustomerController();
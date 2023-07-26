import express from 'express';
import prisma from '../services/prisma';


class CustomerModel {
    private express = express();
    private prisma = prisma;

    async createCustomer(customer_name: string, customer_adress: string, customer_city: string, customer_email: string, customer_password: string, customer_state: string) {

        const customers = await this.prisma.customer.create({
            data: {
                customer_name,
                customer_adress,
                customer_city,
                customer_email,
                customer_password,
                customer_state
            }
        });

        return customers;
    }


}

export default new CustomerModel();
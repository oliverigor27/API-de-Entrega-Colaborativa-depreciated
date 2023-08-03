import { prismaCliente } from '../../services/prisma';

class CustomerModel {

    async createCustomer(customer_name: string, customer_email: string, customer_password: string,  customer_adress: string, customer_city: string, customer_state: string) {

        

        const customers = await prismaCliente.customer.create({
            data: {
                customer_name,
                customer_email,
                customer_password,
                customer_adress,
                customer_city,
                customer_state
            }
        });

        return customers
    }

    async getCustomer() {
        return await prismaCliente.customer.findMany;
    }
}

export default new CustomerModel();
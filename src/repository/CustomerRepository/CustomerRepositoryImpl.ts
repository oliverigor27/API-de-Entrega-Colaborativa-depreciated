import { CustomerModel } from "../../model/CustomerModel/CustomerModel";
import { CustomerRepository } from './CustomerRepository'

export class CustomerRepositoryImpl implements CustomerRepository {
    getCustomers(data: CustomerModel): CustomerModel {
        throw new Error("Method not implemented.");
    }
    getSingleCustomer<T>(data: CustomerModel): T {
        throw new Error("Method not implemented.");
    }
    createCustomer(data: CustomerModel): CustomerModel {
        throw new Error("Method not implemented.");
    }
    updateCustomer(data: CustomerModel): {} {
        throw new Error("Method not implemented.");
    }
    deleteCustomer(data: CustomerModel): number {
        throw new Error("Method not implemented.");
    }
}
import { CustomerModel } from "../../model/CustomerModel/CustomerModel";

export interface CustomerRepository {
    getCustomers(data: CustomerModel): CustomerModel;
    getSingleCustomer<T>(data: CustomerModel): T;
    createCustomer(data: CustomerModel): CustomerModel;
    updateCustomer(data: CustomerModel): {};
    deleteCustomer(data: CustomerModel): number;
}
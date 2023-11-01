import { CustomerModel } from "../../model/CustomerModel/CustomerModel";

export interface CustomerRepository {
    getCustomers(data: CustomerModel): CustomerModel;
    getSingleCustomer<T>(data: CustomerModel): T;
    createCustomer(data: CustomerModel): CustomerModel;
    updateCustomer<T>(data: CustomerModel): T;
    deleteCustomer<T>(data: CustomerModel): T;
}
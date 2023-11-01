export class CustomerModel {
    customer_name: string;
    customer_email: string;
    customer_password: string;
    customer_address: string;
    customer_city: string;
    customer_state: string;

    constructor(
        name: string,
        email: string,
        password: string,
        address: string,
        city: string,
        state: string,
    ) {

        this.customer_name = name;
        this.customer_email = email;
        this.customer_password = password;
        this.customer_address = address;
        this.customer_city = city;
        this.customer_state = state;

    }

};
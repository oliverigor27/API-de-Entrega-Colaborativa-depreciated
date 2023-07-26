import express from 'express';
import prisma from '../services/prisma';


class CustomerModel {
    private express = express();
    private prisma = prisma;

}

export default new CustomerModel();
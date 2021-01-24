import Customers from '../models/customer.js'


export const getCustomers = async (req,res) => {
    try {
        const customers = await Customers.find();

        res.status(200).json(customers);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createCustomers = async (req,res) => {
    const customer = req.body;

    const newCustomer = new Customers(customer);
    
    try {

        await newCustomer.save();
        res.status(201).json(newCustomer);

    } catch (error) {
        res.status(409).json({message: error.message});
    }
}
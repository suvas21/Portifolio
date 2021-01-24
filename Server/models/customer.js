import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
})

const customer = mongoose.model('customer', customerSchema);

export default customer;
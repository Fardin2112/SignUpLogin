const mongoose = require("mongoose")

const CustomerSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const CustomerModel = mongoose.model("Customer_detail",CustomerSchema)
module.exports = CustomerModel
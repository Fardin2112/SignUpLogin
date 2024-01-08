require("dotenv").config();

const mongoose = require('mongoose')
const express = require ('express');
const cors = require("cors")
const CustomerModel = require("./models/Customer")

const app = express();
app.use(express.json());
app.use(cors());


mongoose
        .connect(process.env.MONGO_URI)

          app.post('/login',(req,res) => {
            const {email,password} = req.body;
            CustomerModel.findOne({email:email})
            .then(user=>{
              if(user){
                if(user.password === password){
                  res.json("Success")
                } else {
                  res.json(" The password is incorrect")
                }
              } else {
                res.json("Invalid Email")
              }
            })
            // .catch("User not found")
          })
          

          app.post('/register', (req,res) => {
            CustomerModel.create(req.body)
            .then(Customer => res.json(Customer))
            .catch(err => res.json(err))
          })
          app.listen(3001,() =>{
            console.log(
              "Connected to DB and server is running at",
              process.env.PORT
            )
          })
       
        

        
          
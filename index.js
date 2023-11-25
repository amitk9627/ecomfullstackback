const app= require('./app.js');
const mongoose=require('mongoose');
require('dotenv').config();
const port=process.env.port || 3008;

const connectDB= async ()=>{
    return mongoose.connect("mongodb://localhost:27017/ecommerce");
}
connectDB().then(()=>console.log("db Connected")).catch(()=>console.log('db disconnected'));

app.listen(port,()=>{
    console.log('server listening on '+ port)
})
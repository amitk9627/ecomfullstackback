const app= require('./app.js');
const mongoose=require('mongoose');
require('dotenv').config();
const port=process.env.port || 3008;

const connectDB= async ()=>{
    await mongoose.connect(process.env.mongoDBurl);
}
connectDB().then(()=>console.log("db Connected")).catch((e)=>console.log('db disconnected',e));

app.listen(port,()=>{
    console.log('server listening on '+ port)
})
const express =  require ('express');
const dotenv = require ('dotenv');
const cors = require ('cors');

dotenv.config({path:'../src/env/.env'});

const conn = require  ('./src/db/db.js');

const doctorsRoutes = require ('./src/routes/doctorsRoutes.js');

const app = express();




app.use(cors());

app.use(express.json());

app.use('/doctors',doctorsRoutes);







app.get('/',(req,res)=>{
   
   res.send("Root of the project");

});










app.listen(8000,()=>{
    console.log("App running on port 8000");
});


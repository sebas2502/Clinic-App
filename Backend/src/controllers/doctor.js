const conn = require ("../db/db.js");

/* Metodos para el CRUD */



   
module.exports =  {
    
    getDoctors : (req,res)=>{
       
        conn.query("SELECT * FROM doctor",(err,results)=>{
            if(err){
                console.log(err);
            }else{
                res.send(results);
            }
        });

        },

        getDoctor : (req,res)=>{

            const {id} = req.params;

            conn.query("SELECT * FROM doctor WHERE id = ?",[id],(err,result)=>{
                if(err){
                    res.send("The record does not exist");
                }else{
                    
                    res.send(result);
                }
            });

        },

        deleteDoctor : (req,res)=>{
            const id = req.params.id;
            console.log(id);
            conn.query("DELETE FROM doctor WHERE id = ?",[id],(err,result)=>{
                if(err){
                    console.log("Error when trying to delete the record");
                }else{
                    res.send("Record deleted successfully");
                }
            });
        },

        insertDoctor : (req,res)=>{
            
            let name = req.body.name;
            let lastname = req.body.lastname;
            let enrollment = req.body.enrollment;
            let specialty = req.body.specialty;

            

            const newDoctor = {
                name : name,
                lastname : lastname,
                enrollment : enrollment,
                specialty : specialty
            }

            console.log(newDoctor);

            conn.query("INSERT INTO doctor set ?",newDoctor,(err,result)=>{
                if(err){
                    res.send("error when insert the new register");
                    console.log(err);
                }else{
                    
                    res.send("Register inserted successfully");
                }
            });
        },

        updateDoctor : (req,res)=>{
          
            const id = req.params.id;

            let doctorUpdated = {
                name: req.body.name,
                lastname : req.body.lastname,
                enrollment : req.body.enrollment,
                specialty : req.body.specialty
            }

            conn.query("UPDATE doctor set ? WHERE id = ?",[doctorUpdated,id],(err,results)=>{
                if(err){
                    res.send("Update error");
                }else{
                    res.send("Record updated successfully");
                }
            });
        }
    
               
        
        
        
    }





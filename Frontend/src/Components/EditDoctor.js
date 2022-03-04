import React , {useState , useEffect} from 'react';
import { useParams } from 'react-router';
import {useNavigate } from 'react-router-dom';






export const EditDoctor = () => {
    const navigate = useNavigate();
    const [doctorEdited, setDoctorEdited] = useState({
        name : "",
        lastname : "",
        enrollment : "",
        specialty : ""
    });
    
    const {id} = useParams();
    




    useEffect(() => {
        
        fetch('http://localhost:8000/doctors/'+id)
            .then((response)=>{
                
                return response.json()
            })
            
            .then((doctor)=>{
                console.log(doctor[0])
                setDoctorEdited(doctor[0])
            })

          
           
    },[]);   

    const processEdit = (e)=>{
        setDoctorEdited({
            ...doctorEdited,
            [e.target.name] : e.target.value
        })
    }



    const handleSubmit = (e)=>{
       
        
        //validacion de datos

        let {id , name , lastname , enrollment , specialty} = doctorEdited;

        try {
            enrollment =  parseInt(enrollment);
        } catch (error) {
            console.log(error);
            alert("Entrada no válida");
        }

        if(name === '' ||  lastname === ''  || enrollment < 0  ||  specialty === ''){
               alert("Todos los campos deben ser correctos y obligatorios"); 
                return
            }else{

                const requestInit = {
                    method : 'PUT',
                    headers : {
                        'Content-Type' : 'application/json'   //Tipo de contenido que vamos a enviar
                    },
                    body : JSON.stringify(doctorEdited)  //Mandamos un JSON para el POST
                }

                fetch('http://localhost:8000/doctors/edit/'+id , requestInit)
                .then((response)=>{
                  return response.text()
                })
                
                .then((response)=>{
                    console.log("Registro actualizado");
                })  

                setDoctorEdited({    //Reiniciamos el state de addDoctor
                    name : '',
                    lastname : '',
                    enrollment : '',
                    specialty : ''
                });

                navigate('/')

        }
        

    }


    return(
        <>
        
        <div className='d-flex justify-content-center'>
                   <div className="card col-4">
                       <div className="card-header bg-success text-white fs-4 text-center">
                           Edit record
                       </div>
                       <div className="card-body text-start">
                       <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-start">Name</label>
                                <input type="text" name="name" className="form-control" id="name" aria-describedby="name" defaultValue={doctorEdited.name} onChange={processEdit} />
                                
                            </div>
                            <div className="mb-3 d-flex flex-column justify-content-start">
                                <label htmlFor="lastname" className="form-label">Lastname</label>
                                <input type="text" className="form-control" name="lastname" id="lastname"  defaultValue={doctorEdited.lastname} onChange={processEdit} />
                            </div>

                            <div className="mb-3 d-flex flex-column justify-content-start">
                                <label htmlFor="enrollment" className="form-label">Enrollment</label>
                                <input type="text" className="form-control" name="enrollment" id="enrollment" defaultValue={doctorEdited.enrollment} onChange={processEdit} />
                            </div>
                            

                            <div className="mb-3 d-flex flex-column justify-content-start">
                                <label htmlFor="specialty" className="form-label">Specialty</label>
                                <input type="text" className="form-control" name="specialty" id="specialty"  defaultValue={doctorEdited.specialty} onChange={processEdit} />
                            </div>
                            <button type="submit" className="btn btn-success">Add</button>
                     </form>
                       </div>
                   </div>
                </div>
        </>
    )
}
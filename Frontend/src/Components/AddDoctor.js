import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';



export const AddDoctor = ()=>{

    const navigate = useNavigate();

    const [addDoctor, setAddDoctor] = useState({
        name : '',
        lastname : '',
        enrollment : '',
        specialty : '' 
    });

    const setDoctor = e => {
        setAddDoctor({
            ...addDoctor,
            [e.target.name] : e.target.value
        })
    }
    
    
    
    //procedure for save record of doctor
    const handleSubmit = (e)=>{
       
        
        //validacion de datos

        let {name , lastname , enrollment , specialty} = addDoctor;

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
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'   //Tipo de contenido que vamos a enviar
                    },
                    body : JSON.stringify(addDoctor)  //Mandamos un JSON para el POST
                }

                fetch('http://localhost:8000/doctors' , requestInit)
                .then((response)=>{
                  return response.text()
                })
                
                .then((response)=>{
                    console.log(response);
                })  

                setAddDoctor({    //Reiniciamos el state de addDoctor
                    name : '',
                    lastname : '',
                    enrollment : '',
                    specialty : ''
                });

                navigate('/');

        }
        

    }

    return(
                <div className='d-flex justify-content-center'>
                   <div className="card col-4">
                       <div className="card-header bg-success text-white fs-4">
                           Add to new doctor
                       </div>
                       <div className="card-body text-start">
                       <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-start">Name</label>
                                <input type="text" name="name" className="form-control" id="name" aria-describedby="name"  onChange={setDoctor} />
                                
                            </div>
                            <div className="mb-3 d-flex flex-column justify-content-start">
                                <label htmlFor="lastname" className="form-label">Lastname</label>
                                <input type="text" className="form-control" name="lastname" id="lastname"  onChange={setDoctor} />
                            </div>

                            <div className="mb-3 d-flex flex-column justify-content-start">
                                <label htmlFor="enrollment" className="form-label">Enrollment</label>
                                <input type="text" className="form-control" name="enrollment" id="enrollment" onChange={setDoctor} />
                            </div>
                            

                            <div className="mb-3 d-flex flex-column justify-content-start">
                                <label htmlFor="specialty" className="form-label">Specialty</label>
                                <input type="text" className="form-control" name="specialty" id="specialty" onChange={setDoctor} />
                            </div>
                            <button type="submit" className="btn btn-success">Add</button>
                     </form>
                       </div>
                   </div>
                </div>
    )
}


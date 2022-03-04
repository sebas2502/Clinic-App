import { faPencilSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { EditDoctor } from './EditDoctor';


 



export const ShowDoctors = ()=>{
    const [doctors, setDoctors] = useState([]);
    const [tableUpdated, setTableUpdated] = useState(false);

    const navigate = useNavigate();   // El use navigate se debe llamar dentro de un componente

    useEffect(() => {
        
        fetch('http://localhost:8000/doctors')
            .then((response)=>{
                return response.json()
            })
            
            .then((doctors)=>{
                setDoctors(doctors)
            })

            setTableUpdated(false);
    },[tableUpdated]);   
    
    
    const deleteDoctors = (id) => {
     
     const option = window.confirm("¿Esta seguro que desea eliminar este registro?");

        if(option){
          const requestInit = {
            method : "DELETE",
    
          }
    
          fetch('http://localhost:8000/doctors/delete/'+id , requestInit)
                .then((response)=>{
                    return response.text()   /*Usamos .text() porque desde el backend asi lo definimos cuando responda el servidor (res.send('tal cosa') o console.log("texto..."))*/
                })
                
                .then((response)=>{
                    console.log(response);
                })
    
                setTableUpdated(true);
    
        }else{
          navigate('/')
        }


    }


  


    const handleUpdate = id => {

      const requestInit = {
        method : 'PUT',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(doctors)
      }

      fetch('http://localhost:8000/doctors/update/'+id, requestInit)
        .then(res => res.json())
        .then(res => console.log(res))
    }

    
    
       
       
      
    

    return(
        <div className="row d-flex justify-content-center">
             
           <div className="col-8 position-relative p-0">
           <Link to='/add' className="btn btn-primary btn-sm add"><FontAwesomeIcon icon={faPlus} /></Link>
           <h2 className="bg-success text-white p-2 m-0 mt-5 text-center">Doctor list</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr className="bg-dark text-white">
                        <th className="text-center">Name</th>
                        <th className="text-center">Lastname</th>
                        <th className="text-center">Enrollment</th>
                        <th className="text-center">Specialty</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map((doctor)=>{
                          return(
                            <tr key={doctor.enrollment}>
                            <td className="align-middle text-center">{doctor.name}</td>
                            <td className="align-middle text-center">{doctor.lastname}</td>
                            <td className="align-middle text-center">{doctor.enrollment}</td>
                            <td className="align-middle text-center">{doctor.specialty}</td>
                            <td className="text-center"><Link to={"/editDoctor/"+doctor.id} className="btn btn-primary m-2" onClick={()=>{getDoctor(doctor)}}><FontAwesomeIcon icon={faPencilSquare}/></Link><a onClick={()=>deleteDoctors(doctor.id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash}/></a></td>
                           
                        </tr>
                          )
                        })
                    }
                </tbody>
            </table>
           </div>
        </div>
    )
    
}


export const AddDoctor = ()=>{
    return(
     
     <form>
     <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Email address</label>
       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
       <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Password</label>
       <input type="password" class="form-control" id="exampleInputPassword1" />
     </div>
     <div class="mb-3 form-check">
       <input type="checkbox" class="form-check-input" id="exampleCheck1" />
       <label class="form-check-label" for="exampleCheck1">Check me out</label>
     </div>
     <button type="submit" class="btn btn-primary">Submit</button>
   </form>
    
    )
 }


 export const getDoctor = (doctorToEdit) => {
  
  let editDoctor = {
    name : doctorToEdit.name,
    lastname : doctorToEdit.lastname,
    enrollment : doctorToEdit.enrollment,
    specialty : doctorToEdit.specialty
  }

  return editDoctor;
  
}


import { ShowDoctors } from './Components/ShowDoctors';
import { AddDoctor }  from './Components/AddDoctor';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {EditDoctor} from './Components/EditDoctor';


function App() {
  return(
    <div className="App">
     <h1 className="p-4 bg-primary text-white mb-5 text-center">Clinical Medical</h1>
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <ShowDoctors /> } />
          <Route path='/' element = { <ShowDoctors /> } />
          <Route path='/add' element = { <AddDoctor /> } />
          <Route path='/editDoctor/:id' element = { <EditDoctor /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

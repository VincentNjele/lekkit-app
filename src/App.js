
import { AddProperty } from './components/AddProperty';
import { ComponentsHolder } from './ComponentsHolder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DetailsPage } from './components/DetailsPage';
import { UpdateRecord } from './components/UpdateRecord';
import { UploadImage } from './components/UploadImage';

const App = () => {



  return (

    <div  className='content-wrapper'>
    <Router>    
        <Routes>     
            <Route path='/' element={<ComponentsHolder />} />
            <Route path='/AddProperty' element = {<AddProperty />}/>
            <Route path='/DetailsPage/:id' element = {<DetailsPage/>}/>
            <Route path='/UpdateRecord/:id' element = {<UpdateRecord/>}/>
            <Route path='/UpdloadImage' element = {<UploadImage />}/>

        </Routes>
    </Router>

    </div>

   
  );
}

export default App;

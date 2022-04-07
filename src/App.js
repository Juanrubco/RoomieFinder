import './App.css';
import HomePage from './containers/home/home';
import { Router, Route } from 'react-router-dom';
import {Person} from './components/Person'
import {Resume} from './components/Resume'
import {Navbar} from './components/Navbar'

function App() {
  return (
    <div className="container_general">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='resumes'>
        <Resume name={'Manguito'} calification={5}/>
      </div>
      <div className='persons'>
        <Person name={'Manguito'} lgbti={'No'} pets={'Si'} messy={'No'} clean={'No'} smoker={'Si'} student={'Si'} city={'Bogota'} calification={5}/>
      </div>
    </div>
  );
}

export default App;

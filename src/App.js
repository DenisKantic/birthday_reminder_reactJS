import './App.css';
import Contact from './Components/Contact';
import {useState} from 'react';
import data from './Components/data';


function App() {

  const [people, setPeople] = useState(data);

  return (
    <div className="container">
      <h1 className='title'>{people.length} birthday left</h1>

    <Contact people={people}></Contact>

    <button id="clear" 
    onClick={()=> setPeople([])}
    >Clear</button>

    </div>
  );
}


export default App;

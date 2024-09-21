
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Homepage } from './pages/Homepage.js';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
        
    </div>
  );
}

export default App;

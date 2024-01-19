
import './App.css';
import Bckshouldnotwork from './components/Bckshouldnotwork';
import Display from './components/Display';
import Options from './components/Options';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Options/>}/>
          <Route path='/display' element={<Display/>}/>
          <Route path='/notwork' element={<Bckshouldnotwork/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

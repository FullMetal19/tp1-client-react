// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Home } from './views/Home';
import { Login } from './views/Login';
import { ModifStudent } from './views/ModifStudent';





function App() {
  
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/wisdom" element={ <Home /> }> </Route>
        <Route path="/wisdom/:id" element={ <ModifStudent /> }> </Route>
            
        <Route path="/" element={ <Login /> } > </Route>
        
        <Route path="*" element={ < Home />  } ></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;

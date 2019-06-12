import React, {Componet} from 'react';
import Header from './components/Header'
import Main from './pages/main';
import api from './services/api';

const App = ()=>(
  <div className = "App">
    <Header/>
    <Main />
  </div>
);
export default App;
 
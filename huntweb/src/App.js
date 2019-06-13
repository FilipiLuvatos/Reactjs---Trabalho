import React, {Componet} from 'react';
import Header from './components/Header'
import Main from './pages/main';
import api from './services/api';
import Routes from './routes';

const App = ()=>(
  <div className = "App">
    <Header/>
    <Routes />
  </div>
);
export default App;
 
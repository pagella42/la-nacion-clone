import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Acumulado from './components/Acumulado';


function App (){
 
    return (
        <Router>
          <Route  path="/" render={() => <Acumulado/>} />
        </Router>
        
    )
}


export default App;

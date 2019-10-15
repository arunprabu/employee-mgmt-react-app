import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Companies from './components/companies/Companies';
import EmployeeList from './components/employees/EmployeeList';
import About from './components/about/About';

//App Component 
// ideal place for layout
function App(){
  return(
    <BrowserRouter>
      <div>
        <Header></Header>

        <div className="container marginTop">
          <Switch>
            <Route path="/" component={Companies} exact/>
            <Route path="/employees" component={EmployeeList}/>
            <Route path="/about" component={About}/>
          </Switch>
        </div>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

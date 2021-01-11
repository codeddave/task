import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactSales from './components/ContactSales/ContactSales';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="">
      <Router>
        <>
        <Header/>
        <Switch> 
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/contact-sales' component={ContactSales}/>
            <Route exact path ='/signin' component={SignIn}/>

            
        </Switch>
       <Footer/> 

        </>  
      </Router>
       


    </div>
  );
}

export default App;

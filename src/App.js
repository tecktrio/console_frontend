import {HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Signin_Step_1 } from './Pages/SignIn/SignIn_Step_1/SignIn_Step_1';
import { Signin_Step_2 } from './Pages/SignIn/SignIn_Step_2/SignIn_Step_2';
import { SignUp_Step_1 } from './Pages/SignUp/SignUp_Step_1/SignUp_Step_1';
import { SignUp_Step_2 } from './Pages/SignUp/SignUp_Step_2/SignUp_Step_2';
import Home from './Pages/Home/Home';
import { SignUp_Step_3 } from './Pages/SignUp/SignUp_Step_3/SignUp_Step_3';
import { SignUp_Step_4 } from './Pages/SignUp/SignUp_Step_4/SignUp_Step_4';


function App() {


  return (
    <div className="App">
      <HashRouter >
      <Routes>

        
        <Route path='signin_u' Component={Signin_Step_1}/>
        <Route path='signin_p' Component={Signin_Step_2}/>
        <Route path='signup_' Component={SignUp_Step_1}/>
        <Route path='signup__' Component={SignUp_Step_2}/>
        <Route path='signup___' Component={SignUp_Step_3}/>
        <Route path='signup____' Component={SignUp_Step_4}/>
        <Route path='home' Component={() => <Home name="home" />}/>
        <Route path='/' Component={() => <Home name="home" />}/>
        <Route exact path='/products' Component={() => <Home name="products" />}/>
        <Route exact path='/productdetails' Component={() => <Home name="productdetails" />}/>
        <Route exact path='/documentation' Component={() => <Home name="documentation" />}/>
        <Route exact path='/billing' Component={() => <Home name="billing" />}/>
        <Route exact path='/account' Component={() => <Home name="account" />}/>
      
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

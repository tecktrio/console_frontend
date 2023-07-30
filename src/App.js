import {HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import { Signin_Step_1 } from './Pages/SignIn/SignIn_Step_1/SignIn_Step_1';
import { Signin_Step_2 } from './Pages/SignIn/SignIn_Step_2/SignIn_Step_2';
import { SignUp_Step_1 } from './Pages/SignUp/SignUp_Step_1/SignUp_Step_1';
import { SignUp_Step_2 } from './Pages/SignUp/SignUp_Step_2/SignUp_Step_2';
import { SignUp_Step_3 } from './Pages/SignUp/SignUp_Step_3/SignUp_Step_3';
import { SignUp_Step_4 } from './Pages/SignUp/SignUp_Step_4/SignUp_Step_4';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Footer from './Components/Footer/Footer';


// Responsible for routing the root urls
function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#B2CEDE" highlightColor="white">
      <HashRouter>
        <Routes>
          <Route path='signin_u'        Component={Signin_Step_1}/>
          <Route path='signin_p'        Component={Signin_Step_2}/>
          <Route path='signup_'         Component={SignUp_Step_1}/>
          <Route path='signup__'        Component={SignUp_Step_2}/>
          <Route path='signup___'       Component={SignUp_Step_3}/>
          <Route path='signup____'      Component={SignUp_Step_4}/>
          <Route path='home'            Component={() =>            <Home name="home" />}/>
          <Route path='/'               Component={() =>            <Home name="home" />}/>
          <Route path='/products'       Component={() =>            <Home name="products" />}/>
          <Route path='/productdetails' Component={() =>            <Home name="productdetails" />}/>
          {/* <Route path='/documentation/academy'     Component={() =>  <Home name="documentation/academy" />}/>
          <Route path='/documentation/quickvote'  Component={() =>  <Home name="documentation/quickvote" />}/> */}
          <Route path='/billing'        Component={() =>            <Home name="billing" />}/>
          <Route path='/account'        Component={() =>            <Home name="account" />}/>
        </Routes>
      </HashRouter>
      </SkeletonTheme>
      <Footer/>

    </div>
  );
}
export default App;

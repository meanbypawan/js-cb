import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

class App extends Component{
   render(){
      return <div>
        <Header/>
        <Navigation/>
        <Main/>
        <Footer/>
      </div>
   }
}

export default App;

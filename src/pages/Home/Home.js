import React from 'react';  
import './Home.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import { } from 'semantic-ui-react'

class Home extends React.Component { 
  
  render() {
    return (
      <div> 
  <Header/>
  <Content/>

  <Footer/>
      </div>
      

    );
  }
}

export default Home;

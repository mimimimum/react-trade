import React from 'react';  
import './Home.css';
import Header from '../Header/Header';
import Content from '../Content/Content';

import { } from 'semantic-ui-react'

class Home extends React.Component { 
  
  render() {
    return (
      <div> 
  < Header/>
  <div class="content">< Content/></div> 
  
      </div>
      

    );
  }
}

export default Home;

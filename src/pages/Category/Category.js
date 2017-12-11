import React from 'react';
import './Category.css';
import Header from '../Header/Header';

import GridExampleColumnCount from './GridPic';

class Home extends React.Component {
  state = { activeItem: 'category' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    return (
      <div>
        < Header />
       
      
          <GridExampleColumnCount />
        
      </div>


    );
  }
}

export default Home;

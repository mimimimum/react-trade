import React from 'react';  
import './Header.css';
import { Menu } from 'semantic-ui-react'
import ModalLogin from '../Modal/ModalLogin';
import ModalRegister from '../Modal/ModalRegister';

export default class Header extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  signout = event => {
    localStorage.clear();
    console.log(this.props);
   this.props.history.replace('/') // can use push that collect in stack
  }
  
  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item href ="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='category' href ="/category" active={activeItem === 'category'} onClick={this.handleItemClick} />
          <Menu.Item name='upload' active={activeItem === 'upload'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
          <ModalRegister href ="/register" name='sign up' active={activeItem === 'sign up'} onClick={this.handleItemClick} />
          <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
            <ModalLogin name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.signout} />
          </Menu.Menu>
        </Menu>
        

    <div class="ui billboard centered test ad" data-text="Billboard"></div>
    </div>
    )
  }
}
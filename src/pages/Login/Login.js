import React from 'react';
import './Login.css';
import { login } from '../../api'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Login extends React.Component {
  state = { // set state can use in class component only
    username: '',
    password: ''
  }
  constructor(props) {
    
    super(props)
    this.state = {
      imageFiles: []
    }
    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTextChange = event => { // can use for all that have name and value
    console.log(this)
    const name = event.target.name
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = event => {
    console.log(this)
    event.preventDefault() // no refresh
    login(this.state.username, this.state.password)
      .then(data => {
        if (data.status === 200) {
          console.log(this)
          localStorage.setItem('username', this.state.username)   //keep username to localstroage    
          this.props.history.replace('/main') // can use when import to file routes // redirect
        }
      })
  }

  render() {
    return  ( <div>
      <Header/>

          <form className='ui large form' onSubmit={this.onSubmit}> 
        
             <input  type='text'  name='username' placeholder='Username'  value={this.state.username} onChange={this.onTextChange} />
           
              <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.onTextChange} />
     
            <button type='submit' className='ui teal fluid button'>Log in</button>
     
          </form>
      
    
        <Footer/>
 </div>
    );
  }
}

export default Login;
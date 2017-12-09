import React from 'react';  
import './Login.css';
import {login} from '../../api'


class Login extends React.Component { 
  state = { // set state can use in class component only
    username : '',
    password : ''
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
    const name = event.target.name
    const value = event.target.value;
    this.setState({ 
      [name]: value 
    })
  }

  onSubmit = event => {
    event.preventDefault() // no refresh
    login(this.state.username,this.state.password)
    .then(data => {
      if (data.status === 200) {
        localStorage.setItem('username', this.state.username)   //keep username to localstroage    
        this.props.history.replace('/main') // can use when import to file routes // redirect
      }
    })
  }

  render() {
    return (
      <div 
      className='ui middle aligned center aligned grid' 
      style={{ padding: '50px 0 0 50px', width: '500px' }}>
  <div className='column'>
  <h2 className='ui teal header'>Login</h2>
  <form className='ui large form' onSubmit={this.onSubmit}> 
    <div className='ui stacked segment'>
    
      <div className='field'>
        <div className='ui left icon input'>
          <i className='user icon' />
          <input 
            type='text' 
            name='username' 
            placeholder='Username' 
            value={this.state.username} 
            onChange={this.onTextChange} />
        </div>
      </div>
  
      <div className='field'>
        <div className='ui left icon input'>
          <i className='lock icon' />
          <input 
            type='password' 
            name='password' 
            placeholder='Password' 
            value={this.state.password} 
            onChange={this.onTextChange} />
        </div>
      </div>
  
  
          <button type='submit' className='ui teal fluid button'>
            Log in
          </button>
        
   
    </div>
  </form>
  </div>
    </div>

    );
  }
}

export default Login;
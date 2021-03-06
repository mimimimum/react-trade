import React from 'react';
import { login } from '../../api'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Form, Button, Grid, Label, Input, Segment } from 'semantic-ui-react'

class Login extends React.Component {
  state = { // set state can use in class component only
    username: '',
    password: ''
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
    login(this.state.username, this.state.password)
      .then(data => {
        if (data.status === 200) {
          console.log(this)
          localStorage.setItem('username', this.state.username)   //keep username to localstroage
          this.props.history.replace('/profile') // can use when import to file routes // redirect
        }
      })
  }

  render() {
    return (
<div>
<Header />
<Grid>
   <Grid columns={3}>
     <Grid.Row>
       <Grid.Column>
       </Grid.Column>

       <Grid.Column color='black'>
       <h1 align = 'center'> LOGIN </h1>

           <Form className='ui large form' onSubmit={this.onSubmit}>
             <Segment >
               <Label color='red' attached='top'>USERNAME</Label>

               <Form.Input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.onTextChange} required />

             </Segment >

             <Segment>
               <Label color='red' attached='top'>PASSWORD</Label>
               <Form.Input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.onTextChange} required />
             </Segment>
             <Button fluid type='submit' inverted color='red' >LOGIN</Button>
           </Form>
           <a href="http://swaaaap.herokuapp.com/oauth/facebook" ><button class="ui facebook circular icon button" role="button">
                <i aria-hidden="true" class="facebook icon"></i>
            </button></a>
           <button class="ui twitter circular icon button" role="button">
         <i aria-hidden="true" class="twitter icon"></i>
         </button>

       </Grid.Column>


     </Grid.Row>
   </Grid >
   </Grid>

</div>



    );
  }
}

export default Login;

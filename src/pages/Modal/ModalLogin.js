import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { login } from '../../api'

class ModalLogin extends React.Component {

  state = { // set state can use in class component only
    username: '',
    password: '',
    open: false
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
    console.log()
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
          this.props.history.replace('/main') // can use when import to file routes // redirect
        }
      })
  }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Button onClick={this.show('mini')}>Login</Button>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            LOGIN
            </Modal.Header>
          <Modal.Actions>
            <div>
              <form className='ui large form' onSubmit={this.onSubmit}>
                <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.onTextChange} />
                <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.onTextChange} />
                <button type='submit' className='ui teal fluid button'>Log in </button>
              </form>
            </div>
            
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalLogin


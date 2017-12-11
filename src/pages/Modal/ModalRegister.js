import React from 'react'
import Dropzone from 'react-dropzone'
import {register} from '../../api'
import { Button, Modal,Form } from 'semantic-ui-react'


class ModalRegister extends React.Component {
  state = { // set state can use in class component only
    firstname : '',
    lastname : '',
    username:'',
    password:'',
    email:'',
    mobile:'',
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

onDrop(imageFiles) {
   this.setState({
      imageFiles: imageFiles
   })
}

onTextChange = event => { 
  const name = event.target.name
  const value = event.target.value;
  this.setState({ 
    [name]: value 
  })
}

onSubmit = event => {
  event.preventDefault() 
  register(this.state.firstname,this.state.lastname,this.state.username,this.state.password,this.state.email,this.state.tel)
  .then(data => {
    console.log(data);
 if (data.status === 200) {
      this.props.history.replace('/login') 
   }
  })
}

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
  
    render() {
      const { open, size } = this.state
  
      return (
        <div>
          <Button onClick={this.show('large')}>Sign up</Button>
  
          <Modal size={size} open={open} onClose={this.close}>
            <Modal.Header>
              REGISTER
            </Modal.Header>
            <Modal.Actions>
            <Form onSubmit={this.onSubmit}>

                  <Dropzone onDrop={this.onDrop.bind(this)} className='dropzone' activeClassName='active-dropzone' multiple={false}>
                    <div>Drag and drop or click to select a file to upload.</div>
                  </Dropzone>
  
                  {this.state.imageFiles.length > 0 ? <div><div>{this.state.imageFiles.map((file) => <img src={file.preview} /> )}</div></div> : null}

                  <Form.Group widths={2}>
      <Form.Input label='Username' name="username" placeholder="username" value={this.state.username} onChange={this.onTextChange} />
      <Form.Input label='Password' name="password" placeholder="password" value={this.state.password} onChange={this.onTextChange} />
    </Form.Group>
    <Form.Group  widths={2}>
      <Form.Input label='First name' type="text" name="firstname" placeholder="firstname" value={this.state.firstname} onChange={this.onTextChange}/>
      <Form.Input label='Last name' name="lastname" placeholder="lastname" value={this.state.lastname} onChange={this.onTextChange} />
    </Form.Group>
    <Form.Group >
      <Form.Input label='Address' name="address" placeholder="address" value={this.state.address} onChange={this.onTextChange} width={16}  />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='E-mail' name="email" placeholder="e-mail" value={this.state.email} onChange={this.onTextChange} />
      <Form.Input label='Mobile' name="mobile" placeholder="mobile" value={this.state.mobile} onChange={this.onTextChange} />
    </Form.Group>
    
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button type='submit'>Submit</Button>
  

        </Form>
            </Modal.Actions>
          </Modal>
        </div>
      )
    }
  }
  
  export default ModalRegister


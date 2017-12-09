import React from 'react';
import './Register.css';
import Dropzone from 'react-dropzone'
import {register} from '../../api'
import Header from '../Header/Header';

class Register extends React.Component {
  state = { // set state can use in class component only
    firstname : "",
    lastname : "",
    username:"" ,
    password:"",
    email:"",
    tel:"",
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

  render() {
    return (
      <div className="main">
<Header/>


        <div>
          <form onSubmit={this.onSubmit}>
          <table>
            <tr>
              <td>
                <Dropzone onDrop={this.onDrop.bind(this)} className='dropzone' activeClassName='active-dropzone' multiple={false}>
                  <div>Drag and drop or click to select a file to upload.</div>
                </Dropzone>

                {this.state.imageFiles.length > 0 ? <div><div>{this.state.imageFiles.map((file) => <img src={file.preview} /> )}</div></div> : null}
              </td>
              <td>
                <input type="text" name="firstname" placeholder="firstname" value={this.state.firstname} onChange={this.onTextChange} /><br />
                <input type="text" name="lastname" placeholder="lastname" value={this.state.lastname} onChange={this.onTextChange}/><br />
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onTextChange}/><br />
                <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.onTextChange}/><br />
                <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onTextChange}/><br />
                <input type="text" name="tel" placeholder="tel" value={this.state.tel} onChange={this.onTextChange}/><br />

                
              </td>
            </tr>
            <div>
              <button type='submit'>เสนอ</button>
            </div>
          </table></form>
        </div>

      </div>
    );
  }
}

export default Register;

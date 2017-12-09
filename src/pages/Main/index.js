import React from 'react';
import './index.css';
import localStorage from 'localStorage'
import Dropzone from 'react-dropzone'
import {postItem} from '../../api'
import Header from '../Header/Header';
class Main extends React.Component {
  state = { // set state can use in class component only
    name : '',
    description : '',
    look:'',
    send:''
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

onTextChange = event => { // can use for all that have name and value
  const name = event.target.name
  const value = event.target.value;
  this.setState({ 
    [name]: value 
  })
}

onSubmit = event => {
  event.preventDefault() // no refresh
  postItem(this.state.name,this.state.description,this.state.look,this.state.send)
  .then(data => {
 if (data.status === 200) {
  localStorage.setItem('username', this.state.username) 
      this.props.history.replace('/post') // can use when import to file routes // redirect
   }
  })
}
signout = event => {
  localStorage.clear();
  this.props.history.replace('/') // can use push that collect in stack
}

  render() {
    return (
      <div className="main">
         < Header/>

        <div>
          Welcome again, {localStorage.getItem('username')}
        </div>

        <div>
          <form onSubmit={this.onSubmit}>
          <table>
            <tr>
            <td>
            {this.state.imageFiles.length > 0
            ?
            <Dropzone onDrop={this.onDrop.bind(this)} className='dropzone' activeClassName='active-dropzone' multiple={false}><div><div>{this.state.imageFiles.map((file) => <img src={file.preview} /> )}</div></div> </Dropzone>
            :
            <Dropzone onDrop={this.onDrop.bind(this)} className='dropzone' activeClassName='active-dropzone' multiple={false}>
              <div>คลิ๊กหรือลากไฟล์มาไว้ที่นี่</div>
            </Dropzone>}
          </td>
              <td>
                <input type="text" name="name" placeholder="ชื่อสิ่งของ" value={this.state.name} onChange={this.onTextChange} /><br />
                <input type="text" name="description" placeholder="คำอธิบาย" value={this.state.description} onChange={this.onTextChange}/><br />
                <input type="text" name="look" placeholder="มองหา" value={this.state.look} onChange={this.onTextChange}/><br />
                <input type="text" name="send" placeholder="การจัดส่ง" value={this.state.send} onChange={this.onTextChange}/><br />

                <input type="radio" name="catagory" value="เสื้อผ้า" checked /> เสื้อผ้า<br />
                <input type="radio" name="catagory" value="IT" /> it<br />
                <input type="radio" name="catagory" value="other" /> other
              </td>
            </tr>
            <div>
              <button type='submit'>เสนอ</button>
            </div>
          </table></form>
          <button onClick={this.signout} className="ui button">Sign out</button>
        </div>

      </div>
    );
  }
}

export default Main;

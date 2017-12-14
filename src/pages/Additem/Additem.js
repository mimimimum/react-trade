import React from 'react';
import './Additem.css';
import {postItem} from '../../api'
import Header from '../Header/Header';
import { Grid, Segment, Image, Form, Comment, Input, Button,Radio} from 'semantic-ui-react'
class Main extends React.Component {
  state = { // set state can use in class component only
    name : '',
    description : '',
    lookfor:'',
    send:'',
    category:''
  }

  constructor(props) {
   super(props)
       this.state = {
           imageFiles: []
   }
   this.onTextChange = this.onTextChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
}
handleChange = (value) => {
  this.setState({ category: value })
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
  postItem(this.state.name,this.state.description,this.state.look,this.state.send,this.state.category)
  .then(data => {
 if (data.status === 200) {
      this.props.history.replace('/post') // can use when import to file routes // redirect
   }
  })
}

render() {
 return (
   <div className="main">
     < Header />

     <Grid>
       <Grid.Row columns={2} only='large screen'>
         <Grid.Column>
           <Segment>

           </Segment>
         </Grid.Column>
         <Grid.Column>
           <Segment>
             <Form onSubmit={this.onSubmit}>
           <Form.Group>

               <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.onTextChange} />
               <input type="text" name="description" placeholder="คำอธิบาย" value={this.state.description} onChange={this.onTextChange} />
               </Form.Group>
               <br />
               <br />
               <Form.Group>
               <input type="text" name="look" placeholder="มองหา" value={this.state.look} onChange={this.onTextChange} />
               <input type="text" name="send" placeholder="การจัดส่ง" value={this.state.send} onChange={this.onTextChange} />
               </Form.Group>
               <br />
               <br />
               <Form.Group>
               <input type='radio' name="category" value="shirt" onClick={(e) => this.handleChange('shirt')} /> เสื้อผ้า<br />
               <input type='radio' name="category" value="IT" onClick={(e) => this.handleChange('IT')} /> it<br />
               <input type='radio' name="category" value="on" onClick={(e) => this.handleChange('on')} /> other
               </Form.Group>
               <br />
               <br />
               <Button type='submit'>เสนอ</Button>

             </Form>
           </Segment>
         </Grid.Column>
       </Grid.Row>
       <Grid.Row columns={1} only='large screen'>
         <Grid.Column>
           <Segment>
             <Comment.Group>
               <Comment>
                 <Comment.Avatar src='/assets/images/avatar/small/elliot.jpg' />
                 <Comment.Content>
                   <Comment.Author as='a'>NAME</Comment.Author><br />
                   <Comment.Author as='a'>DESCRIPTION</Comment.Author><br />
                   <Comment.Author as='a'>LOOKING FOR</Comment.Author><br />
                   <Comment.Author as='a'>MODE</Comment.Author><br />
                   <Comment.Author as='a'>TRANSFER</Comment.Author>
                 </Comment.Content>
               </Comment>
             </Comment.Group>
           </Segment>
           <Segment>
             <Comment.Group>
               <Comment>
                 <Comment.Avatar src='/assets/images/avatar/small/elliot.jpg' />
                 <Comment.Content>
                   <Comment.Author as='a'>NAME</Comment.Author><br />
                   <Comment.Author as='a'>DESCRIPTION</Comment.Author><br />
                   <Comment.Author as='a'>LOOKING FOR</Comment.Author><br />
                   <Comment.Author as='a'>MODE</Comment.Author><br />
                   <Comment.Author as='a'>TRANSFER</Comment.Author>
                 </Comment.Content>
               </Comment>
             </Comment.Group>
           </Segment>
           <Segment>
             <Comment.Group>
               <Comment>
                 <Comment.Avatar src='/assets/images/avatar/small/elliot.jpg' />
                 <Comment.Content>
                   <Comment.Author as='a'>NAME</Comment.Author><br />
                   <Comment.Author as='a'>DESCRIPTION</Comment.Author><br />
                   <Comment.Author as='a'>LOOKING FOR</Comment.Author><br />
                   <Comment.Author as='a'>MODE</Comment.Author><br />
                   <Comment.Author as='a'>TRANSFER</Comment.Author>
                 </Comment.Content>
               </Comment>
             </Comment.Group>
           </Segment>
         </Grid.Column>
       </Grid.Row>
     </Grid>


   </div>
    );
  }
}

export default Main;

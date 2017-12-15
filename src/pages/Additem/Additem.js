import React from 'react';
import './Additem.css';
import Header from '../Header/Header';
import {postItem,getCategory} from '../../api'
import { Grid, Icon ,Label,Menu,Segment,Button,Input,Comment,Form,Radio } from 'semantic-ui-react'


class Additem extends React.Component {
  state = {
    allCategory: [],
    name : '',
    description : '',
    lookfor:'',
    send:'',
    cate:'',
    img:''
  }


handleChange = (value) => {
  this.setState({ cate: value })
}

getCategories = () => {
  getCategory()
    .then(data => this.setState({ allCategory: data }))
    .catch(err => console.error('Something went wrong.'))
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
  postItem(this.state.name,this.state.description,this.state.look,this.state.send,this.state.cate,this.state.img)
  .then(data => {
 if (data.status === 200) {
      this.props.history.replace('/post') // can use when import to file routes // redirect
   }
  })
}

componentDidMount() { // when render finish call is func
  this.getCategories()
}


render() {

    const cates = this.state.allCategory
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

                 <input type="text" name="img" placeholder="img" value={this.state.img} onChange={this.onTextChange} />

                 </Form.Group>
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
<div>
               {
                 cates.length >= 0
                 ? //in { } is logic
                   cates.map(cate =>
                     cate.categoryname ?
                     (
               <input type="radio" name="cate" value={cate.value} onClick={(e) => this.handleChange(cate.value)} />
                    )
                     :
                     null
                   )
                 :
                 null
               }
              </div> </Form.Group>
               <br />
               <br />
               <Button type='submit'>เสนอ</Button>

             </Form>
           </Segment>
         </Grid.Column>
       </Grid.Row>

     </Grid>


   </div>
    );
  }
}

export default Additem;

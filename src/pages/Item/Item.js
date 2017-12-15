import React from 'react';
import './Item.css';
import {getAllItem,reply} from '../../api'
import Header from '../Header/Header';
import { Button, Image, Grid, Segment,Input, Form } from 'semantic-ui-react'



class Profile extends React.Component {
  state = {
    item:[],
    id: this.props.match.params.id,
    name : '',
    description : '',
    img:'',
    reply:localStorage.getItem('username')

  }
  getItem = () => {
    getAllItem()
      .then(data => this.setState({ item: data }))
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
    reply(this.state.id,this.state.reply,this.state.img,this.state.name, this.state.description)
      .then(data => {
        if (data.status === 200) {
          window.location.reload();
        } else {
          console.log('ey')
        }
      })
  }

  componentDidMount() { // when render finish call is func
    this.getItem()
  }
  render() {
    const item = this.state.item

    return (
      <div>
        < Header />

          {
            item.length >= 0
            ? //in { } is logic
              item.map(posted =>
                posted._id ==this.state.id ?
                (
<Grid>
  <Grid.Row columns={2}>
<Grid.Column>
                  <Segment>
                    <Image size='large' centered src={posted.itemimage} />
                    <h2>{posted.owner}</h2>
                    <Segment>Name : {posted.itemname}</Segment>
                    <Segment>Description : {posted.description}</Segment>
                    <Segment>Look For : {posted.lookfor} </Segment>
                    <Segment>Trans : {posted.transfer}</Segment>

                    <Button class="ui red button" tabindex="0"><i aria-hidden="true" class="heart icon"></i> Like</Button>
                    <Button class="ui blue basic button " tabindex="0" ><i aria-hidden="true" class="unhide icon"></i>View</Button>
                    <Button floated="right">Trade</Button>
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
  </Form.Group>

<Form.TextArea type="text" name="description" placeholder="คำอธิบาย" value={this.state.description} onChange={this.onTextChange} />



    <Button type='submit'>เสนอ</Button>

  </Form>
                </Segment>
                </Grid.Column>

              </Grid.Row>
    </Grid>
              )
                :
                null
              )
            :
            null
          }
      </div>



    );
  }
}

export default Profile;

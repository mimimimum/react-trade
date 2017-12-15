import React from 'react';
import Header from '../Header/Header';
import { getCategory, postCategory } from '../../api'
import { Segment, Button, Input, Card, Image, Grid, Label, Form, List, Table } from 'semantic-ui-react'

class Admin extends React.Component {

  state = { // set state can use in class component only
    category: '',
    value: '',
    allCategory: []
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
    postCategory(this.state.category, this.state.value)
      .then(data => {
        if (data.status === 200) {
          window.location.reload();
        } else {
          console.log('ey')
        }
      })
  }
  getCategories = () => {
    getCategory()
      .then(data => this.setState({ allCategory: data }))
      .catch(err => console.error('Something went wrong.'))
  }


  componentDidMount() { // when render finish call is func
    this.getCategories()
  }


  render() {
    const posts = this.state.allCategory
    return (
      <div >
        < Header />
        <Grid>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Segment color = 'black'>
                  <h1>USER</h1>



                        <Segment size='small'>Name
                          <Button floated ='right' type='submit' inverted color='red' >BAN</Button>
                          <Button floated ='right' type='submit' inverted color='green' >UNBAN</Button><br/><br/>
                        </Segment>
                        <Segment size='small'>Name
                        <Button floated ='right' type='submit' inverted color='red' >BAN</Button>
                        <Button floated ='right' type='submit' inverted color='green' >UNBAN</Button><br/><br/>
                      </Segment>
                      <Segment size='small'>Name
                      <Button floated ='right' type='submit' inverted color='red' >BAN</Button>
                      <Button floated ='right' type='submit' inverted color='green' >UNBAN</Button><br/><br/>
                    </Segment>
                    <Segment size='small'>Name
                    <Button floated ='right' type='submit' inverted color='red' >BAN</Button>
                    <Button floated ='right' type='submit' inverted color='green' >UNBAN</Button><br/><br/>
                  </Segment>



                </Segment>

              </Grid.Column>
              <Grid.Column>

                <Segment >


                  <h1>CATEGORY</h1>


                  {
                    posts.length >= 0
                      ? //in { } is logic
                      posts.map(post =>
                        post.categoryname ?
                          (<div><Input type='text' value={post.categoryname} onChange={this.onTextChange} /> <Input type='text' value={post.value} onChange={this.onTextChange} /> <Button icon='pencil' /> <Button icon='cancel' /></div>

                          )
                          :
                          null
                      )
                      :
                      null
                  }
                  <form onSubmit={this.onSubmit}>
                    <Input type='text' name='category' value={this.state.category} onChange={this.onTextChange} /> <Input type='text' name='value' value={this.state.value} onChange={this.onTextChange} /> <Button type='submit'>Add</Button>
                  </form>
                </Segment>

              </Grid.Column>

            </Grid.Row>
          </Grid >
        </Grid >



      </div >




    );
  }
}

export default Admin;

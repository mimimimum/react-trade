import React from 'react';
import {getUser} from '../../api'
import Header from '../Header/Header';
import { Button, Image, Grid, Segment } from 'semantic-ui-react'

class Profile extends React.Component {
  state = {
        allUsers: []
      }

        getUsers = () => {
          getUser()
          .then(data => this.setState({ allUsers: data }))
          .catch(err => console.error('Something went wrong.'))
      }
      componentDidMount() { // when render finish call is func
        this.getUsers()
      }


      render() {
       const posts = this.state.allUsers
    return (
      <div>
        < Header />
        {
        posts.length >= 0
        ? //in { } is logic
          posts.map(post =>
            post.username == localStorage.getItem('username') ?
            (
              <div role="list" class="ui divided relaxed list">
                <Segment horizontal='true'>
                  <Grid>
                    <Grid.Column width={4}>
                    <Image src={post.profileimage} size='huge' />
                    <Segment><a href={"/setting/"+post._id}>< Button right basic color='pink'>SETTING</Button></a></Segment>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Segment.Group>
                        <Segment>PROFILE</Segment>
                        <Segment.Group>
              <Segment>USERNAME {post.username}</Segment>
              <Segment>FIRST NAME {post.firstname}</Segment>
              <Segment>LAST NAME {post.lastname}</Segment>
              <Segment>ADDRESS {post.address}</Segment>
              <Segment>E-MAIL {post.email}</Segment>
            <Segment>PHONE {post.phone}</Segment>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    </Segment>

<Grid centered columns={2}  >
  <Grid.Row centered columns={4} color='black'>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
  </Grid.Row>

  <Grid.Row centered columns={4} color='black'>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
  </Grid.Row>

  <Grid.Row centered columns={4} color='black'>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
  </Grid.Row>
</Grid></div>
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

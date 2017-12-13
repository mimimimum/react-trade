import React from 'react';
import {getAllItem} from '../../api'
import Header from '../Header/Header';
class Post extends React.Component {
  state = {

    allPosts: []
  }

    getItems = () => {
    getAllItem()
      .then(data => this.setState({ allPosts: data }))
      .catch(err => console.error('Something went wrong.'))
  }
  componentDidMount() { // when render finish call is func
    this.getItems()
  }

 
  render() {
    const posts = this.state.allPosts
    return (

      <div className="main">
         < Header/>
        { posts.length >= 0 ? //in { } is logic
          posts.map(post => 
            <div className='ui segment'>
              <p>Published by: {post.name}</p> 
            </div>
          )
          : null
        }
      </div>
    );
  }



}

export default Post;

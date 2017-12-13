import React from 'react';  
import { Grid } from 'semantic-ui-react'
import ImgShow from './Image'
export default class Content extends React.Component {


  render() {
    return(
    <Grid centered columns={2}  >
    <Grid.Row centered columns={4} color='black'>
    <Grid.Column>
    <ImgShow/>
    </Grid.Column>
    <Grid.Column>
    <ImgShow/>
    </Grid.Column>
    <Grid.Column>
    <ImgShow/>
    </Grid.Column>
    <Grid.Column>
    <ImgShow/>
    </Grid.Column>
  </Grid.Row>

    <Grid.Row centered columns={4} color='black'>
      <Grid.Column>
      <ImgShow/>
      </Grid.Column>
      <Grid.Column>
      <ImgShow/>
      </Grid.Column>
      <Grid.Column>
      <ImgShow/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered columns={4} color='black'>
      <Grid.Column>
      <ImgShow/>
      </Grid.Column>
      <Grid.Column>
      <ImgShow/>
      </Grid.Column>
      <Grid.Column>
      <ImgShow/>
      </Grid.Column>
      <Grid.Column>
      <ImgShow/>
      </Grid.Column>
    </Grid.Row>
  </Grid>

    )
  }
}

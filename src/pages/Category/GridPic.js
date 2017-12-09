import React from 'react'
import { Grid} from 'semantic-ui-react'
import ImageExampleAvatar from './Image.js';
const GridExampleColumnCount = () => (
  <Grid columns={3} divided verticalAlign='middle'>
    <Grid.Row >
      <Grid.Column>
      <ImageExampleAvatar />
      </Grid.Column>
      <Grid.Column>
      <ImageExampleAvatar />
      </Grid.Column>
      <Grid.Column>
      <ImageExampleAvatar />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row >
      <Grid.Column>
      <ImageExampleAvatar />
      </Grid.Column>
      <Grid.Column>
      <ImageExampleAvatar />
      </Grid.Column>
      <Grid.Column>
      <ImageExampleAvatar />
      </Grid.Column>

    </Grid.Row>

    <Grid.Row >
      <Grid.Column>
      <ImageExampleAvatar />
      </Grid.Column>
      <Grid.Column>
      <ImageExampleAvatar />
      </Grid.Column>
      <Grid.Column>
      <ImageExampleAvatar />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleColumnCount
import React from 'react'
import { Grid, Icon ,Label} from 'semantic-ui-react'

  export default class ConGridExampleColumnCounttent extends React.Component {
    
    
      render() {
        return(
  <Grid columns={3}  >
    <Grid.Row columns={3}  color='black' textAlign='center'>
      <Grid.Column>
      <Icon  circular inverted color='teal' name='users' size='huge'/><br/>
      <Label basic color='teal' pointing size='huge'>Please enter a value</Label>
      </Grid.Column>
      <Grid.Column>
        <Icon circular inverted color='pink' name='users' size='huge'/><br/>
      <Label basic color='pink' pointing size='huge'>Please enter a value</Label>
      </Grid.Column>
      <Grid.Column>
        <Icon circular inverted color='grey' name='users' size='huge'/><br/>
      <Label basic color='grey' pointing size='huge'>Please enter a value</Label>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}  color='black' textAlign='center'>
      <Grid.Column>
        <Icon circular inverted color='purple' name='users' size='huge'/><br/>
      <Label basic color='purple' pointing size='huge'>Please enter a value</Label>
      </Grid.Column>
      <Grid.Column>
        <Icon circular inverted color='orange' name='users' size='huge'/><br/>
      <Label basic color='orange' pointing size='huge'>Please enter a value</Label>
      </Grid.Column>
      <Grid.Column>
        <Icon circular inverted color='green' name='users' size='huge'/><br/>
      <Label basic color='green' pointing size='huge'>Please enter a value</Label>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}  color='black' textAlign='center'>
      <Grid.Column>
        <Icon circular inverted color='yellow' name='users' size='huge'/><br/>
      <Label basic color='yellow' pointing size='huge'>Please enter a value</Label>
      </Grid.Column>
      <Grid.Column>
        <Icon circular inverted color='olive' name='users' size='huge'/><br/>
      <Label basic color='olive' pointing size='huge'>Please enter a value</Label>
      </Grid.Column>
      <Grid.Column>
        <Icon circular inverted color='blue' name='users' size='huge'/><br/>
      <Label basic color='blue' pointing size='huge'>Please enter a value</Label>
      </Grid.Column>
    </Grid.Row>
  </Grid>

)


}
}

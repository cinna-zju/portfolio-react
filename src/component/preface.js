import React from 'react'
import { Grid } from 'semantic-ui-react'


import './font.css'

export default class Preface extends React.Component{
  render() {
    const name = {
      fontFamily: "roboto",
      fontWeight: "900",
      fontSize: '5em',
      color: '#ff6f61',
      lineHeight: '105%',
    }
    
    return (
      <Grid>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>

      <Grid.Row>
        <Grid.Column width={2} />
        <Grid.Column width={10}>
          <p style={name}>{this.props.content}</p>
        </Grid.Column>
      </Grid.Row>
      {/* ENFP-A */}

      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
    </Grid>
      
    )
  }

}
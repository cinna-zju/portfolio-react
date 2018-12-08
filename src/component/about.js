import React from 'react'
import { Grid, Container, Sticky } from 'semantic-ui-react'
import Menubar from './menu'
import { Link } from 'react-router-dom'

import './font.css'


export default class About extends React.Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (
      <div ref={this.handleContextRef}>

        <Grid verticalAlign='top'>
          <Grid.Column width='16'>
            <Sticky context={contextRef}><Menubar back={true} /></Sticky>

          </Grid.Column>

          <Grid.Row />
          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='3'>
              <Container className='t1'>ABOUT</Container>
            </Grid.Column>
            <Grid.Column width='9' textAlign='left'><Container text>
              My name is Shuo YANG(杨烁). I was born in Yichang, China.<br/> 
              I studied optics, electronics and programming in Zhejiang University.<br/>
              During the undergraduated, I did some projects about gesture interaction, affective computing
              and virtual experiment.<br/>

          </Container></Grid.Column>
          </Grid.Row>
          <Grid.Row>


          </Grid.Row>
          <Grid.Row />

          <Grid.Row>
          </Grid.Row>
        </Grid>
      </div>

    )
  }
}
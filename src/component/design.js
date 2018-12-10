import React from 'react'
import { Grid, Image, Container, Sticky, Transition } from 'semantic-ui-react'
import Menubar from './menu'
import { Link } from 'react-router-dom'

import './font.css'
import map from '../img/map.png'


export default class Design extends React.Component {

  state = {visible: false }

  handleContextRef = contextRef => this.setState({ contextRef })

  componentDidMount() {
    this.setState({ visible: true })

  }

  render() {
    const { contextRef, visible } = this.state

    return (
      <div ref={this.handleContextRef}>

        <Grid>
          <Grid.Column width='16'>
            <Sticky context={contextRef}><Menubar back={true} /></Sticky>

          </Grid.Column>

          <Grid.Row />
          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='3'>
              <Container className='t1'>Design</Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='6' />
            <Grid.Column width='8' textAlign='right'><Container className='intro'>
              Design is what we do to make human live better.
          </Container></Grid.Column>

          </Grid.Row>
          <Grid.Row />

          <Grid.Row>
            <Grid.Column width='2'></Grid.Column>

            <Grid.Column width='5'>
              <Transition visible={visible} animation='slide right' duration='500'>
                <Link className='link2' to='./design/map'>
                  <Image rounded src={map}></Image>
                  <div className='itemname'><br />Cityller</div>
                </Link>
              </Transition>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    )
  }
}
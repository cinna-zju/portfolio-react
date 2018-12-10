import React from 'react'
import { Grid, Image, Container, Sticky, Transition } from 'semantic-ui-react'
import Menubar from './menu'
import { Link } from 'react-router-dom'

import './font.css'
import mines from '../img/mine/mine.jpg'
import sofc from '../img/sofc.png'
import aff from '../img/aff.png'



export default class Code extends React.Component {
  state = {visible: false}

  handleContextRef = contextRef => this.setState({ contextRef })

  componentDidMount() {
    this.setState({visible: true})
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
              <Container className='t1'>Code</Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='5' />
            <Grid.Column width='8' textAlign='right'><Container className='intro'>
              WRITING, and CREATING.
          </Container></Grid.Column>

          </Grid.Row>
          <Grid.Row />

          <Grid.Row>
            <Grid.Column width='2'></Grid.Column>
            <Grid.Column width='5'>
            <Transition visible={visible} animation='slide right' duration='500'>
              
              <Link className='link2' to='/code/mines'>
                <Image rounded src={mines}></Image>
                  <div className='itemname'><br />Minesweeper</div>
                  

                </Link>
                </Transition>
            </Grid.Column>
            <Grid.Column width='1' />
            <Grid.Column width='5'>
            <Transition visible={visible} animation='slide right' duration='500'>
              
              <Link className='link2' to='/code/sofc'>
                <Image rounded src={sofc}></Image>
                <div className='itemname'><br />Sofc</div>
                </Link>
                </Transition>
            </Grid.Column>

          </Grid.Row>

          <Grid.Row>

          </Grid.Row>
            <Grid.Column width='2'></Grid.Column>
          <Grid.Column width='5'>
          <Transition visible={visible} animation='slide right' duration='500'>
            
              <Link className='link2' to='/code/affectiva'>
                <Image rounded src={aff}></Image>
                <div className='itemname'><br />Affectiva Computing</div>

              </Link>
              </Transition>
            </Grid.Column>

        </Grid>
      </div>

    )
  }
}
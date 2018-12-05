import React from 'react'
import { Grid, Image, Container } from 'semantic-ui-react'
import Menubar from './menu'
import {Link} from 'react-router-dom'

import './font.css'
import mines from '../img/mines.jpg'
import map from '../img/map.jpg'


export default class Design extends React.Component{
  state = {}
  
  render() {
    const { activeItem } = this.state



    return (
      <Grid>
        <Grid.Column width='16'>
          <Menubar/>

        </Grid.Column>

        <Grid.Row/>
        <Grid.Row>
          <Grid.Column width='2' />
          <Grid.Column width='3'>
            <div className='t1'>Design</div>
          </Grid.Column>
          <Grid.Column width='7'><Container >
            <p>is what we do to make human live better. By thinking about technology and design</p>
          </Container></Grid.Column>
        
        </Grid.Row>
        <Grid.Row/>

        <Grid.Row>
          <Grid.Column width='2'></Grid.Column>
          <Grid.Column width='5'>
            <Link to='/design/mines'>
              <Image rounded src={mines}></Image>
              <div className='t2'><p>Redesign of Minesweeper</p></div>    
            </Link>
          </Grid.Column>
          <Grid.Column width='1'/>

          <Grid.Column width='5'>
            <Link to='./design/map'>
              <Image rounded src={map}></Image>
            </Link>
            <div className='t2'><p>Redesign of Map</p></div>    

          </Grid.Column>
        </Grid.Row>
        </Grid>

    )
  }
}
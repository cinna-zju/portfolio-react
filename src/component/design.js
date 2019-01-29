import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Menubar from './menu2'
import { Link } from 'react-router-dom'

import './font.css'
import map from '../img/map.png'


export default class Design extends React.Component {

  state = { visible: false }
  render() {
    const { contextRef, visible } = this.state

    const bg = {
      background: "#a0c7ff",
    
    }

    return (
      <div ref={this.handleContextRef}>

        <Grid>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>


          <Grid.Row>
            <Grid.Column width={1} />
            <Grid.Column width={10}>
              <p className='preface'>Design<br /> is what we do to make life better.</p>
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


          <Grid.Row>
            <Grid.Column width='1' />
            <Grid.Column width='15'>
              <Menubar active='design' />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={bg} />
          <Grid.Row style={bg} />
          <Grid.Row style={bg} />

          <Grid.Row style={bg}>
            <Grid.Column width='2'></Grid.Column>

            <Grid.Column width='5'>
                <Link className='link2' to='./design/map'>
                  <Image rounded src={map}></Image>
                  <div className='itemname'><br />Cityller</div>
                </Link>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    )
  }
}
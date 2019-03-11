import React from 'react'
import { Grid, Image, Label } from 'semantic-ui-react'
import Menubar from './menu2'
import { Link } from 'react-router-dom'

import './font.css'
import map from '../img/map3.jpg'
import aff from '../img/aff.png'
import info from '../img/infovis.png'
// import splash from '../img/splash.png'
import resto from '../img/resto.jpg'



export default class Projects extends React.Component {

  render() {

    return (
      <div>

        <Grid padded='vertically' relaxed>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>


          <Grid.Row>
            <Grid.Column width={1} />
            <Grid.Column width={10}>
              <p className='preface'>Design something better.<br />
                <a href='https://github.com/cinna-zju'>Code</a> makes it alive.
                </p>
            </Grid.Column>
          </Grid.Row>
          {/* ENFP-A */}

          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>

          <Grid.Row verticalAlign='bottom'>
            <Grid.Column width='1' />
            <Grid.Column width='15'>
              <Menubar active='design' color='blue' />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row></Grid.Row>

          <Grid.Row >
            <Grid.Column width='2'></Grid.Column>

            <Grid.Column width='5'>
              <Link className='link2' to='./projects/map'>
                <Image className='screenshot' src={map}></Image>
                <div className='name'>
                  <Label color='teal' horizontal size='large' basic>Design</Label>Cityller
                </div>

              </Link>
            </Grid.Column>
            <Grid.Column width='1'></Grid.Column>


            <Grid.Column width='5'>
              <Link className='link2' to='./projects/resto'>
                <Image className='screenshot' src={resto}></Image>
                <div className='name'>
                  <Label color='teal' horizontal size='large' basic>Design</Label>digiCrous
                </div>
              </Link>
            </Grid.Column>


          </Grid.Row>

          <Grid.Row />

          <Grid.Row>
            <Grid.Column width='2'></Grid.Column>
            {/* <Grid.Column width='5'>
              <Link className='link2' to='/projects/sofc'>
                <Image className='screenshot' rounded src={sofc}></Image>
                <div className='name'><br />Sofc</div>
              </Link>
            </Grid.Column> */}


            <Grid.Column width='5'>
              <Link className='link2' to='/projects/infovis'>
                <Image className='screenshot' src={info}></Image>
                <div className='name'>
                  <Label color='teal' horizontal size='large' basic>Design</Label>
                  <Label color='yellow' horizontal size='large' basic>Visualization</Label>
                  Menu-hotkey Transition
                </div>
              </Link>
            </Grid.Column>

            <Grid.Column width='1' />
            <Grid.Column width='5'>
              {/* <Link className='link2' to='./projects/splash'>
                <Image className='screenshot' rounded src={splash}></Image>
                <div className="name">
                  <Label color='teal' horizontal size='large' basic>Design</Label>
                  <Label color='yellow' horizontal size='large' basic>Code</Label>Splash!
                </div>
              </Link> */}
              <Link className='link2' to='/projects/affectiva'>
                <Image className='screenshot' src={aff}></Image>
                <div className='name'>
                  <Label color='blue' horizontal size='large' basic>Machine learning</Label>Emotion Detection</div>
              </Link>
            </Grid.Column>
          </Grid.Row>


        </Grid>


      </div>

    )
  }
}
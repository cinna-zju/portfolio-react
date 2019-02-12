import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Menubar from './menu2'
import { Link } from 'react-router-dom'

import './font.css'
import map from '../img/map.png'
import mines from '../img/mine.png'
import aff from '../img/aff.png'
import info from '../img/infovis.png'
import splash from '../img/splash.png'


export default class Projects extends React.Component {

  render() {

    return (
      <div>

        <Grid padded='vertically'>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>


          <Grid.Row>
            <Grid.Column width={1} />
            <Grid.Column width={10}>
              <p className='preface'>Design and <a href='https://github.com/cinna-zju'>code</a> ,<br />
                can make our life<br />
                better.</p>
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

          <Grid.Row verticalAlign='bottom'>
            <Grid.Column width='1' />
            <Grid.Column width='15'>
              <Menubar active='design' color='blue'/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row >
            <Grid.Column width='2'></Grid.Column>

            <Grid.Column width='5'>
              <Link className='link2' to='./projects/map'>
                <Image className='screenshot' rounded src={map}></Image>
                <div className='name'><br />Cityller</div>
              </Link>
            </Grid.Column>
            <Grid.Column width='1'/>
            <Grid.Column width='5'>

              <Link className='link2' to='/projects/mines'>
                <Image  className='screenshot' rounded src={mines}></Image>
                <div className='name'><br />Minesweeper</div>
              </Link>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row/>

          <Grid.Row>
            <Grid.Column width='2'></Grid.Column>
            {/* <Grid.Column width='5'>
              <Link className='link2' to='/projects/sofc'>
                <Image className='screenshot' rounded src={sofc}></Image>
                <div className='name'><br />Sofc</div>
              </Link>
            </Grid.Column> */}


            <Grid.Column width='5'>
              <Link className='link2' to='/projects/affectiva'>
                <Image className='screenshot' rounded src={aff}></Image>
                <div className='name'><br />Emotion Detection</div>
              </Link>
            </Grid.Column>

            <Grid.Column width='1' />
            
            <Grid.Column width='5'>
              <Link className='link2' to='/projects/infovis'>
                <Image className='screenshot' rounded src={info}></Image>
                <div className='name'><br />Visualization</div>
              </Link>
            </Grid.Column>


          </Grid.Row>

          <Grid.Row >
            <Grid.Column width='2'></Grid.Column>

            <Grid.Column width='5'>
              <Link className='link2' to='./projects/splash'>
                <Image className='screenshot' rounded src={splash}></Image>
                <div className='name'><br />Splash</div>
              </Link>
            </Grid.Column>
            <Grid.Column width='1'/>
            {/* <Grid.Column width='5'>

              <Link className='link2' to='/projects/mines'>
                <Image  className='screenshot' rounded src={mines}></Image>
                <div className='name'><br />Minesweeper</div>
              </Link>
            </Grid.Column> */}
          </Grid.Row>
        </Grid>


      </div>

    )
  }
}
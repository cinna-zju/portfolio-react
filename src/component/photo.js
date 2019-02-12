import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Menubar from './menu2'
import Zmage from 'react-zmage'

import './font.css'

import r1 from '../photos/1.JPG'
import r2 from '../photos/2.JPG'
import r3 from '../photos/3.JPG'
import s4 from '../photos/4.JPG'
import s6 from '../photos/6.JPG'
import s7 from '../photos/7.JPG'
import s8 from '../photos/8.JPG'
import s9 from '../photos/9.JPG'
import s10 from '../photos/10.JPG'

export default class Photo extends React.Component {

  render() {

    return (

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
          <Grid.Column width={8}>
            <p className='preface'>Camera<br/>is the third eye to<br/>see the world
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
        <Grid.Row></Grid.Row>





        <Grid.Row verticalAlign='bottom' >
          <Grid.Column width='1' />
          <Grid.Column width='14' textAlign='left'>
            <Menubar active='photo' color='red' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='1' />
          <Grid.Column width='6'>
            <Zmage src={r3} />
          </Grid.Column>
          <Grid.Column width='6'>
            <Zmage src={r2} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='1' />
          <Grid.Column width='4'><Zmage src={s4} /></Grid.Column>
          <Grid.Column width='4'><Zmage src={s6} /></Grid.Column>
          <Grid.Column width='4'><Zmage src={s7} /></Grid.Column>
        </Grid.Row>



        <Grid.Row>
          <Grid.Column width='1' />
          <Grid.Column width='4'><Zmage src={s8} /></Grid.Column>
          <Grid.Column width='4'><Zmage src={s9} /></Grid.Column>
          <Grid.Column width='4'><Zmage src={s10} /></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='1' />
          <Grid.Column width='6'>
            <Zmage src={r1} />
          </Grid.Column>

        </Grid.Row>


      </Grid>

    )
  }
}
import React from 'react'
import { Grid, Image, Container, Sticky } from 'semantic-ui-react'
import Menubar from './menu'

import './font.css'

import s1 from '../img/sofc/1.png'
import homepage from '../img/sofc.png'

export default class Sofc extends React.Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (
      <div ref={this.handleContextRef}>

        <Grid>

          <Grid.Row>
            <Grid.Column>
              <Sticky context={contextRef}>
                <Menubar back={true} />
              </Sticky>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign='center'>
            <Grid.Column width='2' />
            <Grid.Column width='12' textAlign='left'><div className='t1' >Sofc</div></Grid.Column>
          </Grid.Row>

          <Grid.Row/>

          <Grid.Row>
            <Grid.Column width='14' textAlign='right'><div className='intro'>A musician booking website</div></Grid.Column>

          </Grid.Row>
          <Grid.Row />

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='12'>
              <Image src={homepage}/>
            </Grid.Column>
          </Grid.Row>



          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column><div className='t2'>Background</div></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='12'><Container textAlign='justified'><p>From the idea of airbnb, we create a platform to connect musicians and customers.
              Customers can book musicians from this website.
              Musicians can create their own homepage to show their brilliance.
              Customers can search and select their favorite musicians according to instruments, location and dates.</p>
              <p>This is part of a project of <i>Business class</i> at ESSEC. 
              </p></Container></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='12'>
              <Image src={s1} rounded />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column><div className='t2'>Implementation</div></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='12'><Container><p>
              This front-end is mainly built on React and Semantic-UI. The back-end is built on Google firebase.

            </p></Container></Grid.Column>
          </Grid.Row>







        </Grid>
      </div>


    )
  }

}
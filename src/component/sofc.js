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
            <Grid.Column width='3' />
            <Grid.Column width='12' textAlign='left'><div className='t1' >Sofc</div></Grid.Column>
          </Grid.Row>

          <Grid.Row/>

          <Grid.Row>
            <Grid.Column width='13' textAlign='right'><div className='intro'>A musician booking website</div></Grid.Column>

          </Grid.Row>
          <Grid.Row />

          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column width='10'>
              <Image src={homepage} rounded/>
            </Grid.Column>
          </Grid.Row>



          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column><div className='t2'>Background</div></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column width='10'><Container textAlign='justified'>
              <p>From the idea of airbnb, we create a platform to connect musicians and customers. 
                Both musicians and customers register on the website. For musicians, they can provide their information,
                like what kind of instruments they are playing, their location and their expected price. 
                Also they can upload pictures and videos to their homepage making customers more familiar with them.
                Customers can search and select their favorite musicians according to instruments, location, type and date.
                Then customers can book a musician. </p>

              <p>This idea is from Sora Park et al, students at ESSEC Paris, as a project of <i>Business class</i>. 
              I am responsible for the development of the website.
              </p></Container></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column width='10'>
              <Image src={s1} rounded />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column><div className='t2'>Implementation</div></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column width='10'><Container>
              <p>
                This front-end is mainly built on React and Semantic-UI. The back-end is built on Google firebase. 
                The user data are stored in firebase real-time database. The images users uploaded ares stored in the firebase storage.
              </p>
              <p>
                For musicians, they can register, sign in/out, edit their profile, upload pictures and videos 
                and check the booking information. For customers, they can register, sign in/out, search, 
                view musician's profile and book a musician.
              </p>
            
            </Container></Grid.Column>
          </Grid.Row>







        </Grid>
      </div>


    )
  }

}
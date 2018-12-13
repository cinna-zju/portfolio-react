import React from 'react'
import { Grid, Image, Container, Sticky } from 'semantic-ui-react'
import Menubar from './menu'

import './font.css'

import poster from '../img/affectiva/poster.jpg'

export default class Affectiva extends React.Component {
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
            <Grid.Column width='12' textAlign='left'><div className='t1' >Affective Computing</div></Grid.Column>
          </Grid.Row>

          <Grid.Row/>

          <Grid.Row>
            <Grid.Column width='13' textAlign='right'><div className='intro'>Improve emotion detection by combining multiple camera views </div></Grid.Column>

          </Grid.Row>
          <Grid.Row />



          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column><div className='t2'>Background</div></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column width='10'><Container textAlign='justified'><p>
              Affective computing is popular nowadays. Most of these algorithms are built on sigle camera. 
              I try to improve the accuracy and robustness by adopting multiple cameras. 

              </p>
              <p>This research was conducted at North Carolina State Univeristy, insturcted by Prof. Edgar Lobaton.
                The original paper is <a className='link3' href='https://ieeexplore.ieee.org/abstract/document/8285365'>HERE</a>.
              </p>
            </Container></Grid.Column>
          </Grid.Row>
          <Grid.Column width='3'/>
          <Grid.Column width='10'><div className='t2'>Poster</div></Grid.Column>

          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column width='10'>
              <Image src={poster} rounded />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column><div className='t2'>Implementation</div></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column width='10'><Container><p>
              I use Javascript SDK of <a className='link3' href='https://www.affectiva.com/'>Affectiva</a> to recognize the emotion, 
              store these data in webSQL, and use python and sklearn to analyse.

            </p></Container></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>


    )
  }

}
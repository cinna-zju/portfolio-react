import React from 'react'
import { Grid, Image, Container, Breadcrumb } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './font.css'

import poster from '../img/affectiva/poster.jpg'

export default class Affectiva extends React.Component {

  render() {

    return (

      <Grid>
        <Grid.Row>
          <Grid.Column width='3' />

          <Grid.Column textAlign='left' width='12'>
            <Breadcrumb>
              <Breadcrumb.Section link><Link to='/projects'>PROJECTS</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active><div className='t1' >Emotion Detection</div></Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Container textAlign='justified'><p>
              Affective computing is popular nowadays. Most of these algorithms are built on sigle camera.
              I try to improve the accuracy and robustness by adopting multiple cameras.
              </p>
              <p>This research was conducted at North Carolina State Univeristy, insturcted by Prof. Edgar Lobaton.
                The original paper is <a className='link3' href='https://ieeexplore.ieee.org/abstract/document/8285365'>HERE</a>.
              </p>
              <p>
              I use Javascript SDK of <a className='link3' href='https://www.affectiva.com/'>Affectiva</a> to recognize the emotion,
              store these data in webSQL, and use python and sklearn to analyse.
            </p>
            </Container>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='1' />
          <Grid.Column width='14'>
            <Image src={poster} rounded />
          </Grid.Column>
        </Grid.Row>



      </Grid>

    )
  }

}
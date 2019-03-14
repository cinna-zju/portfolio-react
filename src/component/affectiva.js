import React from 'react'
import { Grid, Container, Breadcrumb, Button, Divider, Image } from 'semantic-ui-react'
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
              Affective computing can help computers to understand human. Emotion detection can be 
              applied to a number of fields such as education, gaming and monitoring. The problem is
              that most of these algorithms are built on single camera.
              I try to improve the accuracy and robustness by adopting multiple cameras.
              </p>
              <p>The objective are developing a pipeline for processing camera video feeds and 
                using a model trained from 4 different angles to improve the performance.
              </p>

              <p>Most of the work was about data analysis. I tried to find some patterns from the data of different cameras. </p>

              <p>
              I used Javascript SDK of <a className='link3' href='https://www.affectiva.com/'>Affectiva</a> to recognize the emotion,
                store these data in webSQL, and used python and sklearn to analyse.
            </p>

              <p>This research was conducted at North Carolina State Univeristy, USA with Boxuan Zhong and Zikun Qin, insturcted by Edgar Lobaton.
                Then we published a paper named <i>Emotion recognition with facial expressions and physiological signals</i> on IEEE SSCI 2017.
                The original paper is <a className='link3' href='https://ieeexplore.ieee.org/abstract/document/8285365'>HERE</a>.
              </p>

            </Container>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Image src={poster} rounded />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='4'/>
          <Grid.Column width='8' textAlign='center'>
            <Divider/>
            <Link to="/projects"><Button color='red' >Back to projects</Button></Link>
          </Grid.Column>
        </Grid.Row>



      </Grid>

    )
  }

}
import React from 'react'
import { Grid, Image, Container, Breadcrumb } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './font.css'

import scenario from '../img/splash/scenario.png'
import phone from '../img/splash/phone.PNG'
import ink from '../img/splash/ink.png'



export default class Splash extends React.Component {
  render() {
    return (
      <Grid padded='vertically'>

        <Grid.Row>
          <Grid.Column width='3' />

          <Grid.Column textAlign='left' width='12'>
            <Breadcrumb>
              <Breadcrumb.Section link><Link to='/projects'>PROJECTS</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active><div className='t1' >Splash</div></Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
        </Grid.Row>


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            {/* <div className='t2'>Introduction</div> */}
            <p><b>INTRODUCTION</b></p>

            <Container textAlign='justified'>
              <p>This is the project of the course Gesture and Mobile Interaction at Université Paris Sud.
                I worked with Siba Siddique, Yuanyang Zhong to do this project.
              I was responsible for the system architect, part of coding and part of design. </p>
              <p>
                In our project, we propose the implementation of a collaborative platform where people are encouraged to “throw” paintballs,
                  which will make art which can be saved or displayed on a public space. The concept was inspired by the game Splatoon,
                  which is a multiplayer game on Nintendo Switch where players have to use colored ink to attack their opponents,
                  with different modes of play including covering the ground with more ink compared to your opponents.
           </p>
              <p>
                By using a large wall-sized platform, we think that
                we can effectively connect people together in public spaces and encourage sharing of ideas.
            </p>

            </Container>

          </Grid.Column>
        </Grid.Row>



        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p><b>SCENARIO</b></p>
            <Image src={scenario} /></Grid.Column>

        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p><b>DESIGN</b></p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='5'><Image src={ink} rounded /></Grid.Column>
          <Grid.Column width='5'>
            <p>We designed several patterns to simulate the actions of ink drops in the real world.</p>
            <p>When designing the system, we try to make it lightweight, simple, intuitive and easy to learn.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />

          <Grid.Column width='5' textAlign='right'><p>For the controller interface,
            the final goal is to let user interact with it without seeing the screen.
            The color pallete is on the right side and three colors are in the top, middle and bottom respectively.
            Lock is a frequent interaction so the button can be pushed by just tapping the screen using the thumb.</p></Grid.Column>
            <Grid.Column width='2'><Image src={phone} /></Grid.Column>
        
        </Grid.Row>




      </Grid>
    )
  }
}
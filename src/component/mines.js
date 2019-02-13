import React from 'react'
import { Grid, Image, Breadcrumb, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './font.css'

import m4 from '../img/mine/4.png'
import m5 from '../img/mine/5.png'

import dt from '../img/mine/detector.mp4'


export default class Mines extends React.Component {




  render() {
    const green = {
      color: '#00ee99'
    }
    const yellow = {
      color: '#fbff20'
    }
    const red = {
      color: '#ff2020'
    }
    

    return (

      <Grid padded='vertically'>

        <Grid.Row>
          <Grid.Column width='3' />

          <Grid.Column textAlign='left' width='12'>
            <Breadcrumb>
              <Breadcrumb.Section link><Link to='/projects'>PROJECTS</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active><div className='t1' >MineSweeper</div></Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row />


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p><b>BACKGROUND</b></p>
            <p>
              This is a course project of <a className='link3' href='https://www.lri.fr/~anab/teaching/Intro-ProgIS/'>Programming of Interactive Systems</a>, 
              taught by Anastasia Bezerianos, to redesign the legendary legacy game Minesweeper.
              The aim of this redesign is to make it more interesting by adding some new interactions and functions.
  
            </p>
              <p>This project is built on Java and JavaFX.
            Click <a className='link3' href='https://github.com/cinna-zju/MineSweeper'>HERE</a> to see the source code.</p>
          
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p><b>INTERFACE DESIGN</b></p>          
          </Grid.Column>
        </Grid.Row>

          <Grid.Row>
            <Grid.Column width='3' />
          <Grid.Column width='6'><video width='100%' autoPlay={true} loop={true}><source src={dt} /></video></Grid.Column>
            <Grid.Column width='4'>
            <p>
              I redesigned the game according to <i>flat design</i>. Instead of using icons of mines or flags, 
              I adopted different color to represent the states of each block.</p>
            <p><Icon style={green} name='square' size='big' /> (#00ee99) means undetected blocks.</p>
            <p><Icon style={yellow} name='square'  size='big'/> (#fbff20) means marked blocks.</p>
            <p><Icon style={red} name='square' size='big' /> (#ff2020) means a clicked mine block.</p>
            <p>The hovered block will be highlighted.</p>
           
            

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width="3" />
          <Grid.Column width="3"><Image src={m4} /></Grid.Column>
          <Grid.Column width="3"><Image src={m5} /></Grid.Column>
          <Grid.Column width='4'>
          <p>In addition to the original game, I added an 'Equipment' function. There are three kinds of equipment, <b>Shield</b>, <b>Detector</b> and <b>Timer</b>. The player can choose one when the game start. <b>Shield</b> can protect the player once when clicking mines. <b>Timer</b> can give the player additional time. The two are triggered automatically.
              For <b>Detector</b>, the player can drag and drop to check a 3*3 area.
            </p>
          </Grid.Column>

        </Grid.Row>


      </Grid>


    )
  }

}
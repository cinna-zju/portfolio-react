import React from 'react'
import { Grid, Image, Container, Breadcrumb } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './font.css'

import m4 from '../img/mine/4.png'
import m5 from '../img/mine/5.png'

import dt from '../img/mine/dtr.gif'


export default class Mines extends React.Component {


  render() {

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
        <Grid.Row />


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column><div className='t2'>Background</div></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><Container textAlign='justified'><p>
            This is a course project of <a className='link3' href='https://www.lri.fr/~anab/teaching/Intro-ProgIS/'>Programming of Interactive Systems</a>, taught by Anastasia Bezerianos, to develop
            a simple version of an interactive game inspired by the legendary legacy game Minesweeper.
            The aim of this redesign is to make it more interesting by adding some new interactions and functions.

            </p></Container></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column><div className='t2'> Implementation</div></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><Container><p>
            This project is built on Java and JavaFX.
            Click <a className='link3' href='https://github.com/cinna-zju/MineSweeper'>HERE</a> to see the source code.

            </p></Container></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='12'><div className='t2'>New Interactions</div></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><Container><p>
            - Drag and Drop to use <i>equipment</i> <br />
            - Zoom to select level<br />
            - Add more visual feedback
            </p></Container></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column><div className='t2'>Interface</div></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='4' />
          <Grid.Column width='6'><Image src={dt} bordered /></Grid.Column>
          <Grid.Column width='3'><Image src={m4} /><p></p><Image src={m5} /></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />

          <Grid.Column width='11'><Container textAlign='justified'><p>
            Use left-click to explore and right-click to mark, like the original Minesweeper game.
            The color of the marked grid will change to YELLOW.
              And when you click a mine, the grid color will turn to RED.<br />

            There are two buttons. One is ‘Settings’ button and the other is ‘Equipment’ button, showing the equipment you just chose. <b>Shield</b> and <b>Timer</b> are triggered automatically.For <b>Detector</b>, you can drag and drop to check a 3*3 area.</p>

          </Container>
          </Grid.Column>
        </Grid.Row>


      </Grid>


    )
  }

}
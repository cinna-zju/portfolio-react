import React from 'react'
import { Grid, Image, Container, Sticky } from 'semantic-ui-react'
import Menubar from './menu'

import './font.css'

import m1 from '../img/mine/1.png'
import m2 from '../img/mine/2.png'
import m3 from '../img/mine/3.png'
import m4 from '../img/mine/4.png'
import m5 from '../img/mine/5.png'
import m6 from '../img/mine/6.png'

import dt from '../img/mine/dtr.gif'


export default class Mines extends React.Component {
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
            <Grid.Column width='3'><div className='t1' >MineSweeper</div></Grid.Column>
          </Grid.Row>

          <Grid.Row />

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column><div className='t2'>Background</div></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='12'><Container textAlign='justified'><p>
              This is a course project of <i>Programming of Interactive Systems</i> to develop
              a simple version of an interactive game inspired by the legendary legacy game Minesweeper.
              The aim of this redesign is to make it more interesting by adding some new interactions or functions.
            </p></Container></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column><div className='t2'> Implementation</div></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='12'><Container><p>
              This project is built on Java and JavaFX.

            </p></Container></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='12'><div className='t2'>New Interactions</div></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='12'><Container><p>
              - Drag and Drop to use <i>equipment</i> <br />
              - Zoom to select level
            </p></Container></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column><div className='t2'>Interface</div></Grid.Column>
          </Grid.Row>

          <Grid.Row >
            <Grid.Column width={2} />
            <Grid.Column width={4}><Image src={m1} /></Grid.Column>
            <Grid.Column width={4}><Image src={m2} /></Grid.Column>
            <Grid.Column width={4}><Image src={m3} /></Grid.Column>


            <Grid.Column width={2} />
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />

            <Grid.Column width='12'><Container><p>
              Use left-click to explore and right-click to mark, like the original Minesweeper game.
              The color of the marked grid will change to YELLOW.
              And when you click a mine, the grid color will turn to RED.

              There are two buttons. One is ‘Settings’ button and the other is ‘Equipment’ button, showing the equipment you just chose.
            <b>Shield</b> and <b>Timer</b> are triggered automatically.For <b>Detector</b>, you can drag and drop to use it.</p>
              
            </Container>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='6'><Image src={m4} /></Grid.Column>
            <Grid.Column width='6'><Image src={m5} /></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='12'>
            <p><b>Detector</b> can be used to check a 3*3 area. Zoom to go to the level selection.</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='6'><Image src={dt} bordered /></Grid.Column>
            <Grid.Column width='6'><Image src={m6}  /></Grid.Column>

            
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='12'><div className='t2'>Download</div></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='12'><p>
              This program requires JRE. Click <a className='link2'>here</a> to download.
            </p></Grid.Column>
          </Grid.Row>

          

        </Grid>
      </div>


    )
  }

}
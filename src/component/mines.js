import React from 'react'
import { Grid, Image, Header, Container } from 'semantic-ui-react'
import Menubar from './menu'

import './font.css'

import m1 from '../img/mines1.png'
import m2 from '../img/mines2.png'
import m3 from '../img/mines3.png'
import m4 from '../img/mines4.png'
import m5 from '../img/mines5.png'


export default class Mines extends React.Component {
  render() {
    return (
      <Grid padded='vertically'>
        
        <Grid.Row>
          <Grid.Column><Menubar /></Grid.Column>
        </Grid.Row>
        
        <Grid.Row textAlign='center'>
          <Grid.Column width='2'/>
          <Grid.Column width='3'><div className='t1' >MineSweeper</div></Grid.Column>
        </Grid.Row>

        <Grid.Row/>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column><div className='t2'>Background</div></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='2' />
          <Grid.Column width='12'><Container><p>
            This is a course project of <i>Programming of Interactive Systems</i> to develop 
            a simple version of an interactive game inspired by the legendary legacy game Minesweeper.
            The aim of this redesign is to add some new interactions or functions.
            </p></Container></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column><div className='t2'>New Interactions</div></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='2' />
          <Grid.Column width='12'><Container><p>
            - Drag and Drop to use <i>equipment</i> <br/>
            - Zoom out to select level
            </p></Container></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column><div className='t2'>Interface</div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width={2}/>
          <Grid.Column width={4}><Image src={m1} /></Grid.Column>
          <Grid.Column width={4}><Image src={m2} /></Grid.Column>
          <Grid.Column width={4}><Container><p>This is the main scene of MineSweeper.
            When clicking the ‘Play’ button, you are going to choose the equipment.</p>
            </Container></Grid.Column>
          <Grid.Column width={2} />  
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2' />
          <Grid.Column width={8}><Image src={m3} /></Grid.Column>
          <Grid.Column width={4}><Container><p>
            This is the game scene.<br/>
            There is an information area n the top right.
            There are some buttons on the bottom right.  
            One is ‘Settings’ button and the other is ‘Equipment’ button, showing the equipment you just chose.
            <i>Shield</i> and <i>Timer</i> are triggered automatically.For ‘Detector’, you can drag and drop to use it.</p>
          </Container>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2' />
          <Grid.Column width='4'><Image src={m4} /></Grid.Column>
          <Grid.Column width='4'><Image src={m5} /></Grid.Column>
          <Grid.Column width={4}><Container><p>Use left-click to explore and right-click to mark, like the original Minesweeper game. 
            The color of the marked grid will change to YELLOW. 
            And when you click a mine, the grid color will turn to RED.</p>
          </Container></Grid.Column>
        </Grid.Row>
      </Grid>

      
    )
  }

}
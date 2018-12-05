import React from 'react'
import { Grid, Image, Divider, Container } from 'semantic-ui-react'
import Menubar from './menu'

import './font.css'

import wire from '../img/map_wire.png'
import wire_gif from '../img/process.gif'
import map_gif from '../img/map-hi.gif'

export default class Mines extends React.Component {

  state={}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {

    const {contextRef} = this.state
    return (
      <Grid padded='vertically' ref={this.handleContextRef}>
        
        <Grid.Row>
          <Sticky context={contextRef}>
            <Grid.Column><Menubar /></Grid.Column>
          </Sticky>
        </Grid.Row>
        
        <Grid.Row textAlign='center'>
          <Grid.Column width='2'/>
          <Grid.Column textAlign='left' width='12'><div className='t1' >Map-based Itinenary</div></Grid.Column>
        </Grid.Row>

        <Grid.Row/>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column><div className='t2'>Background</div></Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width='2' />
          <Grid.Column width='12'><Container><p>
            The project is an outcome of a 5-day design bootcamp instructed by Wendy E. Mackay. 
            In this bootcamp, We discussed the problems of existing map Apps 
            and redesign a new App to solve these problems by using new interactions.
            The design process is very fast and iterated.<br />
            I have Yuanyang ZHONG, Qiwei GAO, Lemeng XU as my partners.
            </p></Container></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column textAlign='left' width='12'><div className='t2'>Breakdown Analysis</div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width={2}/>
          <Grid.Column width={12}><Container><p>
          - No suggested routes for tomorrow's transportation information<br/>
          - Difficult to find the distance between two places<br/>
          - Unexpected translation for place name<br/>
          - Go into a wrong without notification<br/>
          - Hard to notice metro direction<br/>
          - Check routes a lot of times<br/>
          </p>
            </Container></Grid.Column>
          <Grid.Column width={2} />  
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column textAlign='left' width='12'><div className='t2'>Personnas</div></Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='center'>
          <Grid.Column width={2}/>
          <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' circular />
            <p>
              Name: Ekko<br />
              Professtion: student<br />
              
            </p>
          </Grid.Column>
          
          <Grid.Column width='1'><Divider vertical /></Grid.Column>
          <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' circular />
            <p>Name: Ekko</p>
            <p>Profession: travel writer</p>
          </Grid.Column>
          
          <Grid.Column width='1'><Divider vertical /></Grid.Column>
          <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' circular />
            <p>Name: Ekko</p>
          </Grid.Column>
                    
          <Grid.Column width={2} />  
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column textAlign='left' width='12'><div className='t2'>Design Concept</div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width={2}/>
          <Grid.Column width={12}><Container><p>
            - Help non-local travellers to make an itinenary quickly based on a highly-interactive map
            - Instrumental Design
            The idea of instrumental design is dividing things into domain object or instrument. 
            The key principles are reification, polymorphism and reuse.<br />
            Here the pin on the map and the card in the itinenary are both instrumental. 
            Users can drag, click or pitch to complete different actions. 
            
          </p>
            </Container></Grid.Column>
          <Grid.Column width={2} />  
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column textAlign='left' width='12'><div className='t2'>Video Prototype</div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width={2}/>
          <Grid.Column width={12}><Container><p>
            We made a video prototype to show the process and interactions about how to create an itinenary quickly.
          </p>
            </Container></Grid.Column>
          <Grid.Column width={2} />  
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column textAlign='left' width='12'><div className='t2'>Wireframe</div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width={2}/>
          <Grid.Column width={9}>
            <Image src={wire} />
          </Grid.Column>
          <Grid.Column width={3}><Image src={wire_gif} ></Image></Grid.Column>
          <Grid.Column width={2} />  
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column textAlign='left' width='12'><div className='t2'>Hi-fi Prototype</div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width={2} />
          <Grid.Column width={3}><Image src={map_gif}/></Grid.Column>
          <Grid.Column width={9}><Container><p>
            pictures
          </p>
            </Container></Grid.Column>
          <Grid.Column width={2} />  
        </Grid.Row>

      </Grid>

      
    )
  }

}
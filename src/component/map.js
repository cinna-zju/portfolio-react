import React from 'react'
import { Grid, Image, Divider, Container, Sticky, Embed } from 'semantic-ui-react'
import Menubar from './menu'

import './font.css'

import wire from '../img/map/map_wire.png'
import wire_gif from '../img/map/process.gif'
import map_gif from '../img/map/map-hi.gif'
import paper from '../img/map/paper.jpg'

export default class Map extends React.Component {

  state={}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    
    return (
      <div ref={this.handleContextRef}>
        <Grid>
          <Grid.Column width='16'>
            <Sticky context={contextRef}>
              <Menubar back={true} />
            </Sticky>
            </Grid.Column>
            
        
        <Grid.Row textAlign='center'>
          <Grid.Column width='2'/>
          <Grid.Column textAlign='left' width='12'><div className='t1' >Cityller</div></Grid.Column>
          </Grid.Row>
          
          <Grid.Row>
            <Grid.Column width='14' textAlign='right'><div className='intro'>City + Travller = Cityller, a map-based itinenary App</div></Grid.Column>

          </Grid.Row>

        <Grid.Row/>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column><div className='t2'>Background</div></Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width='2' />
            <Grid.Column width='8'><Container>
              <p>
                Map Apps are almost the same nowadays so they have similiar problems. 
                Here we redesign a Map App for mobile phone to help non-local travellers create their own itinerary quickly.      
              </p>

              <p>
                This was originally a project of the class
                <a className='link2' href='https://ex-situ.lri.fr/workshops/hci-bootcamp-2018'> 2018 HCI bootcamp </a>
                taught by Prof. Wendy Mackay at Université Paris Sud. My team also includes Yuanyang ZHONG, Qiwei GAO, Lemeng XU.
              </p>
            </Container></Grid.Column>
            <Grid.Column width='4'><Image rounded src={paper}></Image></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column textAlign='left' width='12'><div className='t2'>Breakdown Analysis</div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width={2}/>
          <Grid.Column width={12}><Container><p>
          - No suggested routes for tomorrow's transportation information<br/>
          - Unexpected translation for place name<br/>
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

        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={2} textAlign='center'>
              <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' circular />
              <p className='intro'>Jack<br /></p>
          </Grid.Column>

            <Grid.Column width='9'>
              <p>"I travel a lot and I usually change my mind where to go"</p>
              <p>ABOUT<br/>
              Jack is a travel blog writer who travels a lot. This time, he is going to Paris to write a 
                series of artcles about life in Paris.</p>
              <p>BEHAVIOR<br />
                - Interesed in non-popular but beautiful sites<br />
                - Often changes his itinenary </p>

            </Grid.Column>
          </Grid.Row>

          <Grid.Row><Grid.Column width='2'/><Grid.Column width='12'><Divider/></Grid.Column></Grid.Row>

          <Grid.Row >
          <Grid.Column width={2}/>
          <Grid.Column width={2} textAlign='center'>
              <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' circular />
              <p className='intro'>Gabrielle<br /></p>
            </Grid.Column>
            <Grid.Column width='9'>
              <p>"I usually spend a lot of time to search what is the most interesting sightseeing 
                and include them in an itinenary."</p>
              <p>ABOUT<br/>
                Gabrielle is a foreign student in UK.  She likes Jack's blog. 
                This time, she wants to meet Jack in Paris and travel with Jack.
                But She wants to make her itinerary more quickly when she is going to travel.</p>
              <p>BEHAVIOR<br />
              - Not travel too much</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row><Grid.Column width='2'/><Grid.Column width='12'><Divider/></Grid.Column></Grid.Row>


          <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={2} textAlign='center'>
              <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' circular />
              <p className='intro'>Ekko<br /></p>
              
          </Grid.Column>

            <Grid.Column width='9'>
              <p>"Paris is a charming city even in the ordinary streets."</p>
              <p>ABOUT</p>
              <p>Ekko is a local guide at Paris. He knows some intersting but unpopular places.</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row><Divider/></Grid.Row>


        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column textAlign='left' width='12'><div className='t2'>Design Concept</div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width={2}/>
          <Grid.Column width={12}><Container><p>
            Instrumental Design<br/>
            The idea of instrumental design is dividing things into domain object or instrument. 
            The key principles are reification, polymorphism and reuse.<br />
            - Reification is to turn an operation into an object<br/>
            - Polymorphism is to apply one interaction to different objects<br/>
              - Reuse is to reuse the previous input or conmmand<br />
              <br/>
              (source: Beaudouin-Lafon M. Instrumental interaction: an interaction model for designing post-WIMP user interfaces[C]
              //Proceedings of the SIGCHI conference on Human Factors in Computing Systems. ACM, 2000: 446-453.)
                
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
            <Grid.Column width={12} textAlign='center'>
            <Embed id='xB0Z_m1Ihic' source='youtube' />

            {/* <iframe title='Story' width="560" height="315" src="https://www.youtube.com/embed/xB0Z_m1Ihic" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </Grid.Column>
          <Grid.Column width={2} />  
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column textAlign='left' width='12'><div className='t2'>Wireframe</div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width={2}/>
          <Grid.Column width={9}>
            <Image src={wire} rounded />
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
          <Grid.Column width={3}><Image /></Grid.Column>
          <Grid.Column width={9}><Container><p>
            pictures
          </p>
            </Container></Grid.Column>
          <Grid.Column width={2} />  
        </Grid.Row>

        </Grid>
        </div>

      
    )
  }

}
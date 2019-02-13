import React from 'react'
import { Grid, Image, Divider, Container, Breadcrumb } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './font.css'

import paper from '../img/map/paper.jpg'
import hifi from '../img/map/hifi_map2.png'

import mines from '../img/mine.png'


export default class Map extends React.Component {

  render() {


    return (
      <Grid padded='vertically'>
        <Grid.Row>
          <Grid.Column width='3' />

          <Grid.Column textAlign='left' width='12'>
            <Breadcrumb>
              <Breadcrumb.Section link><Link to='/projects'>PROJECTS</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active><div className='t1' >Cityller</div></Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10' textAlign='right'><p>A map-based itinenary App designed for city traveller</p></Grid.Column>
        </Grid.Row>

        <Grid.Row />

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p><b>BACKGROUND</b></p>
            <Container textAlign='justified'>
            <p>
              This is a project of the one-week workshop <a href='https://ex-situ.lri.fr/workshops/hci-bootcamp-2018'> 2018 HCI bootcamp </a>
              taught by Prof. Wendy Mackay at Université Paris Sud. We re-designed a map App for mobile phone to help non-local travellers create their own itinerary quickly.
              </p>

            <p>Our team also includes Yuanyang ZHONG, Qiwei GAO, Lemeng XU. We discussed and did the project together.</p>
            </Container></Grid.Column>

        </Grid.Row>

        <Grid.Row >
          <Grid.Column width='3' />
          <Grid.Column width='10'>
          <p><b>BREAKDOWN</b></p>
            
            <p>
            We interviewed eight users, mainly university students in different domains about their story of using Google Maps. Some questions we asked are the following:<br />
            - Do you remember the experience using Google Maps last time?<br />
            - Can you show me what did you do?<br/>
            - Is there anything unexpected happened?</p>
            <p>Then we got these breakdowns.<br/>
            
            - Spend a lot of time making an itinenary before travel<br />
            - Unexpected translation for place name<br />
            - Hard to notice metro or bus direction<br />
            - Check routes a lot of times<br />
          </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='12'><div className='t2'>User Profile & Personas </div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width='3' />
          <Grid.Column width='10'><p>
            Then we got the user profile from the common points of our interviewees.<br />
            <br />
            Non-local tourist<br />
            - make an rough itinerary before travel<br />
            - familiar with phone<br/>
            - only use map apps to navigate while travelling<br/>
            </p>
            <p>Then we create 3 personas to represent users of our products.
              And Jack is an extreme personna we used to test the usability.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='2' textAlign='center'>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' circular />
            <p className='intro'>Jack<br /></p>
          </Grid.Column>

          <Grid.Column width='8'>
            <p>Jack is a travel blog writer who travels a lot. This time, he is going to Paris to write a
                series of articles about life in Paris.</p>
            <p>BEHAVIOR</p>
              <p>- Interesed in non-popular but beautiful sites<br/>
              - Often change his itinenary<br />
              - Have a lot of places to visit<br/>
            - Want to make his itinerary as soon as possible</p>
            
          </Grid.Column>
        </Grid.Row>

        <Grid.Row><Grid.Column width='3' /><Grid.Column width='10'><Divider /></Grid.Column></Grid.Row>

        <Grid.Row >
          <Grid.Column width='3' />
          <Grid.Column width='2' textAlign='center'>
            <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' circular />
            <p className='intro'>Gabrielle<br /></p>
          </Grid.Column>
          <Grid.Column width='8'>
              <p>Gabrielle is a foreign student in UK.  She likes Jack's blog.
              This time, she wants to meet Jack in Paris and travel with Jack.
                But She wants to make her itinerary more quickly when she is going to travel.</p>
            <p>BEHAVIOR</p>
              <p>- Not travel too much</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row><Grid.Column width='3' /><Grid.Column width='10'><Divider /></Grid.Column></Grid.Row>


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='2' textAlign='center'>
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' circular />
            <p className='intro'>Ekko<br /></p>
          </Grid.Column>

          <Grid.Column width='8'>
            <p>
              Ekko is a local guide at Paris. He knows some intersting but unpopular places.</p>
            <p>BEHAVIOR</p>
              <p>- Know some place unusual</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row><Divider /></Grid.Row>


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'><div className='t2'>Design Concept</div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width='3' />
          <Grid.Column width='10'><Container><p>
            Help non-local travellers create their own itinerary quickly based on an highly interactive map.<br />
            In the past, it is very common to draw and mark something on a paper map. 
            So we want to bring this kind of experience to the mobile device. 
            Users can select places and arrange the visiting order by drawing on the map and create their itinerary.
          </p>
          </Container></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'><div className='t2'>Design Scenario</div></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><p>
            **Persona1**: Gabrielle **Persona2**: Ekko **Extreme Persona**: Jack<br />
            Date: Christmas vacation<br />
            Setting: Paris<br />
            Context: Jack travels to Paris and wants to meet Ekko. They are going to travel together<br />
            **step1**:  Jack wants to meet Ekko<br />
            input location -> show a suggested meeting point -> 1. tag 2. toggle 3. drag along the route<br />
            **step2**: They wants to make a travel plan<br />
            shake the phone to find interested places -> tap to view detailed info -> draw a circle to select locations/ draw line to select and order locations<br />
            **step3**: They wants to edit the travel plan<br />
            drag or click to delete<br />
          </p></Grid.Column>
        </Grid.Row>



        {/* <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column textAlign='left' width='10'><div className='t2'>Design Space</div></Grid.Column>
          </Grid.Row>

          <Grid.Row >
            <Grid.Column width='3' />
            <Grid.Column width='2'><p>Time</p></Grid.Column>
            <Grid.Column width='4'><p>Syncronization</p>
              <p>Routes on the same time using this App
              </p></Grid.Column>
            <Grid.Column width='4'><p>Asyncronizaiton</p>
              <p>Routes on different time when adjusting the timeline
              </p></Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column width='3' />
            <Grid.Column width='2'><p>Speed</p></Grid.Column>
            <Grid.Column width='4'><p>High</p>
              <p>Circle and add all the points in the circle.
              </p></Grid.Column>
            <Grid.Column width='4'><p>Low</p>
              <p>Add points one by one
              </p></Grid.Column>
          </Grid.Row>

          <Grid.Row >
            <Grid.Column width='3' />
            <Grid.Column width='2'><p>Action</p></Grid.Column>
            <Grid.Column width='4'><p>Natural</p>
              <p>Drag the point into the 'backpack'
              </p></Grid.Column>
            <Grid.Column width='4'><p>Less Natural</p>
              <p>Click the point to add it to the 'backpack'
              </p></Grid.Column>
          </Grid.Row> */}

        {/* <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column textAlign='left' width='10'><div className='t2'>Functional Table</div></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='3' />
            <Grid.Column width='10'>
              <Table fixed>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Object</Table.HeaderCell>
                    <Table.HeaderCell>Property</Table.HeaderCell>
                    <Table.HeaderCell>Representation</Table.HeaderCell>
                    <Table.HeaderCell>Function</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Route</Table.Cell>
                    <Table.Cell>start, end, place</Table.Cell>
                    <Table.Cell>line</Table.Cell>
                    <Table.Cell>edit, create, notify</Table.Cell>

                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Location</Table.Cell>
                    <Table.Cell>information, tags</Table.Cell>
                    <Table.Cell>ping</Table.Cell>
                    <Table.Cell>add, delete, see detail</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Time</Table.Cell>
                    <Table.Cell>departure time, duration</Table.Cell>
                    <Table.Cell>timeline</Table.Cell>
                    <Table.Cell>change, set</Table.Cell>
                  </Table.Row>

                </Table.Body>
              </Table>


              <Table fixed>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Function</Table.HeaderCell>
                    <Table.HeaderCell>Object</Table.HeaderCell>
                    <Table.HeaderCell>Interaction</Table.HeaderCell>
                    <Table.HeaderCell>Effect</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Edit</Table.Cell>
                    <Table.Cell>Route</Table.Cell>
                    <Table.Cell>Drag</Table.Cell>
                    <Table.Cell>route changes with the drag point</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Detail</Table.Cell>
                    <Table.Cell>Location</Table.Cell>
                    <Table.Cell>Click</Table.Cell>
                    <Table.Cell>An information card showes up</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Order</Table.Cell>
                    <Table.Cell>Time</Table.Cell>
                    <Table.Cell>Drag and drop</Table.Cell>
                    <Table.Cell>change the order of visiting</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>Set</Table.Cell>
                    <Table.Cell>Time.Duration</Table.Cell>
                    <Table.Cell>pinch</Table.Cell>
                    <Table.Cell>the height of card changes with pinch</Table.Cell>
                  </Table.Row>

                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row> */}

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'><div className='t2'>Paper Prototype</div></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><p>
            We made our paper prototype using transparent clipboard to simulate the interaction process.
            </p></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><Image rounded src={paper} /></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'><div className='t2'>Generative Walkthrough</div></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>We use the principle of <b>instrumental design</b> to evaluate our prototype.</p>
            <p>Instrumental interaction was brought up by Michel Beaudouin-Lafon in his
              <a className='link3' href='https://dl.acm.org/citation.cfm?id=332473'> paper</a>.
            The idea is dividing things into domain object and instrument.
            The key principles are reification, polymorphism and reuse.
            Reification is to turn an operation into an object.
            Polymorphism is to apply one interaction to different objects.
            Reuse is to reuse the previous input or conmmand</p>

            <p>Here are some points we got from this walkthrough.<br /><br />

            - Location Reuse: Search history, exsited point<br />
            - Location Reification: Location selector -> 'bakcpack' -> side bar<br />
            - Place Polymorphism<br />
            {/* - Place Reuse: favorite<br /> */}
            - Event Reification: Delete, modify duration<br />
            {/* - Route Reuse: card view in the itinerary */}
            </p></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'><div className='t2'>Improvements</div></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><p>
            1. Add an interactive area for timeline showing different kinds of information.<br />
            2. Two-finger drawing<br />
            3. Delete<br />
            4. Drag bottom line to set duration of event<br />
            5. Draw line to select and order<br />
            </p></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'><div className='t2'>Revised Design</div></Grid.Column>
        </Grid.Row>

        {/* <Grid.Row >
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>According to these improvements, we added some interaction to the prototype and shot a new video.</p>
            <Embed id='xB0Z_m1Ihic' source='youtube' brandedUI/>
          </Grid.Column>
        </Grid.Row> */}

        <Grid.Row >
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'><div className='t2'>Prototype</div></Grid.Column>
        </Grid.Row>

        <Grid.Row >
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Image src={hifi} rounded />
          </Grid.Column>
        </Grid.Row>


        <Grid.Row verticalAlign='middle'>
          <Grid.Column width='11' />

          <Grid.Column width='3'>
          <Link className='link2' to='/projects/mines'>
                <Image  className='screenshot' rounded src={mines}></Image>
              </Link>
          </Grid.Column>

          <Grid.Column width='1' textAlign='right'>
            <p className='next'>></p> 
          </Grid.Column>
            
        </Grid.Row>

      </Grid>


    )
  }

}
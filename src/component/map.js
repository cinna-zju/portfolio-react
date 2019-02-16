import React from 'react'
import { Grid, Image, Breadcrumb, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Zmage from 'react-zmage'


import './font.css'

import p1 from '../img/map/p1.png'
import p2 from '../img/map/p2.png'
import p3 from '../img/map/p3.png'
import flow from '../img/map/flow.png'
import wire from '../img/map/wire.png'
import f1 from '../img/map/f1.png'
import f2 from '../img/map/f2.png'
import add from '../img/map/add.mov'
import del from '../img/map/del.mov'
import reorder from '../img/map/reorder.mov'



import paper from '../img/map/paper.jpg'

export default class Map extends React.Component {

  render() {

    return (
      <Grid padded='vertically' relaxed>
        <Grid.Row>
          <Grid.Column width='3' />

          <Grid.Column textAlign='left' width='12'>
            <Breadcrumb>
              <Breadcrumb.Section><Link to='/projects'>PROJECTS</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active><div className='t1' >Cityller</div></Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
        </Grid.Row>


        <Grid.Row />

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>Cityller, combination of city and traveller,
               is a map App bringing back on-paper experience to help non-local travellers create their own itinerary quickly.
              </p>
            <p>In the past, it is very common to draw and mark something on a paper map.
            So we want to bring this kind of experience to the mobile device.
            Users can select places and arrange the visiting order by drawing on the map and create their itinerary.</p>

            <p>This is a project of the one-week workshop <a href='https://ex-situ.lri.fr/workshops/hci-bootcamp-2018'>2018 HCI bootcamp</a>, taught by Prof. Wendy Mackay at Université Paris Sud. </p>
          </Grid.Column>

        </Grid.Row>


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'>
            <Header as='h2'>User research</Header>

          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>We interviewed eight users, mainly university students，using <b>story interview</b> method, 
            by asking a user questions that elicit recent stories about specific events or objects relevant to the design brief.
            The most effective story questions take advantage of human memory,
            asking users to recount a highly memorable event (<i>critical incidents</i>), 
            describe how they created a specific object, or describe a routine but extremely recent activity. 
            Some questions we asked are like 'Do you remember the experience using Google Maps last time?', 'Can you tell me what did you do?' and 'Is there anything unexpected happened?'.</p>

            <p>We analyzed the interviews and got some breakdowns.
              Users spent a lot of time making an itinenary before travel and checked routes a lot of times.</p>

            <p>We brainstormed about what are the common problems they have and created 3 personas to represent the common property users of our products.
              And Jon was the extreme personna we used hereto test the usability and helped us find problems. 'Extreme characters' (Djajadiningrat & Gaver, 2000) are those who push the limits of the situation</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row />
        <Grid.Row>
          <Grid.Column width='2' />
          <Grid.Column width='4'><Zmage src={p1} /></Grid.Column>
          <Grid.Column width='4'><Zmage src={p2} /></Grid.Column>
          <Grid.Column width='4'><Zmage src={p3} /></Grid.Column>
        </Grid.Row>
        <Grid.Row />

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>Based on the interview, I created a user flow diagram to help me undestand user's action.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2' />
          <Grid.Column width='12'>
            <Zmage src={flow} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as='h2'>Ideas generation</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>I used the principle of <b>instrumental design</b> to help me generate ideas about interaction.</p>
            <p>Instrumental interaction was brought up by Michel Beaudouin-Lafon in his <a className='link3' href='https://dl.acm.org/citation.cfm?id=332473'>paper</a>.
            The idea is dividing things into domain object and instrument.
            The key principles are reification, polymorphism and reuse.
            Reification is to turn an operation into an object.
            Polymorphism is to apply one interaction to different objects.
            Reuse is to reuse the previous input or conmmand</p>
            <p>Functional table is a very useful tool for instrumental design.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2' />
          <Grid.Column width='12'>
            <Zmage src={f1} />
            <Zmage src={f2} />

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'><Header as='h2'>Design</Header></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='1' />
          <Grid.Column width='14'><Image src={paper} /></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><p>
            We made our paper prototype using transparent clipboard to simulate the interaction process.
            And we shot a video demo to capture our interactions.
            </p></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><p><b>1. Add interesting place</b><br />Draw line passing the object points. The order will be set to the order of passing.</p></Grid.Column>
        </Grid.Row>


        <Grid.Row>
          <Grid.Column width='5' />
          <Grid.Column width='6'>
            <video src={add} width='480' autoPlay={true} loop={true} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><p><b>2. Delete</b><br />Users can simply swipe the bubble out from the sidebar to delete it.</p></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='5' />
          <Grid.Column width='6'>
            <video src={del} width='480' autoPlay={true} loop={true} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><p><b>3. set visiting order</b><br />By drag and drop the place bubble, users can arrange the visiting order.</p></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='5' />
          <Grid.Column width='6'>
            <video src={reorder} width='480' autoPlay={true} loop={true} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h2">Evaluation</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>We showed the video to others and get some feedbacks.</p>
            <p>Then we use <b>generative walkthough</b> to evaluate our product, using the principles of instrument design.</p>
            <p>Here are some points we got from this walkthrough.<br /><br />

              - Location Reuse: Search history, exsited point<br />
              - Location Reification: Location selector -> 'bakcpack' -> side bar<br />
              - Place Polymorphism<br />
              {/* - Place Reuse: favorite<br /> */}
              - Event Reification: Delete, modify duration<br />
              {/* - Route Reuse: card view in the itinerary */}
            </p>
          </Grid.Column>
        </Grid.Row>



        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h2">Wireframe</Header>
          </Grid.Column>
        </Grid.Row>


        <Grid.Row>
          <Grid.Column width='2' />
          <Grid.Column width='12'>
            <Zmage src={wire} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'><Header as="h2">Evaluation</Header></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'><div className='t2'>Improvements</div></Grid.Column>
        </Grid.Row>

      </Grid>


    )
  }

}
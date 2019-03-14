import React from 'react'
import { Grid, Image, Breadcrumb, Header, Divider, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './font.css'

import draw from '../img/map/map3.jpg'

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
import comp from '../img/map/comp.png'



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
            <p>Cityller, combination of city and traveller, is a map App bringing back on-paper experience to help non-local travellers create their own itinerary quickly. 
              
            Users can select places and arrange the visiting order by drawing on the map and create their itinerary accordingly.</p>

            <p>This is originally a project of the one-week workshop <a href='https://ex-situ.lri.fr/workshops/hci-bootcamp-2018'>2018 HCI bootcamp</a>, taught by Wendy Mackay at Université Paris Sud. I worked with Yuanyang ZHONG, Lemeng XU and Qiwei GAO.</p>
          </Grid.Column>

        </Grid.Row>

        <Grid.Row/>

        <Grid.Row>
        <Grid.Column width='3' />
          <Grid.Column width='10'>
          <Image src={draw}/>
            
        </Grid.Column>
        </Grid.Row>
        <Grid.Row/>

        <Grid.Row >
          <Grid.Column width='3' />
          <Grid.Column width='10'>
          <Header as='h2'>User research</Header>
            
            <p>We interviewed eight users, mainly university students, using <b>story interview</b> method, 
            by asking a user questions that elicit recent stories about specific events or objects relevant to the design brief.
            {/* The most effective story questions take advantage of human memory,
            asking users to recount a highly memorable event (<i>critical incidents</i>),  */}
            {/* describe how they created a specific object, or describe a routine but extremely recent activity.  */}</p>

            <p>We analyzed the interviews and got some breakdowns. We grouped these breakdowns and found the main two problems.</p>

            <p><br/><li>Making an itinerary on a map App is difficult</li>
            <li>Itinerary apps don't offer transportation information</li><br/></p>

            <p>We then created 3 personas to represent the common property of users. And Jon was the <b>extreme personna</b> who push the limits of the situation to test the usability.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row />
        <Grid.Row columns='3'>
          <Grid.Column><Image src={p1} /></Grid.Column>
          <Grid.Column><Image src={p2} /></Grid.Column>
          <Grid.Column><Image src={p3} /></Grid.Column>
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
            <Image src={flow} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as='h2'>Brainstorming</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>We compared the map apps, paper maps and travel plan apps. Then we thought bringing the drawing experience on paper map to the mobile device was a good idea.
              We brainstormed and used the principle of <b>instrumental design</b> to help us generate ideas about interaction.</p>
            <Image src={comp}/>
            <p>Instrumental interaction was brought up by Michel Beaudouin-Lafon in his <a className='link3' href='https://dl.acm.org/citation.cfm?id=332473'>paper</a>.
            The idea is dividing things into domain object and instrument.
            The key principles are reification, polymorphism and reuse.</p>
            <p><br/><li>Reification is to turn an operation into an object.</li>
            <li>Polymorphism is to apply one interaction to different objects.</li>
            <li>Reuse is to reuse the previous input or conmmand</li><br/></p>
            <p>We listed the <b>interaction table</b> to help us design something instrumental.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Image src={f1} />
            <Image src={f2} />

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
          <Grid.Column width='10'><p><b>2. Delete</b><br />Users can simply swipe the bubble out from the sidebar to delete it. The sidebar is the reification of a backpack that users can add, delete and sort their objects.</p></Grid.Column>
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
            <p>We showed the video to the classmates in the workshop and got some feedbacks.</p>
            <p>Then we used <b>generative walkthough</b> to evaluate our product, with the principles of instrument design.</p>
            <p>Here are some points we got from this walkthrough.
              <li>Location Reuse: search history, exsited point</li>
              <li>Place reuse: add to favorite</li>
              <li>Event Reification: paper card</li>
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
            <Image src={wire} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as='h2'>Redesign info card</Header>
        </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='4'/>
          <Grid.Column width='8' textAlign='center'>
            <Divider/>
            <Link to="/projects"><Button color='pink'>Back to projects</Button></Link>
          </Grid.Column>
        </Grid.Row>

      </Grid>


    )
  }

}
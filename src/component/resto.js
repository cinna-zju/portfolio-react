import React from 'react'
import { Grid, Image, Breadcrumb, Header, Divider, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './font.css'
import data from '../img/resto/data2.png'
import ming from '../img/resto/ming.png'
import celine from '../img/resto/celine.png'
import kyler from '../img/resto/kyler.png'
import pd1 from '../img/resto/pd1.jpg'
import pd2 from '../img/resto/pd2.jpg'
import wire from '../img/resto/wire.png'
import journey from '../img/resto/journey.png'
import p1 from '../img/resto/p1.png'
import p2 from '../img/resto/p2.png'
import p3 from '../img/resto/p3.png'
import p4 from '../img/resto/p4.png'
import p5 from '../img/resto/p5.png'
import p6 from '../img/resto/p6.png'
import p7 from '../img/resto/p7.png'

import int1 from '../img/resto/int1.mp4'
import int2 from '../img/resto/int2.mp4'
import int3 from '../img/resto/int3.mp4'




export default class Resto extends React.Component {

  render() {

    return (
      <Grid padded='vertically' relaxed>
        <Grid.Row>
          <Grid.Column width='3' />

          <Grid.Column textAlign='left' width='12'>
            <Breadcrumb>
              <Breadcrumb.Section><Link to='/projects'>PROJECTS</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active><div className='t1' >digiCrous</div></Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
        </Grid.Row>


        <Grid.Row />

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>This is a project of <i>Advanced Design of Interactive Systems</i>, taught by Wendy Mackay at Université Paris Sud. </p>
          </Grid.Column>

        </Grid.Row>

        <Grid.Row >
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as='h1'>1 / Discovery</Header>
            <Header as='h2'>User research</Header>
            <p>Crous is a French organization that provides accommodation and meals for students. We tried to improve the dinning experience at Crous restaurant and cafeteria for students.
We interviewed eight users using <b>critical incident interview</b> and made a questionnaire which received 24 responses.</p>
            <p>Here are some results from the <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqeFsoSlZhiZvjPzNCAv7JK1aLH4Ey6m8sbes0aJgo1FvYnA/viewform">questionnaire</a>.</p>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row />
        <Grid.Row/>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column width='12'>
            <Image src={data}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row />
        <Grid.Row />
        
        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>From the interview and questionnaire results, we found that there were 4 common problems.
	            <li>Users don't know the waiting time</li>
              <li>Users don't know the daily menu</li>
              <li>Users don't know the ingredients of the food</li>
              <li>No balance reminder</li><br/></p>
          </Grid.Column>
        </Grid.Row>


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as='h2'>Personas</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='2'>
            <Image src={ming} circular />
          </Grid.Column>

          <Grid.Column width='8'>
            <p><b>Ming</b></p>
            <p>24, international student</p>
            <p>
              <li>Has trouble communicating with servers and shy to ask for help</li>
              <li>Wants to know the menu in advance, so he can plan what to eat (allergic to gluten)</li>
              <li>He wants to eat in the restaurant independently</li>
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='2'>
            <Image src={celine} circular />
          </Grid.Column>

          <Grid.Column width='8'>
            <p><b>Céline</b></p>
            <p>23, French student</p>
            <p>
              <li>has tight schedule and usually doesn't have time for lunch</li>
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='2'>
            <Image src={kyler} circular />
          </Grid.Column>

          <Grid.Column width='8'>
            <p><b>Kyler</b></p>
            <p>26, exchange student athlete</p>
            <p>
              <li>cares extremely about what he eats</li>
              <li>Wants to know the ingredients of the food</li>
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as='h2'>User journey</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column width='12'>
            <Image src={journey}/>
          </Grid.Column>
        </Grid.Row>


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as='h1'>2 / Invention</Header>
            
            <Header as='h2'>Brainstorming</Header>
            <p>We generated some ideas by oral brainstorming trying to solve these problems. Then we voted to select better ideas.</p>
            <p>
              The selected ideas are:<br />
              <li>
                Three levels and estimated waiting time
              </li>
              <li>
                Indoor map and friends's locations
              </li>
              <li>
                Options to filter food by category
              </li>
              <li>
                Balance reminder
              </li>
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as='h1'>3 / Design</Header>
            
            <p>We still used the <b>instrumental design</b> principle.</p>
            <Header as="h2">Design Concept</Header>
            <p>Designing a student-centered cafeteria experience by reducing wait time, ability to track calories, and customizing menu choice.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h2">Participatory Design</Header>
            <p>This technique is to bring users and designers together for collaborative exploration of ideas. We designed 3 activities to help us generate ideas in specific directions.</p>
            <Header as="h3">Activity 1: linking</Header>
            <p><i>Users will see some pictures of different kinds of food and link whatever they think about to the food.Users will group some kinds of food by color according to their feel.</i></p>
            <p>This activity gave us some hints about what kind of information users wanted to know about food. The result was similiar to what we expected. Users cared about ingredients, nutrition and flavor. But using color to group food was not a good idea, since users had different understanding about colors.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='5'>
            <Image src={pd1} />
          </Grid.Column>
          <Grid.Column width='5'><Image src={pd2} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h3">Activity 2: fill in the blanks</Header>
            <p><i>When I think of food, I think ____. The cafeteria helps me achieve this by ___, but doesn’t take into account ___.</i></p>
            <p>This activity made it more clear about user needs.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h3">Activity 3: brainstorming</Header>
            <p><i>In groups of 2, describe your lunch experience at Crous restaurants. What are the top 3 drawbacks? Rank your order (add as necessary), and explain why</i></p>
            <p>This activity helped us understand the real problems and supported what we got from interviews and the questionnaire.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as='h2'>Prototype</Header>
        </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column width='2' />
          <Grid.Column width='3'><p>Nearby</p><Image src={p1} /></Grid.Column>
          <Grid.Column width='3'><p>Menu</p><Image src={p2} /></Grid.Column>
          <Grid.Column width='3'><p>Details</p><Image src={p3} /></Grid.Column>
          <Grid.Column width='3'><p>Recharge notification</p><Image src={p4}/></Grid.Column>
        </Grid.Row>

        <Grid.Row/>
        <Grid.Row/>


        <Grid.Row>
        <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>Then we captured some key interactions.</p>
        </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='4'><p>Add a dish to my plate</p></Grid.Column>
          <Grid.Column width='4'><p>Choose a filter</p></Grid.Column>
          <Grid.Column width='4'><p>get my choice last time</p></Grid.Column>
        </Grid.Row>


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='4'>
            <video src={int1} width='240' autoPlay={true} loop={true} />
          </Grid.Column>
          <Grid.Column width='4'>
          <video src={int2} width='240' autoPlay={true} loop={true} />
            
          </Grid.Column>
          <Grid.Column width='4'>
          <video src={int3} width='240' autoPlay={true} loop={true} />
            
          </Grid.Column>

        </Grid.Row>

        <Grid.Row/>
        <Grid.Row/>



        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h1">4 / Evaluation</Header>
            <p>In the redesign part, we included several socio-technical principals in our design. We considered <b>situated action</b> and <b>co-adaptation</b>.</p>
            <p>Situated action is about situations beyond planning and how to act in unforeseen circumstances. Co-adaptation is about re-interpret use.</p>
            <p>Our classmates did a walkthrough on our video and gave us some feedbacks.
              <li>Add a pre set filter</li>
              <li>Add a historic statistic data chat of crowd level</li>
              <li>Add a price tag after user finished their choice</li>
              <li>Add a notification when some food user chose have sold out</li>
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h1">5 / Redesign</Header>
           

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column width='3' />
          <Grid.Column width='3'><p>User profile</p><Image src={p5} /></Grid.Column>
          <Grid.Column width='3'><p>Busy time</p><Image src={p6} /></Grid.Column>
          <Grid.Column width='3'><p>Something sold out</p><Image src={p7} /></Grid.Column>
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
          <Image src={wire}/>
            
        </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='4'/>
          <Grid.Column width='8' textAlign='center'>
            <Divider/>
            <Link to="/projects"><Button color='yellow'>Back to projects</Button></Link>
          </Grid.Column>
        </Grid.Row>

      </Grid>


    )
  }

}
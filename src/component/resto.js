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
            <p>Crous is a French organization that provides accommodation and meals for students. We tried to improve the dinning experience at Crous restaurant and cafeteria.
We interviewed eight users using critical incident interview and made a questionnaire receiving 12 responses.</p>
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
            <p>From our interviews and peer introspection, we got a user journey.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row />
        <Grid.Row/>

        

        <Grid.Row>
          <Grid.Column width='2'/>
          <Grid.Column width='12'>
            <Image src={journey}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row />
        <Grid.Row/>


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>From the interview and questionnaire results, we found that there were 3 common problems.
	            <li>not know the waiting time</li>
              <li>not know the daily menu</li>
              <li>not know the ingredients of the food</li></p>
            <p>Another problem is about payment. Many people have mentioned that they found they didn't have enough balance in their card when they paid the food. So they have to recharge it at the counter that cost a lot of time.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as='h1'>2 / Invention</Header>
            
            <Header as='h2'>Personas</Header>
            <p>So we create some personas to represent the user who we designed for.</p>
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
            <Header as='h2'>Brainstorming</Header>
            <p>We generated some ideas by oral brainstorming trying to solve these problems. Then we voted to select better ideas.</p>
            <p>
              The selected ideas are:<br />
              <li>
                Three levels and estimated waiting time
              </li>
              <li>
                empty space
              </li>
              <li>
                options to filter food by category
              </li>
              <li>
                balance reminder
              </li>
            </p>

            <p>The other ideas includes a kiosk showing the daily menu information on the class building,
            AR app for food adding a information layer on the food,
            iPad near the food counter showing the information like vending machine,
            preview the menu at the front door and paper / color ink on the plate,
            </p>

            

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as='h1'>3 / Design</Header>
            
            <Header as="h2">Design Concept</Header>
            <p>Designing a student-centered cafeteria experience by reducing wait time, ability to track calories, and customizing menu choice.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h2">Participatory Design</Header>
            <p>This technique is to bring users and designers together for collaborative exploration of ideas. We designed 3 activities.</p>
            <Header as="h3">Activity 1: linking</Header>
            <p>Users will see some pictures of different kinds of food and link whatever they think about to the food.Users will group some kinds of food by color according to their feel.</p>
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
            <p>When I think of food, I think ____. The cafeteria helps me achieve this by ___, but doesn’t take into account ___.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h3">Activity 3: brainstorming</Header>
            <p>In groups of 2, describe your lunch experience at Crous restaurants.
What are the top 3 drawbacks? Rank your order (add as necessary), and explain why
o Lunch lines too crowded
o Unknown content/ ingredients of food not shown
o Not knowing menu in advance
o Incorrect combination of food
o Inadequate signage
o Other:___
</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h2">Evaluation</Header>
            <p>
              <li>Changed the filter categories to two groups: pre-set and filter by food type</li>
              <li>add a historic statistic data chat of crowd level</li>
              <li>add a price tag after user finished their choice</li>
              <li>add a notification when some food user chose have sold out</li>
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h2">Re-design</Header>
            <p>In the redesign part, we included several socio-technical principals in our design. We considered <b>situated action</b> and <b>co-adaptation</b>.</p>
            <p>Situated action is about situations beyond planning and how to act in unforeseen circumstances. Co-adaptation is about re-interpret use.</p>

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
          <Image src={wire}/>
            
        </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column textAlign='left' width='10'><div className='t2'>Improvements</div></Grid.Column>
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
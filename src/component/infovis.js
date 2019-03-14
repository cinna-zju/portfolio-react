import React from 'react'
import { Grid, Image, Breadcrumb, Embed, Header, Divider, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// import './font.css'

import main from '../img/infovis/main.png'
import detail from '../img/infovis/detail.png'
import sketch from '../img/infovis/sketch.png'
import sub from '../img/infovis/sub.png'
import line from '../img/infovis/line.png'
import grid from '../img/infovis/grid.png'
import group from '../img/infovis/group.mov'
import indicator from '../img/infovis/indi.png'
import intro from '../img/infovis/intro.png'


export default class Infovis extends React.Component {
  render() {
    const bg = {
      backgroundColor: "#333333",
      color: "#eeeeee"
      
    }

    const c1 = {
      backgroundColor: "#ff5562"
    }

    const c2 = {
      backgroundColor: "#ffb43a"
    }

    const c3 = {
      backgroundColor: "#776ce2"
    }

    const grey = {
      backgroundColor: "#4f4f4f"
    }

    const bgg = {
      backgroundColor: "#333333"
    }

    const color = {
      color: "#ffffff",
    }


    return (

      <Grid padded='vertically' style={bg} className="reversed">

        <Grid.Row>
          <Grid.Column width='3' />

          <Grid.Column textAlign='left' width='12'>
            <Breadcrumb>
              <Breadcrumb.Section><Link to='/projects'>PROJECTS</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active><Header as='h1' inverted>Visualization</Header></Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Image src={main}/>
            <p><br/>We developed this platform using <a href="https://p5js.org">p5.js</a>. Click <a className='link3' href='https://cinna-zju.github.io/infoVis/test/'>Here</a> to try it. </p>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h2" inverted>Introduction</Header>
            <p>Emmanouil Giannisakis and Gilles Bailly, researchers at Sorbonne Université, are studying how people transit from menu selection to keyboard shortcuts. They have a dataset about how users' behavior changes regarding performance
              and strategy choice while they selected commands.</p>
              <Image src={intro}/>
            
            <p>The goal of this visualization is to present the entire data set in a visual form so that they can observe and compare the data of each subject, and discover some common patterns.</p>


            <p>This is the project of the course <i>Infomation Visualization</i> at Université Paris Sud. I worked with Lemeng Xu. My work is coding and designing the visualization.</p>

          </Grid.Column>
        </Grid.Row>




        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
          <Header as="h2" inverted>Design</Header>
            
            <p>In the class, we learned how to use visual elements, like shape, size, color, shadow, transparancy and motion, to represent the data and the relationship behind it.</p>
            <p>At first, we talked with Emmanouil and Gilles to know what the question is. They introduced the dataset to us and showed their past work. Then we found their main concern is about <b>TRANSITION</b>.</p>
            <p>Since there are about 20k rows of data, the concept of our design is to divide it, first by subjects, then by commands and finally by trials. Different information is displayed according to the different views.</p>
            <p>In the sketch phase, we used the <b>10 plus 10 method</b> to come up some ideas. Based on a common starting point, group members work individually to quickly sketch several ideas each, making around 10 ideas per group. They share the ideas within the group and choose one sketch as the starting point for the next round.  </p>
            <p>The graphs in the first column are from the first phase. The other graphs are some variations.</p>
  
          </Grid.Column>
        </Grid.Row>

        <Grid.Row/>
        <Grid.Row>
        <Grid.Column width='2' />
          <Grid.Column width='12'>
          <Image src={sketch} />
            
        </Grid.Column>
        </Grid.Row>
        <Grid.Row />

        <Grid.Row>
        <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p>Then we talked with them again about the first demo and our ideas. They liked it and wanted to see some high-level information. Then we add some new graphs and modified our design based on the first demo.</p>
        </Grid.Column>
        </Grid.Row>


        
        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h3" inverted>Color map</Header>
            
            <p> we used the color map of red, yellow and purple to represent different phases of transitions. Grey means no transition. Vivid colors are clear on the grey background and can attract user's attention.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='center' style={color}>
          <Grid.Column width='3' />

          <Grid.Column width='2' style={c1}><p>#ff5562</p></Grid.Column>
          <Grid.Column width='2' style={c2}><p>#ffb43a</p></Grid.Column>
          <Grid.Column width='2' style={c3}><p>#776ce2</p></Grid.Column>
          <Grid.Column width='2' style={grey}><p>#4f4f4f</p></Grid.Column>
          <Grid.Column width='2' style={bgg}><p>#333333</p></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h3" inverted>Elements</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row verticalAlign='middle'>
          <Grid.Column width='3'/>
          <Grid.Column width='2'><Image src={sub} /></Grid.Column>
          <Grid.Column width='8'>
            <p>We used bar chart to show the data of one subject. Each subject had different action preference. The bar chart showed how the subject reacted to different commands and his preference.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row verticalAlign='middle'>
          <Grid.Column width='3'/>
          <Grid.Column width='2'><Image src={line} /></Grid.Column>
          <Grid.Column width='8'>
            <p>The other thing we cared is the action time. We had the time of each trial. At first,  we ploted a scatter graph. Then we changed it to the line graph to see the trends better. Finally, we fill the color to represent the transition phase. The white point means the average time of each phase.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row verticalAlign='middle'>
          <Grid.Column width='3'/>
          <Grid.Column width='2'><Image src={grid} /></Grid.Column>
          <Grid.Column width='8'>
            <p>To compare the estimated phase and actual states of each trials better, we added a grid graph showing the method a subject used in each trial.</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h3" inverted>Interaction</Header>
            <p>We decided to develop this visualization on web. Comparing to other solutions, like tableau or static pictures, web-based visualization can be highly customized.</p>
          <p>The interaction method is mouse and keyboard. Users can use mouse to select subjects and use keyboard to switch the subject they are viewing. Then we came up an idea to use the mouse cursor as an indicator showing the detail information.</p>
          <p>The cursor moves on the line chart. The corresponding grid will be highlighted and information will be displayed.</p>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row/>
        <Grid.Row>
          <Grid.Column width='4' />
          <Grid.Column width='8'><Image src={indicator} /></Grid.Column>
        </Grid.Row>
        <Grid.Row/>


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h3" inverted>Visual feedback</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='5'><video width='100%' autoPlay={true} loop={true}><source src={group} /></video></Grid.Column>
          <Grid.Column width='5'>
            
          <p>We add some visual feedbacks to make it more smooth. For example, when the mouse hovers on the blocks of small multiple views, the hovered one will be highlighted. In the detail view, the bar in the center block hovered will be added a white border.</p>
          <p>We also add some animations for grouping and switching. These animations help users to be aware of the original and current position of each subject.</p>

          </Grid.Column>
          
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3'></Grid.Column>
          <Grid.Column width='10'>
            <Header as="h3" inverted>Layout</Header>
            
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='5'><Image src={detail} /></Grid.Column>
          <Grid.Column width='5'><p>The advantage of this layout is that researchers can compare the data of 42 subjects
                    and go deep into the experimental data of each subject to seek subtle and interesting findings.
              </p>       </Grid.Column>
        </Grid.Row>



        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Header as="h2" inverted>Video</Header>

            <p>This is a demo video showing the feature and the usage of this platform.</p>

            <Embed id='eTaAYefbg_M' source='youtube' brandedUI />

          </Grid.Column>

        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='4'/>
          <Grid.Column width='8' textAlign='center'>
            <Divider inverted/> 
            <Link to="/projects"><Button color='grey' inverted>Back to projects</Button></Link>
          </Grid.Column>
        </Grid.Row>


      </Grid>
    )
  }
}
import React from 'react'
import { Grid, Image, Breadcrumb, Embed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// import './font.css'

import main from '../img/infovis/main.png'
// import group from '../img/infovis/group.png'
import detail from '../img/infovis/detail.png'
import sketch from '../img/infovis/sketch.png'
import sub from '../img/infovis/sub.png'
import line from '../img/infovis/line.png'
import grid from '../img/infovis/grid.png'
import group from '../img/infovis/group.mov'


export default class Infovis extends React.Component {
  render() {
    const bg = {
      backgroundColor: "#333333",
      color: "#bababa"
      
    }

    const shadow = {

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
              <Breadcrumb.Section><Link className="link2" to='/projects'>PROJECTS</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active><div className='t1' >Visualization</div></Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <Image src={main} style={shadow} rounded />
            <p>Click <a className='link3' href='https://cinna-zju.github.io/infoVis/test/'>Here</a> to try it.</p>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <div className='t2'>Introduction</div>


            <p>
              We work with Emmanouil Giannisakis on one of his current study which investigates
            how people transition from using one method to complete a task to a more efficient one within
            the context of command selection. For example, from menu to keyboard shortcuts. Our goal is
            to present the entire data set in a visual form so that they can observe
            and compare the data of each subject, and discover the common patterns that may appear during the shortcut key conversion process.
              </p>


            <p>This dataset contains information about how users' behavior change regarding performance
              and strategy choice while they selected commands.
              In total it includes 42 different users, and each user had to choose 14 commands multiple times.
              So the dataset contains 588 time series in total.</p>

            <p>This is the project of the course <i>Infomation Visualization</i> at Université Paris Sud.
              I worked with Lemeng Xu to do this project. My work is coding and designing the visualization.</p>
            <p>We developed this platform using <a href="https://p5js.org">p5.js</a>.</p>

          </Grid.Column>
        </Grid.Row>




        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <div className='t2'>Design</div>
            <p>In the class, we learned how to use visual elements, like shape, size, color, shadow, transparancy and motion,
              to represent the data and the relationship behind it.</p>

            <p>
              {/* Click <a className='link3' href='https://github.com/cinna-zju/infoVis'>HERE</a> to see the source code. */}

            </p>
            <p>The concept of our design is to divide it. First divide it by subjects,
              then by commands and finally by trials. And in each dividing view,
              we show a different part of the dataset to make the information shown consistent with the view.
              Our visualization is based on the web to provide a better interaction and higher customization.
            </p>
            <p>In the sketch phase, We used the 10+10 method to come up some ideas. </p>
            <Image src={sketch} rounded />
            <p />


          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p><b>Color map</b></p>
            <p> we used the color map of red, yellow, purple and grey to represent different phases of transitions.
              The three colors are clear on the grey background and can attract user's attention.</p>
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
            <p><b>Elements</b></p>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3'/>
          <Grid.Column width='2'><Image src={sub} /></Grid.Column>
          <Grid.Column width='8'>
            <p>After talking with some researchers, we finally decides to use bar chart to show the data of one subjec.
            Because the transition has a strong relationship to the subject's action. 
              In the bar chart, we can easily find out how the subject react to different commands.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3'/>
          <Grid.Column width='2'><Image src={line} /></Grid.Column>
          <Grid.Column width='8'>
            <p>The other data we cared is the action time. We have the time of each trial. 
              At first,  we ploted a scatter graph. 
              Then we changed it to the line graph to see the trends better.
              Finally, we fill the color to represent the transition phase.
              
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3'/>
          <Grid.Column width='2'><Image src={grid} /></Grid.Column>
          <Grid.Column width='8'>
            <p>To compare the estimated phase and actual states better, 
              we add a grid graph showing the method subjects used in each trial. 
              And this grid graph is aligned to the line graph by trial number.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <p><b>Visual feedback</b></p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='5'><video width='100%' autoPlay={true} loop={true}><source src={group} /></video></Grid.Column>
          <Grid.Column width='5'>
            
          <p>We add some visual feedbacks to make it more smooth.
              For example, when the mouse hovers on the blocks of small multiple views,
              the hovered one will be highlighted. In the detail view,
                      the bar in the center block hovered will be added a white border.
              We also add some animations for grouping and switching.</p>

          </Grid.Column>
          
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3'></Grid.Column>
          <Grid.Column width='10'>
            <p><b>Layout</b></p>

            
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
            <div className='t2'>Video Demo</div>
            <p>This is a demo video showing the feature and the usage of this platform.</p>

            <Embed id='eTaAYefbg_M' source='youtube' brandedUI />

          </Grid.Column>

        </Grid.Row>


      </Grid>
    )
  }
}
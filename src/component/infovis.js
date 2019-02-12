import React from 'react'
import { Grid, Image, Container, Breadcrumb, Embed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './font.css'

import main from '../img/infovis/main.png'
import group from '../img/infovis/group.png'
import detail from '../img/infovis/detail.png'
import sketch from '../img/infovis/sketch.png'


export default class Infovis extends React.Component {
  render() {
    const bg = {
      backgroundColor: "#232323",
      color: "#dadada"
    }

    const shadow = {
      // boxShadow: "0 8px 20px #333333"
    }


    return (

      <Grid padded='vertically' style={bg}>

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
          <Grid.Column width='10'><Container textAlign='justified'>
          <div className='t2'>Introduction</div>
            
            <p>This is the project of the course <i>Infomation Visualization</i> at Université Paris Sud.
              I worked with Lemeng Xu to do this project. My work is coding and part of the design.</p>
            <p>
              By working with Emmanouil Giannisakis on one of his current study which investigates
            how people transition from using one method to complete a task to a more efficient one within
            the context of command selection and the transition from menus to keyboard shortcuts, our goal is
            to present the entire data set in front of the researcher in a visual form so that they can observe
            and compare the data of each subject, and discover the common patterns that may appear during
            the shortcut key conversion process. </p>

            <p>Our goal is to present the entire data set in front of the researcher in a visual form so that
              they can observe and compare the data of each subject,
              and discover the common patterns that may appear during the shortcut key conversion process.
              The advantage of our tools is that researchers can compare the data of 42 subjects
              and go deep into the experimental data of each subject to seek subtle and interesting findings.
            </p>
            <p>This dataset contains information about how users' behavior change regarding performance
              and strategy choice while they selected commands.
              In total it includes 42 different users, and each user had to choose 14 commands multiple times.
              So the dataset contains 588 time series in total.</p>
            <p>This project is developed with p5.js.</p>

          </Container></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='5'><Image src={group} style={shadow} rounded /></Grid.Column>
          <Grid.Column width='5'><Image src={detail} style={shadow} rounded /></Grid.Column>
        </Grid.Row>


        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'>
            <div className='t2'>Design</div>
            
            <Container><p>
            {/* Click <a className='link3' href='https://github.com/cinna-zju/infoVis'>HERE</a> to see the source code. */}

          </p>
            <p>The concept of our design is to divide it. First divide it by subjects,
              then by commands and finally by trails. And in each dividing view,
              we show a different part of the dataset to make the information shown consistent with the view.
              Our visualization is based on the web to provide a better interaction and higher customization.
            </p>
            <p>In the sketch phase, We used the 10+10 method to come up some ideas. </p>
            <Image src={sketch} rounded/>

            <p>To make the visualization more user-friendly,
              we add some feedbacks. For example, when the mouse hovers on the blocks of small multiple views,
              the hovered one will be highlighted. In the detail view,
              the bar in the center block hovered will be added a white border.
              We also add some animations for grouping and switching to make it look nice.</p>
            
            <Embed id='eTaAYefbg_M' source='youtube' brandedUI />



          </Container></Grid.Column>
        </Grid.Row>


      </Grid>
    )
  }
}
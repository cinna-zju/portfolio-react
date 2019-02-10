import React from 'react'
import { Grid, Image, Container, Breadcrumb } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './font.css'

import main from '../img/infovis/main.png'
import group from '../img/infovis/group.png'
import detail from '../img/infovis/detail.png'


export default class Infovis extends React.Component {
  render() {
    return (
      <Grid padded='vertically'>

        <Grid.Row>
          <Grid.Column width='3' />

          <Grid.Column textAlign='left' width='12'>
            <Breadcrumb>
              <Breadcrumb.Section link><Link to='/projects'>PROJECTS</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active><div className='t1' >Visualization</div></Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row />
        <Grid.Row />

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column><div className='t2'>Introduction</div></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><Container textAlign='justified'>
            <p>This is the project of the course Infomation Visualization at Université Paris Sud.
              I worked with Lemeng Xu to do this project. My work is coding and part of the design.</p>
            <p>
            We worked with Emmanouil on one of his current study which is based on 
            Grossman et al.’s research investigates alternative menu designs that can motivate and 
            help users remember associations between menu commands and hotkeys. 
            From the experiment they got a huge data set contains, but the author only uses it to compare different techniques. </p>
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
          <Grid.Column width='5'><Image src={main} rounded /></Grid.Column>
          <Grid.Column width='5'><Image src={group} rounded/></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><Image src={detail} rounded/></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column><div className='t2'>Design</div></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='3' />
          <Grid.Column width='10'><Container><p>
            {/* Click <a className='link3' href='https://github.com/cinna-zju/infoVis'>HERE</a> to see the source code. */}

            </p>
            <p>The concept of our design is to divide it. First divide it by subjects, 
              then by commands and finally by trails. And in each dividing view, 
              we show a different part of the dataset to make the information shown consistent with the view.
              Our visualization is based on the web to provide a better interaction and higher customization.
            </p>
            <p>To make the visualization more user-friendly, 
              we add some feedbacks. For example, when the mouse hovers on the blocks of small multiple views, 
              the hovered one will be highlighted. In the detail view, 
              the bar in the center block hovered will be added a white border. 
              We also add some animations for grouping and switching to make it look nice.</p>
            
              <p>Click <a className='link3' href='https://cinna-zju.github.io/infoVis/test/'>Here</a> to try it.</p>

          </Container></Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}
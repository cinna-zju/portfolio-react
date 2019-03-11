import React from 'react'
import { Grid, Icon, Header } from 'semantic-ui-react'
import Menubar from './menu2'
import Typed from 'react-typed'
import resume from '../resume.pdf'

import './font.css'

export default class Home extends React.Component {

  state = { visible: false, hover: false }


  componentDidMount() {
    this.setState({ visible: true })
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  render() {

    

    return (

      <Grid padded='vertically'>

        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>



        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={10}>
            <p className='preface'>
              : )
              <br />Hi, I'm <a href={resume}>Shuo</a>,<br />
                <span>a </span>
                <Typed
                strings={[
                  'UX designer',
                  'coder',
                  'HCID student'
                  ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                showCursor={false}
              >
              </Typed>
            </p>


          </Grid.Column>
        </Grid.Row>
        {/* ENFP-A */}
        <Grid.Row>
          <Grid.Column width='1' />
          <Grid.Column width='4'>
            <Header icon='linkedin' color='grey' as='a' href="https://www.linkedin.com/in/shuoyang-en/" />
            <Header icon='github' color='grey' as='a' href='https://github.com/cinna-zju'></Header>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>


        <Grid.Row verticalAlign='bottom' >
          <Grid.Column width='1' />
          <Grid.Column width='14' textAlign='left'>
            <Menubar active='home' color='black' />
          </Grid.Column>
        </Grid.Row>


        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>


        <Grid.Row verticalAlign='middle'>
          <Grid.Column width='1' />
          <Grid.Column width='4' textAlign='center'>
            <Icon name='child' size='huge' color='grey'></Icon>

          </Grid.Column>
          <Grid.Column width='1' />
          <Grid.Column width='4' textAlign='center'>
            <Icon name='map marker alternate' size='huge' color='grey'></Icon>

          </Grid.Column>
          <Grid.Column width='1'></Grid.Column>

          <Grid.Column width='4' textAlign='center'>
            <Icon name='quidditch' size='huge' color='grey'></Icon>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='1' />
          <Grid.Column width='4'>
            <p className="tl_text"><br />Grown up in Yichang, China, a city near the 3rd longest river in the world. Begin observing the world since then.</p>
          </Grid.Column>
          <Grid.Column width='1' />
          <Grid.Column width='4'>
            <p className="tl_text"><br />Love travelling and want to experience more.
            <br />.</p>
          </Grid.Column>
          <Grid.Column width='1' />
          <Grid.Column width='4'>
            <p className="tl_text"><br />Big fan of Harry Potter.<br />Read Harry Potter book 1 to 6 for 4 times.</p>
          </Grid.Column>
        </Grid.Row >

        <Grid.Row />
        <Grid.Row >
          <Grid.Column width='12'></Grid.Column>
          <Grid.Column width='2' textAlign='center'></Grid.Column>
        </Grid.Row>
        <Grid.Row />


        <Grid.Row verticalAlign='middle'>
          <Grid.Column width='1' />
          <Grid.Column width='4' textAlign='center'>
            <Icon name='university' size='huge' color='grey'></Icon>
          </Grid.Column>

          <Grid.Column width='1'></Grid.Column>

          <Grid.Column width='4' textAlign='center'>
            <Icon name='code' size='huge' color='grey'></Icon>
          </Grid.Column>

          <Grid.Column width='1'></Grid.Column>

          <Grid.Column width='4' textAlign='center'>
            <Icon name='lemon' size='huge' color='grey'></Icon>
          </Grid.Column>
        </Grid.Row>

        <Grid.Column width='1' />
        <Grid.Column width='4'>
          <p className="tl_text"><br />Studied optics, electronics and programming at <a href='https://www.zju.edu.cn'>Zhejiang University</a>.
            <br />Now, master student of <a href='https://www.eitdigital.eu/'>EIT Digital Academy</a>. First year at Université Paris Sud, France</p>
        </Grid.Column>

        <Grid.Column width='1' />
        <Grid.Column width='4'>
          <p className="tl_text"><br /> A UX designer and a front-end coder.<br/>Familiar with Sketch, Overflow, Photoshop,<br/>HTML/CSS/Javascript, React, python </p>
        </Grid.Column>
        <Grid.Column width='1' />
        <Grid.Column width='4'>
          <p className="tl_text"><br /> Lemonade is one of my favorite drink so I am open-minded.</p>
        </Grid.Column>
        <Grid.Row />

        <Grid.Row/>

        <Grid.Row>
          <Grid.Column width='16' textAlign='center'>

          </Grid.Column>
        </Grid.Row>



        <Grid.Row>
        <Grid.Column width='5' />
          <Grid.Column width='6' textAlign='center'>
            <Header as="h5" color='grey'>
              Built with love by Shuo with React.<br/>All rights reserved.
            </Header>
        </Grid.Column>
        </Grid.Row>

      </Grid >






    )
  }
} 

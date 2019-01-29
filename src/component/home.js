import React from 'react'
import { Grid, Header, Icon, Popup } from 'semantic-ui-react'
import Menubar from './menu2'
import { Link } from 'react-router-dom'

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
    const timeline = {
      background: "#ffbe61",
      color: '#ffffff',

    }
    const collection = {
      background: "#8b80ff",
      color: '#ffffff',

    }




    return (

      <Grid>

        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>


        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={10}>
            <p className='preface'>Bonjour. <br />I'm <Popup size='large' position='right center' trigger={<a>Shuo</a>}>Shuo Yang, and my Chinese name is 杨烁.</Popup>,<br />
              a <Popup size='large' position='bottom left' trigger={<a>HCID</a>}>Human Computer Interaction and Design</Popup> student.</p>
          </Grid.Column>
        </Grid.Row>
        {/* ENFP-A */}

        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>

        <Grid.Row verticalAlign='bottom' >
          <Grid.Column width='1' />
          <Grid.Column width='14' textAlign='left'>
            <Menubar active='home' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={timeline} />
        <Grid.Row style={timeline} />
        <Grid.Row style={timeline} />
        <Grid.Row style={timeline} />



        <Grid.Row style={timeline}>
          <Grid.Column width='1' />
          {/* <Grid.Column width='6'><p>Timeline</p></Grid.Column>  */}
        </Grid.Row>


        <Grid.Row style={timeline} verticalAlign='middle'>
          <Grid.Column width='1' />
          <Grid.Column width='4' textAlign='center'>

            <Icon name='child' size='huge'></Icon>
            <p className="tl_text"><br />I was born in Yichang, China, a small city near Yangzt River</p>

          </Grid.Column>
          <Grid.Column width='1'>
            <Icon name='arrow right' size='huge' />
          </Grid.Column>
          <Grid.Column width='4' textAlign='center'>
            <Icon name='map marker alternate' size='huge'></Icon>
            <p className="tl_text"><br />Travel to Beijing. 1000+ km away from home</p>
          </Grid.Column>
          <Grid.Column width='1'>
            <Icon name='arrow right' size='huge' />
          </Grid.Column>

          <Grid.Column width='4' textAlign='center'>
            <Icon name='quidditch' size='huge'></Icon>
            <p className="tl_text"><br />Read Harry Potter book 1 to 6 for 4 times.</p>
          </Grid.Column>

        </Grid.Row>

        <Grid.Row style={timeline} />
        <Grid.Row style={timeline}>
          <Grid.Column width='12'></Grid.Column>
          <Grid.Column width='2' textAlign='center'>
            <Icon name='arrow down' size='huge' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={timeline} />


        <Grid.Row style={timeline} verticalAlign='middle'>
          <Grid.Column width='1' />
          <Grid.Column width='4' textAlign='center'>
            <Icon name='university' size='huge'></Icon>
            <p className="tl_text"><br />Spent 4 years at Zhejiang University studying optics, electronics and programming.</p>
          </Grid.Column>

          <Grid.Column width='1'>
            <Icon name='arrow left' size='huge' />
          </Grid.Column>

          <Grid.Column width='4' textAlign='center'>
            <Icon name='plane' size='huge'></Icon>
            <p className="tl_text"><br />Conducting a summer research <Link to='/projects/affectiva' className='link'>project</Link> at NCSU, USA.</p>
          </Grid.Column>

          <Grid.Column width='1'>
            <Icon name='arrow left' size='huge'></Icon>
          </Grid.Column>

          <Grid.Column width='4' textAlign='center'>
            <Icon name='university' size='huge'></Icon>
            <p className="tl_text"><br />Master student of EIT Digital Academy. First year at Université Paris Sud, France</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={timeline} />
        <Grid.Row style={timeline}>
          <Grid.Column width='2' />
          <Grid.Column width='2' textAlign='center'>
            <Icon name='arrow down' size='huge' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={timeline} />


        <Grid.Row style={timeline} />
        <Grid.Row style={timeline} />
        <Grid.Row style={timeline} />
        <Grid.Row style={timeline} />

        <Grid.Row style={collection} />

        <Grid.Row style={collection} />
        <Grid.Row style={collection} />
        <Grid.Row style={collection}>


        </Grid.Row>

        <Grid.Row>
          <Grid.Column width='6' />
          <Grid.Column width='4' textAlign='center'>
            <Header icon='linkedin' color='blue' as='a' />
            <Header icon='mail' color='grey' as='a' />
            <Header icon='github' color='black' as='a' href='https://github.com/cinna-zju'></Header>
          </Grid.Column>
        </Grid.Row>


      </Grid >






    )
  }
} 

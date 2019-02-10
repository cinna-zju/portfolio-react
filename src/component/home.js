import React from 'react'
import { Grid, Icon, Popup, Image } from 'semantic-ui-react'
import Menubar from './menu2'
// import { Link } from 'react-router-dom'

import './font.css'

import avatar from '../img/tx.jpeg'
import map from '../img/been.jpeg'



export default class Home extends React.Component {

  state = { visible: false, hover: false }


  componentDidMount() {
    this.setState({ visible: true })
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    const hh1 = {
      color: 'grey',
      fontSize: '6em',

    }

    return (

      <Grid padded='vertically'>

        <Grid.Row>
          {/* <Grid.Column width='12' />
          <Grid.Column width='4' textAlign='center'>
            <Header icon='linkedin' color='blue' as='a' />
            <Header icon='github' color='black' as='a' href='https://github.com/cinna-zju'></Header>

          </Grid.Column> */}
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>


        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={8}>
            <p className='preface'>Bonjour, <br />I'm Shuo,<br />
              a <Popup size='large' position='bottom left' trigger={<u>HCID</u>}>Human Computer Interaction and Design</Popup> student.</p>
          </Grid.Column>
          <Grid.Column width='6'><Image src={avatar} /></Grid.Column>
        </Grid.Row>
        {/* ENFP-A */}

        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>

        <Grid.Row verticalAlign='bottom' >
          <Grid.Column width='1' />
          <Grid.Column width='14' textAlign='left'>
            <Menubar active='home' color='black' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row />

        <Grid.Row>
          <Grid.Column width='16' textAlign='center'><div style={hh1}>WHO AM I?</div></Grid.Column>
        </Grid.Row>

        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />


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

        <Grid.Row >
          <Grid.Column width='1' />
          <Grid.Column width='4'>
            <p className="tl_text"><br />Grown up in Yichang, China, a city near the 3rd longest river in the world.</p>
          </Grid.Column>
          <Grid.Column width='1' />
          <Grid.Column width='4'>
            <p className="tl_text"><br />Love <Popup size='large' position='bottom left' trigger={<u>travelling</u>}><Image size='massive' src={map} /></Popup> and want to experience more.
            <br />Hope to set foot on all the seven continents.</p>
          </Grid.Column>
          <Grid.Column width='1' />
          <Grid.Column width='4'>
            <p className="tl_text"><br />Big fan of Harry Potter.<br />Read Harry Potter book 1 to 6 for 4 times in the summer vacation when I was 12.</p>
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
            <Icon name='plane' size='huge' color='grey'></Icon>
          </Grid.Column>

          <Grid.Column width='1'></Grid.Column>

          <Grid.Column width='4' textAlign='center'>
            <Icon name='university' size='huge' color='grey'></Icon>
          </Grid.Column>
        </Grid.Row>

        <Grid.Column width='1' />
        <Grid.Column width='4'>
          <p className="tl_text"><br />Studied optics, electronics and programming at Zhejiang University.
            <br />Now, master student of EIT Digital Academy. First year at Université Paris Sud, France</p>
        </Grid.Column>
        <Grid.Column width='1' />
        <Grid.Column width='4'><p className="tl_text"></p>
        </Grid.Column>
        <Grid.Column width='1' />
        <Grid.Column width='4'>
          <p className="tl_text"><br /></p>
        </Grid.Column>
        <Grid.Row />



      </Grid >






    )
  }
} 

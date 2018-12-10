import React from 'react'
import { Grid, Container, Image, Transition} from 'semantic-ui-react'
import Menubar from './menu'
import me from '../img/bg5.png'
import map from '../img/map.png'
import { Link } from 'react-router-dom'



export default class Home extends React.Component {

  state = { visible: false, hover: false }

  
  componentDidMount(){
    this.setState({visible: true})
  }

  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }




  render() {


  

    var divStyle = {
      background: 'url(' + me + ')',
      width: '100%',
      height: '830px',

      backgroundPosition: 'center',
    }

    var gray = {
      filter: 'grayscale(60%)',
      boxShadow: '3px 3px 3px #555555',

      
    }

    const info = {
      // fontFamily: "Arial, Helvetica, sans-serif",
      fontFamily: "monospace",

      fontSize: '20px',

      color: '#ffffff'

    }

    const { visible, hover } = this.state




    return (

      <div style={divStyle}>
        <Grid>
          <Grid.Column width='16'>
            <Menubar back={false} reverted={true} />
          </Grid.Column>

          <Grid.Row />
          <Grid.Row />

          <Grid.Row />
          <Grid.Row />
          <Grid.Row />
          <Grid.Row />
          <Grid.Row />
          <Grid.Row />
          <Grid.Row />
          <Grid.Row />
          <Grid.Column width='11' />

          <Grid.Column width='5'>
            <Container >
              <p style={info}>
                #ecb88a<br />
                23<br />
                China -> France<br />
                ENFP-A<br />
                HCID student<br />

              </p>

            </Container>
          </Grid.Column>

          <Grid.Row />
          <Grid.Row />


          <Grid.Row>
            <Grid.Column width='1' />
            <Grid.Column width='3' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
              <Transition visible={visible} animation='slide right' duration='500'>
                <Link to='./design/map'>
                  {hover ? <Image src={map} style={{ boxShadow: '3px 3px 3px #555555' }}></Image>
                    :<Image style={gray} src={map}></Image>}
                
                <div style={info}>Latest Project</div>
              </Link>
              </Transition>

            </Grid.Column>
          </Grid.Row>
        </Grid >
      </div>


    )
  }
} 

import React from 'react'
import { Grid, Header, Container } from 'semantic-ui-react'
import Menubar from './menu'
import me from '../img/bg.jpg'

export default class Home extends React.Component{



  render() {

    var divStyle = {
      background: 'url(' + me + ')',
      width: '100%',
      height: '900px',
      
      backgroundPosition: 'center',
    }

    const font = {
      fontFamily: "Times New Roman"
    }

    const info = {
      fontFamily: "Times New Roman",
      fontSize: '20px'

    }

  

    return (
      <div style={divStyle}>
      <Grid>
          <Grid.Column width='16'>
            <Menubar/>
          </Grid.Column>

          <Grid.Row />
          <Grid.Row/>

          <Grid.Row/>
          <Grid.Row/>
          <Grid.Row/>


          <Grid.Column width='9' />

          <Grid.Column width='7'>
            <Header style={font} size='large' color='grey'>Portfolio</Header>            
            <Header style={font} size='large'>Shuo YANG</Header>              
            <Container text>
              <p style={info}>
                From China, currently located in France.<br />
                Study Optics Engineering for 4 years.<br/>
                Love <b>Design</b>, <b>Coding</b> and <b>Dreaming</b>
              </p>

            </Container>


    </Grid.Column>
        </Grid >
      </div>
        

    )
  }
} 

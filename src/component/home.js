import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import Menubar from './menu'
import me from '../img/bg3.png'

export default class Home extends React.Component{



  render() {

    var divStyle = {
      background: 'url(' + me + ')',
      width: '100%',
      height: '900px',
      
      backgroundPosition: 'center',
    }

    const info = {
      fontFamily: "Times New Roman",
      fontSize: '24px',
      color: '#ffffff'

    }

  

    return (
      <div style={divStyle}>
      <Grid>
          <Grid.Column width='16'>
            <Menubar back={false}/>
          </Grid.Column>

          <Grid.Row />
          <Grid.Row/>

          <Grid.Row/>
          <Grid.Row/>
          <Grid.Row />
          <Grid.Row/>
          <Grid.Row/>
          <Grid.Row />
          <Grid.Row/>
          <Grid.Row/>
          <Grid.Column width='9' />

          <Grid.Column width='5'>
            <Container >
              <p style={info}>
                From China, currently located in France.<br />
                Study Optics, Electronics and Programming for 4 years.<br />
                Dive into HCID now.<br/>
                Love <b>Design</b>, <b>Coding</b> and <b>Dreaming</b>.
              
              </p>

              </Container>


    </Grid.Column>
        </Grid >
      </div>
        

    )
  }
} 

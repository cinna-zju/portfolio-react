import React from 'react'
import { Grid, Container, Sticky, Header, Divider } from 'semantic-ui-react'
import Menubar from './menu'
import { Link } from 'react-router-dom'

import './font.css'
export default class About extends React.Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (
      <div ref={this.handleContextRef}>

        <Grid verticalAlign='top'>
          <Grid.Column width='16'>
            <Sticky context={contextRef}><Menubar back={true} /></Sticky>

          </Grid.Column>

          <Grid.Row />
          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='2'>
              <Container className='t1'>ABOUT</Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='6' />
            <Grid.Column width='8' textAlign='right'><Container className='intro'>
              Hi, my name is Shuo YANG(杨烁).<br />
            </Container>

            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='10' />
            <Grid.Column width='4' textAlign='right'>
              <Header>Feel free to contact me</Header>
              <Header icon='linkedin' color='grey' as='a'/>
              <Header icon='mail' color='grey' as='a' />
              <Header icon='github' as='a' href='https://github.com/cinna-zju' color='grey'></Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />

            <Grid.Column width='2'>
              <Header content='0 years old' size='medium' />
            </Grid.Column>
            <Grid.Column width='4'>
              <Header size='medium' icon='child' content='Born! :)'></Header>
              <p>I was born in Yichang, China, a small city near Yangzt River</p>
              <Divider />
            </Grid.Column>
            <Grid.Column width='1' />

            <Grid.Column width='4'>

            </Grid.Column>

          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />

            <Grid.Column width='2'>
              <Header content='14 years old' size='medium' />
            </Grid.Column>
            <Grid.Column width='4'>
              <Header size='medium' icon='quidditch' content='Big fan of Harry Potter'></Header>
              <p>I liked it very much and read Harry Potter 1 to 6 for 4 times.</p>
              <Divider />
            </Grid.Column>

          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='2'>
              <Header content='18 years old' size='medium' />
            </Grid.Column>
            <Grid.Column width='4'>
              <Header size='medium' icon='university' content='Studied Engineering'></Header>
              <p>Spent 4 years at Zhejiang University studying optics, electronics and programming.
                Got a lot of friends there.</p>
              <Divider />

            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='2'>
              <Header content='20 years old' size='medium' />
            </Grid.Column>
            <Grid.Column width='4'>
              <Header icon='android' content='My first APP' size='medium'></Header>
              <p>Developed an information gathering App to collect University News</p>
              <Header icon='plane' content='First time abroad' size='medium'></Header>
              <p>Conducting a summer research <Link to='/code/affectiva' className='link2'>project</Link> at NCSU, USA.
              </p>
              <Divider />

            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='2'>
              <Header content='22 years old' size='medium' />
            </Grid.Column>
            <Grid.Column width='4'>
              <Header size='medium' icon='graduation cap' content='Graduated happily'></Header>
              <p>A memorial day!</p>
              <Divider />

            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='2'>
              <Header content='Current' size='medium' />
            </Grid.Column>
            <Grid.Column width='4'>
              <Header size='medium' content='Studying HCID' icon='university'></Header>
              <p>Master student of EIT Digital Academy. First year at Université Paris Sud, France
              </p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width='2' />
            <Grid.Column width='2'>
              <Header content='Future' size='medium' />
            </Grid.Column>
            <Grid.Column width='4'>
              <Header size='medium' content='Studying HCID' icon='university'></Header>
              <p>Second year at KTH, Sweden</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    )
  }
}
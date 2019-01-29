import React from 'react'
import { Grid, Image, Container, Sticky } from 'semantic-ui-react'
import Menubar from './menu2'
import Preface from './preface'

import { Link } from 'react-router-dom'

import './font.css'
import mines from '../img/mine/mine.jpg'
import sofc from '../img/sofc.png'
import aff from '../img/aff.png'



export default class Code extends React.Component {
  state = { visible: false }

  handleContextRef = contextRef => this.setState({ contextRef })



  
  render() {
    const { visible } = this.state

    const bg = {
      background: "#a8a0ff",

    }

    return (
      <div >

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
              <p className='preface'>Write some <a href='https://github.com/cinna-zju'>code</a>,
            <br />and create something new.
             </p>
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

          <Grid.Row>

            <Grid.Column width='1'></Grid.Column>
            <Grid.Column width='15'>
              <Menubar back={true} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={bg}/>
          <Grid.Row style={bg}>
            <Grid.Column width='2'></Grid.Column>
            <Grid.Column width='5'>
                <Link className='link2' to='/code/mines'>
                  <Image rounded src={mines}></Image>
                  <div className='itemname'><br />Minesweeper</div>
                </Link>
            </Grid.Column>
            <Grid.Column width='1' />
            <Grid.Column width='5'>
                <Link className='link2' to='/code/sofc'>
                  <Image rounded src={sofc}></Image>
                  <div className='itemname'><br />Sofc</div>
                </Link>
            </Grid.Column>

          </Grid.Row>

          <Grid.Row style={bg}>
            <Grid.Column width='2'></Grid.Column>
            <Grid.Column width='5'>
                <Link className='link2' to='/code/affectiva'>
                  <Image rounded src={aff}></Image>
                  <div className='itemname'><br />Affectiva Computing</div>
                </Link>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>

    )
  }
}
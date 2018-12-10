import React from 'react'
import { Menu, Icon, Modal, Divider, Grid, TransitionablePortal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import history from '../history'

import './font.css'

export default class Menubar extends React.Component {


  state = { open: false, back: this.props.back }

  handleShowClick = () => this.setState({ open: true })

  handleSidebarHide = () => {
    this.setState({ open: false })
  }



  render() {
    const { open, back } = this.state

    var ic

    if (this.props.reverted === true) {
      ic = {
        color: "#ffffff"
      }
    } else {
      ic = {
        color: "#555555"
      }
      
    }
  

    return (
      <div >
        <Menu borderless secondary >
          {back ? <Menu.Menu position='left'>
            <Menu.Item>
              <Icon style={ic} name='arrow left' size='big' onClick={history.goBack} />
            </Menu.Item>
          </Menu.Menu>
            : null}


          <Menu.Menu position='right'>
            <Menu.Item>
              <Icon style={ic} name='sidebar' size='big' onClick={this.handleShowClick} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <TransitionablePortal open={open} transition={{ animation: 'fade left', duration: '300' }}>
          <Modal basic open={open} onClose={this.handleSidebarHide}>
            <Grid>
              <Grid.Column width='12' />

              <Grid.Column width='4'>
                <Link to='/about' className='link'><div className='ti'>ABOUT</div></Link>
                <Divider />
                <Link to='/design' className='link'><div className='ti'>DESIGN</div>  </Link>
                <Divider />
                <Link to='/code' className='link'><div className='ti'>CODE</div></Link>
              </Grid.Column>

            </Grid>

          </Modal>

        </TransitionablePortal>


      </div>
    )
  }
}
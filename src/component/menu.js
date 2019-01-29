import React from 'react'
import { Menu, Icon, Modal, Divider, Grid, TransitionablePortal, Transition } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import history from '../history'

import './font.css'

export default class Menubar extends React.Component {


  state = { open: false, back: this.props.back, hover1: true, hover2: true }

  handleShowClick = () => this.setState({ open: true })

  handleSidebarHide = () => {
    this.setState({ open: false })
  }

  toggleHover1 = () => {
    this.setState({ hover1: !this.state.hover1 })
  }

  toggleHover2 = () => {
    this.setState({ hover2: !this.state.hover2 })
  }



  render() {
    const { open, back, hover1, hover2 } = this.state

    var ic

    if (this.props.reverted === true) {
      ic = {
        color: "#ffffff",
      }
    } else {
      ic = {
        color: "#ff6f61"
      }
      
    }
  

    return (
      <div >
        <Menu borderless secondary >
          {back ? <Menu.Menu position='left'>
            <Menu.Item>
              <Transition animation='pulse' visible={hover2}>
                <Icon style={ic} name='arrow left' size='big' onClick={history.goBack} onMouseEnter={this.toggleHover2} />

              </Transition>
            </Menu.Item>
          </Menu.Menu>
            : null}


          <Menu.Menu position='right'>
            <Menu.Item>
              <Transition animation='pulse' visible={hover1}>
                <Icon style={ic} name='sidebar' size='big' onClick={this.handleShowClick} onMouseEnter={this.toggleHover1}/>

              </Transition>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <TransitionablePortal open={open} transition={{ animation: 'fade left', duration: '500' }}>
          <Modal basic open={open} onClose={this.handleSidebarHide}>
            <Grid>
              <Grid.Column width='8' />

              <Grid.Column width='8'>
                <Link to='/' className='link'><div className='ti'>HOME</div></Link>
                <Divider />
                <Link to='/design' className='link'><div className='ti'>Design Projects</div>  </Link>
                <Divider />
                <Link to='/code' className='link'><div className='ti'>Projects</div></Link>
              </Grid.Column>

            </Grid>

          </Modal>

        </TransitionablePortal>


      </div>
    )
  }
}
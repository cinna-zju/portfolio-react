import React from 'react'
import { Menu, Icon, Sidebar, Sticky } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import history from '../history'


export default class Menubar extends React.Component{


  state={visible: false}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  
  render() {
    const { visible, activeItem, contextRef } = this.state

    return (
      <div >
        <Menu borderless secondary >
          <Menu.Menu position='left'>
            <Menu.Item>
                <Icon name='arrow left' size='big' color='purple' onClick={history.goBack}/>
            </Menu.Item>
          </Menu.Menu>
          
        <Menu.Menu position='right'>
          <Menu.Item>
            <Icon name='sidebar' color='purple' size='big' onClick={this.handleShowClick}/>
          </Menu.Item>
      </Menu.Menu>
      </Menu>

      <Sidebar.Pusher dimmed={visible}>
          <Sidebar as={Menu} animation='overlay' visible={visible} vertical
            onHide={this.handleSidebarHide} direction='right'  width='wide'>
          <Link to='/'>
              <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                ABOUT
          </Menu.Item>
            </Link>
        
          <Link to='/design'>
              <Menu.Item name='design' active={activeItem === 'design'} onClick={this.handleItemClick}>
              <Icon name='paint brush' position='left'/>DESIGN
                </Menu.Item>
          </Link>
          
        <Menu.Item name='code' active={activeItem === 'code'} onClick={this.handleItemClick}>
          <Icon name='code'/>CODE
        </Menu.Item>
        </Sidebar>
          </Sidebar.Pusher>
        
        </div>    
    )
  }
}
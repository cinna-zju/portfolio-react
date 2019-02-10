import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import '../css/menu.css'

export default class Menubar extends React.Component {

  state = { activeItem: this.props.active }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <div>
        <Menu secondary size='large' color={this.props.color}>
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} >HOME</Menu.Item>
          <Menu.Item as={Link} to='/projects' name='design' active={activeItem === 'design'} >PROJECTS</Menu.Item>
          <Menu.Item as={Link} to='/photo' name='photo' active={activeItem === 'photo'} >PHOTOS</Menu.Item>
        </Menu>
      </div>
    )
  }
}
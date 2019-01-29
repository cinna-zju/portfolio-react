import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import history from '../history'

import '../css/menu.css'

export default class Menubar extends React.Component {

  state = { activeItem: this.props.active }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <div>
        <Menu borderless secondary size='large'>
          <Menu.Item name='home' active={activeItem === 'home'} >
            <Link to='/' className='link'><div>HOME</div></Link>
          </Menu.Item>
          <Menu.Item name='design' active={activeItem === 'design'} >
            <Link to='/design' className='link'><div className='ti'>Design Projects</div>  </Link>
          </Menu.Item>

          <Menu.Item name='code' active={activeItem === 'code'} >
            <Link to='/code' className='link'><div className='ti'>Projects</div></Link>

          </Menu.Item>

        </Menu>
      </div>
    )
  }
}
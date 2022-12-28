import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu: React.FC = () => {
  const menuItems = [
    {
      key: '/',
      label: (
        <Link to="/">Котята</Link>
      ),
    },
    {
      key: '/donation',
      label: (
        <Link to="/donation">Пожертвования</Link>
      ),
    },
  ]
  return (
    <Menu
          mode="horizontal"
          defaultSelectedKeys={['/']}
          defaultOpenKeys={['/']}
          items = {menuItems}
          style={{ minWidth: '300px', background: 'transparent'}}
    >
    </Menu>
  )
}
export default MainMenu

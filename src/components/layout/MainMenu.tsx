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
    {
      key: '/favorites',
      label: (
        <Link to="/favorites">Избранное</Link>
      ),
    },
  ]
  return (
    <Menu
          mode="horizontal"
          defaultSelectedKeys={['/']}
          defaultOpenKeys={['/']}
          selectedKeys={[location.pathname]}
          items = {menuItems}
          style={{ minWidth: '400px', background: 'transparent'}}
    >
    </Menu>
  )
}
export default MainMenu

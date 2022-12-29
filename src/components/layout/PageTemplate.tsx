import React, { useState} from 'react'
import {Layout, Popover} from 'antd'
import MainMenu from './MainMenu'
import {Link, Outlet} from 'react-router-dom'
// @ts-ignore
import Logo from '../../assets/Logo.svg';
// @ts-ignore
import Profile from '../../assets/profile.svg';

const {Header, Content} = Layout

const PageTemplate: React.FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(!!localStorage.getItem('auth-token'))
    const content = (
        <div>
            {!localStorage.getItem('auth-token') ? (
                <div>
                    <div>
                        <Link to={'/login'}>
                            Войти
                        </Link>
                    </div>
                    <div>
                        <Link to={'/register'}>
                            Зарегистрироваться
                        </Link>
                    </div>
                </div>
                )
                : (
                    <div onClick={() => {
                        setIsAuth(false)
                        localStorage.removeItem('auth-token')
                    }}>
                        <a href="" onClick={() => {
                            setIsAuth(false)
                            localStorage.removeItem('auth-token')
                        }}>
                            выйти
                        </a>
                    </div>
                )}
        </div>
    );

    // Template
    return (
        <Layout>
            <Header className="header">
                <Link to={'/'}>
                    <div id="logo">
                        <img src={Logo} alt=""/>
                    </div>
                </Link>
                <MainMenu/>
                <div
                    style={{
                        float: 'right',
                        color: '#4F5C6A',
                        padding: '0px 30px 0px 30px'
                    }}
                >
                    <Popover
                        content={content}
                    >
                        <img src={Profile} alt="" style={{width: '35px', marginLeft: '10px'}}/>
                    </Popover>
                </div>
            </Header>

            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    minHeight: '100vh'
                }}
            >
                <Outlet/>
            </Content>
        </Layout>
    )
}

export default PageTemplate

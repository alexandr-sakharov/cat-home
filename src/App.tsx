import React, {FunctionComponent} from 'react'
import LoginPage from './components/pages/LoginPage'
import PageTemplate from './components/layout/PageTemplate'
import {ProtectedRoute} from './components/router/ProtectedRoute'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ConfigProvider} from 'antd'
import './App.less'
import './uiKit.less'
import ruRu from 'antd/es/locale/ru_RU'
import {Route, Routes} from "react-router-dom";
import {routes} from "./components/router/RoutesConfig"
import NotAccessPage from "./components/pages/NotAccessPage"
import NotFoundPage from "./components/pages/NotFoundPage"
import RegisterPage from "@/components/pages/RegisterPage";

const App: React.FC = () => {
    const queryClient = new QueryClient()

    return (
        <ConfigProvider locale={ruRu}>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                    <Route path={'/403'} element={<NotAccessPage/>}/>
                    <Route path="/" element={<PageTemplate/>}>
                        {routes.map((
                            route: { path: string; component: FunctionComponent },
                            i: React.Key | null | undefined
                        ) => (<Route key={i} path={route.path} element={
                                <ProtectedRoute child={<route.component/>}/>
                            }/>
                        ))}
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </QueryClientProvider>
        </ConfigProvider>
    )
}

export default App

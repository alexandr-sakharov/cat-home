import { Button, Col, Form, Input, Layout, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginRequestBody from "../../types/LoginRequestBody";
import authRepository from "../../repository/AuthRepository";

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const onFinish = (values: LoginRequestBody): void => {
    console.log(values)
    navigate('/')
    authRepository.login(values)
      .then((userData) => {
        if (userData !== undefined) {
          localStorage.setItem('auth-token', userData['auth-token'])
          navigate('/')
        }

      })
      .catch((error) => (
        console.log(error)
      ))
  }
  const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Layout>
      <Row justify="center" align="middle" style={{ minHeight: '100vh', display: 'flex' }}>
      <Col>
        <h2 style={{ textAlign: 'center', color: '#6286a5' }}>АВТОРИЗАЦИЯ</h2>
        <Form
          name="loginForm"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          style={{ width: '500px' }}
        >
          <Form.Item
            label="Логин"
            name="login"
            rules={[{ required: true, message: 'Обязательное поле' }]}
          >
            <Input size="large"/>
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Обязательное поле' }]}
          >
            <Input.Password size="large"/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
    </Layout>
  )
}

export default LoginPage

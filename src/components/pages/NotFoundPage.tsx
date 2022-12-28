import { Button, Col, Layout, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  const onBack = (): void => {
    navigate(-1)
  }

  return (
    <Layout>
      <Row justify="center" align="top" style={{ minHeight: '100vh', display: 'flex', paddingTop: 100, fontSize: 100 }}>
      <Col>
        <h1 style={{ textAlign: 'center', color: '#6286a5' }}>404</h1>
        <p style={{ textAlign: 'center', color: '#6286a5', fontSize: 30 }}>Страница не найдена</p>
          <Button
              type='primary'
              style={{
                position: 'relative',
                left: '50%',
                transform: 'translate(-50%, 0)'
              }}
              onClick={onBack}>
              Вернуться назад
          </Button>
      </Col>
    </Row>
    </Layout>
  )
}
export default NotFoundPage

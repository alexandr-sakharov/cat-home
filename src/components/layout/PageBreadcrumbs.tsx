import React from 'react'
import { Breadcrumb } from 'antd'

const PageBreadcrumbs: React.FC = () => (
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>Главная</Breadcrumb.Item>
    <Breadcrumb.Item>Проекты</Breadcrumb.Item>
  </Breadcrumb>
)

export default PageBreadcrumbs

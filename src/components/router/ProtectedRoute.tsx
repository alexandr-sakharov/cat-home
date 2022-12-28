import React from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  child: JSX.Element
}

export const ProtectedRoute = ({ child }: ProtectedRouteProps): JSX.Element => {
  const isAuth: boolean = true
  if (isAuth) {
    return child
  } else {
    return <Navigate to="/login" replace />
  }
}

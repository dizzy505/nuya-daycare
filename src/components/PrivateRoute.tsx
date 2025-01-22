import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface PrivateRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'user';
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  requiredRole,
}) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole && user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
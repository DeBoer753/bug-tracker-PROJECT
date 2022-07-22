// REACT ROUTER:
import { Navigate } from 'react-router'

// REDUX:
import { useGetCurrentUserQuery } from '../redux/services/user'

// PROTECTED:
export default function Protected({ children }) {
  const { data, isUninitialized, isLoading, isFetching, isError, error } = useGetCurrentUserQuery()

  // checking
  if (isUninitialized || isLoading || isFetching || isError || error) {
    return null
    // return <Navigate to="/login" replace />
  }

  // checked & not logged in
  if (!data || data.error === 'unauthorized') {
    return <Navigate to="/login" replace />
  }

  // checked & logged in
  return children
}

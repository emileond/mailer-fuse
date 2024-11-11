import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/react-query/user/useUser'

function ProtectedRoute({ children }) {
  ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  }
  const { data: user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/signup')
    }
  }, [user, navigate])

  if (!user) {
    // You can also render a loading indicator or null while checking user status
    return null
  }

  return children
}

export default ProtectedRoute

import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { useJwt } from 'react-jwt';

const Protected = ({ children }) => {
  const user = localStorage.getItem('digital-coffee-user');
  // const { isExpired } = useJwt(user);

  // if (isExpired === true) {
  //   toast.error('Session Expired.');
  //   return <Navigate to="/pages/login/login3" />;
  // }

  if (!user) {
    toast.error('Invalid user.');
    return <Navigate to="/pages/login/login3" />;
  }

  return <>{children}</>;
};

Protected.propTypes = {
  children: PropTypes.node.isRequired
};

export default Protected;

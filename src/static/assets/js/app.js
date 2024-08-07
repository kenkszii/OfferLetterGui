import jwt_decode from 'jwt-decode';
import { useAuth } from './useAuth';

function decodeUserId() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    const me = localStorage.getItem("USER_TOKEN_AUTH_KEY");
    const userObject = JSON.parse(me);
    const accessToken = userObject.access_token;
  

    const decodedAccessToken = jwt_decode(accessToken);
    const userId = decodedAccessToken.user_id;

    return { userId };
  }

  return null;
}

export { decodeUserId };

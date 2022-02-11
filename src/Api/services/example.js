import fetchRequests from 'Api/Fetch';
const ExampleApi = {
  SocialLogin: (data) => {
    return fetchRequests.post('/user/sociallogin/', data);
  },
  getUserInfo: (username) => {
    return fetchRequests.get(`/${username}`);
  },
  updateUserInfo: (data) => {
    return fetchRequests.securedFormApi('/user/', 'PUT', data);
  },
  getUserPhone: (data) => {
    return fetchRequests.secured('/user/phone/');
  },
};
export default ExampleApi;

import axios from '../axios';

async function newPassword({id, token, password} = {}) {
  try {
    const newPasswordData = {
      emailProviderId: id,
      token,
      newPassword: password,
    };
    const response = await axios.post(`/auth/new-password`, newPasswordData);

    return response;
  } catch (error) {
    return Promise.reject(error.response);
  }
}

export default newPassword;

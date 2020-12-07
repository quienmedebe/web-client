import axios from '../axios';

async function rememberPassword({email} = {}) {
  try {
    const rememberPasswordData = {
      email,
    };
    const response = await axios.post(`/auth/recover-password`, rememberPasswordData);

    return response;
  } catch (error) {
    return Promise.reject(error.response);
  }
}

export default rememberPassword;

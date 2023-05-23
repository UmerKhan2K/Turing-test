import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-api.aircall.io';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const login = async (username, password) => {
    try {
      const response = await axios.post('/auth/login', {
        username: username,
        password: password,
      });
  
      const accessToken = response.data.access_token;
      return accessToken;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  };

export const getCalls = async (offset, limit) => {
  try {
    const response = await axios.get(`/calls?offset=${offset}&limit=${limit}`);
    console.log(response);
    return response;
  } catch (error) {
    throw error.response.data;
  }
};

export const getCallDetails = async (callId) => {
  try {
    const response = await axios.get(`/calls/${callId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const archiveCall = async (callId) => {
  try {
    const response = await axios.put(`/calls/${callId}/archive`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createNote = async (callId, content) => {
   
  try {
    const response = await axios.post(`/calls/${callId}/note`, { content });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default axios;

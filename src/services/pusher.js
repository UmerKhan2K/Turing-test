import Pusher from 'pusher-js';
import { getCallDetails } from './api';


const setupPusher = (accessToken) => {
  const pusher = new Pusher('d44e3d910d38a928e0be', {
    cluster: 'eu',
    authEndpoint: 'https://frontend-test-api.aircall.io/pusher/auth', 
    auth: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });

  const channel = pusher.subscribe('private-aircall');

  channel.bind('update-call', async (data) => {
    try {
      const call = await getCallDetails(data.callId);
     
      console.log('Updated call:', call);
 
    } catch (error) {
    
      console.error('Error fetching call details:', error);
    }
  });

  return pusher;
};

export default setupPusher;

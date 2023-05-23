import React, { useEffect, useState } from 'react';
import axios from '../services/api';

function CallDetails({ callId }) {
  const [call, setCall] = useState(null);

  useEffect(() => {
    const fetchCallDetails = async () => {
      try {
        const response = await axios.get(`/calls/${callId}`);
        const callData = response.data;
        console.log(response)
        setCall(callData);
      } catch (error) {
        console.log("Error in fetching details")
      }
    };

    fetchCallDetails();
  }, [callId]);

  return (
    <div>
      {call ? (
        <div>{call.callData}</div>
      ) : (
        <div>Loading call details...</div>
      )}
    </div>
  );
}
export default CallDetails;
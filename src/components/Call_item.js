import React from 'react';
import axios from '../services/api';

function CallItem({ call }) {
  const handleArchive = async () => {
    try {
      await axios.put(`/calls/${call.id}/archive`);
    } catch (error) {
        console.log("Error in fetching items")
    }
  };

  return (
    <div>
      <button onClick={handleArchive}>Archive</button>
    </div>
  );
}
export default CallItem;

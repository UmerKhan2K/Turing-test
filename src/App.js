import React, { useEffect, useState } from 'react';
import setupPusher from './services/pusher';
import LoginForm from './components/Login_form';
import CallList from './components/Paginated_calls';

import Header from './components/Header';
function App() {
  const [tt,setTT]=useState('');
  useEffect(() => {
    const pusher = setupPusher('');
    return () => {
      pusher.unsubscribe('private-aircall');
      pusher.disconnect();
    };
  }, []);
  return (
    <div>
      <Header />
      <LoginForm setTT={setTT}/>
      {console.log(tt)}
      {tt?<CallList tt={tt}/>:<p></p>}
      
    </div>
  );
}

export default App;

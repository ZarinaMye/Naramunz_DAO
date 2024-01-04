import './Welcome.css';
//import { useSDK } from '@metamask/sdk-react';
//import React, { useState } from 'react';
//npm install @metamask/sdk-react


export function Welcome() {
/*  const [account, setAccount] = useState();
 const { sdk, connected, chainId } = useSDK();

 const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch(err) {
    console.warn(`failed to connect..`, err);
  }
  }; */

 return (
 <div>
  <h1>Welcome to Naramunz</h1>
  <p>This is a platform where everyone can propose ideas and vote on them.</p>
  {/* <button style={{ padding: 10, margin: 10 }} onClick={connect}>
    Connect
  </button>
  {connected && (
    <div>
      <>
        {chainId && `Connected chain: ${chainId}`}
        <p></p>
        {account && `Connected account: ${account}`}
      </>
    </div>
  )} */}
 </div>
 );
};

import React from 'react';
import './Welcome.css';

export function Welcome() {
    async function connectMetaMask() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.send('eth_requestAccounts');
        console.log(accounts);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please install MetaMask!');
      }
    }

    return (
    <div>
      <h1>Welcome to Naramunz</h1>
      <p>This is a platform where everyone can propose ideas and vote on them.</p>
      <button onClick={connectMetaMask}>Connect MetaMask</button>
    </div>
    );
}

import React from 'react';
import crystals_of_naramunz from '../../img/crystals_of_naramunz.png';
import feralith from '../../img/feralith.png';
import './Welcome.css';

export function Welcome() {
    async function connectMetaMask() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
        console.log('Konto kopplat:', accounts);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please install MetaMask!');
      }
    }

    return (
    <div>
      <img className='logga' src={crystals_of_naramunz} alt="Crystals of Naramunz logga" />
      <h1 className='Welcome'>Welcome to our DAO !</h1>
      <p>Here in our community everyone can propose ideas and vote on them, to help develop and improve the game.</p>
      <button className='metaMbtn'onClick={connectMetaMask}>Connect MetaMask</button>
      <img className='feralith' src={feralith} alt="Feralith game character" />
    </div>
    );
}

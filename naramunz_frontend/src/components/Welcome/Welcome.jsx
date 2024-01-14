import React from 'react';
import crystals_of_naramunz from '../../img/crystals_of_naramunz.png';
import feralith from '../../img/feralith.png';
import { BlockchainService } from '../../BlockchainService';
import './Welcome.css';

export function Welcome() {

    const {connectToMetaMask} = BlockchainService();

    return (
        <div>
            <img className='logga' src={crystals_of_naramunz} alt="Crystals of Naramunz logga" />
            <h1 className='Welcome'>Welcome to our DAO !</h1>
            <p>Here in our community everyone can propose ideas and vote on them, to help develop and improve the game.</p>
            <p>To see, create and vote on proposals you need to connect to the site with MetaMask.</p>
            <div className='btnWrapper'>
                <button className='metaMbtn'onClick={connectToMetaMask}>Connect MetaMask</button>
            </div>
            <img className='feralith' src={feralith} alt="Feralith game character" />
        </div>
    );
}

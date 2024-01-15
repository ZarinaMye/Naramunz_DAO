import { useState } from 'react';
import { BlockchainService } from '../../BlockchainService';
import { OneProposal } from '../../models/OneProposal';
import robo from '../../img/robo.png';
import './Create.css';

export function Create() {

    const {createProposal} = BlockchainService();
    const [oneProposal, setOneProposal] = useState(new OneProposal('', '', '', '',));
 
    const handleChange = (e) => {

        let value = e.target.value;

        if (e.target.name === 'title') {
            if (value.length >= 20) {
                window.alert("Maximalt antal tecken har nåtts.");
                value = value.substring(0, 20);
            };
        };

        if (e.target.name === 'description') {          
            if (value.length >= 100) {
                 window.alert("Maximalt antal tecken har nåtts.");
                value = value.substring(0, 100);
            };
        };
      
        if (e.target.name === 'tokenAddress') {
       
            const validAddress = /^0x[a-fA-F0-9]{40}$/.test(value);
            if (!validAddress) {
                window.alert("Ogiltig Ethereum-adress");
                value = '';
            }; 
        };
        setOneProposal({...oneProposal, [e.target.name]: value});
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        createProposal(oneProposal);
        console.log(oneProposal); 
    };
 
    const handleCancel = () => {
        setOneProposal(
            new OneProposal('', '', '', '',)
        );
    };

  //New character - Adding one more female character, for a richer narrative.
  //Meet up Umeå - Have a meet up for dedicated players, to meet and greet in Umeå Sweden.
  //Greater Boss - There is a need for a bigger and more unique Boss in the dungeons.

    return (
        <div>
            <h1>Give a proposal</h1>
            <div className='centerWrapper'>
                <form onSubmit={handleSubmit} className='proposalForm'>
                    <label>Title: </label>
                    <input
                        placeholder='Give your proposal a title.'
                        type='text'
                        /* pattern="[A-Za-z0-9 ]*" */
                        maxLength="20"
                        value={oneProposal.title}
                        onChange={handleChange}
                        name='title'
                        required
                    />
                    <label>Decsription: </label>
                    <textarea className='description'
                        placeholder='Give your proposal a title.'
                        type='text'
                        pattern="[A-Za-z0-9 ]*"
                        maxLength="100"
                        value={oneProposal.description}
                        onChange={handleChange}
                        name='description'
                        required
                    />
                    <label>TokenAddress: </label>
                    <input
                        placeholder='Enter your ERC721 token address.'
                        type='text'
                        value={oneProposal.tokenAddress}
                        onChange={handleChange}
                        name='tokenAddress'
                        required
                    />
                    <label>TokenId: </label>
                    <input
                      placeholder='Enter your ERC721 token id.'
                        type='text'
                        value={oneProposal.tokenId}
                        onChange={handleChange}
                        name='tokenId'
                        required
                    />
                    <div className='btnWrapper'>
                        <button type='submit' className='smallBtn' >Submit</button> 
                        <button type='button' className='smallBtn' onClick={handleCancel}>Cancel</button>          
                    </div> 
                </form>   
            </div>   
            <img className='robo' src={robo} alt="Game character" />
        </div>
    );
};

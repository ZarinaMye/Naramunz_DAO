import { useState } from 'react';
import { BlockchainService } from '../../BlockchainService';
import { OneProposal } from '../../models/OneProposal';
import robo from '../../img/robo.png';
import './Create.css';

export function Create() {

    const {createProposal} = BlockchainService();
    const [oneProposal, setOneProposal] = useState(new OneProposal('', '', '', '',));
 
    const handleChange = (e) => {
        setOneProposal({...oneProposal, [e.target.name]: e.target.value});
        console.log(oneProposal); 
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        createProposal(oneProposal);
        console.log(oneProposal); 
    };
 
    const handleCancel = () => {
        setOneProposal(
            new OneProposal('', '', '', '',)
        );
    };

    //Om metamask ej connected ge felmeddelande när de försköer submitta förslag
  
    return (
        <div>
            <h1>Give a proposal</h1>
            <div className='centerWrapper'>
                <form onSubmit={handleSubmit} className='proposalForm'>
                    <label>Title: </label>
                    <input
                        placeholder='Give your proposal a title.'
                        type='text'
                        value={oneProposal.title}
                        onChange={handleChange}
                        name='title'
                        required
                    />
                    <label>Decsription: </label>
                    <input
                        placeholder='Give your proposal a title.'
                        type='text'
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

import { useState } from 'react';
import { BlockchainService } from '../../BlockchainService';
import { OneProposal } from '../../models/OneProposal';
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
    };
 
    const handleCancel = () => {
        setOneProposal(
            new OneProposal('', '', '', '',)
        );
    };
  
   return (
       <div>
            <h1>Give a proposal</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                   type='text'
                   value={oneProposal.title}
                   onChange={handleChange}
                   name='title'
                   required
                />
                <label>Decsription</label>
                <input
                   type='text'
                   value={oneProposal.description}
                   onChange={handleChange}
                   name='description'
                   required
                />
                <label>TokenAddress</label>
                <input
                   type='text'
                   value={oneProposal.tokenAddress}
                   onChange={handleChange}
                   name='tokenAddress'
                   required
                />
                <label>TokenId</label>
                <input
                   type='text'
                   value={oneProposal.tokenId}
                   onChange={handleChange}
                   name='tokenId'
                   required
                />
                <button type='submit' className='btn'>Submit</button> 
                <button type='button' onClick={handleCancel}>Cancel</button>          
            </form>      
       </div>
   );
};

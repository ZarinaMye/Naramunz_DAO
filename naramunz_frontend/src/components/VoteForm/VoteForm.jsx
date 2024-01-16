import './VoteForm.css';
import { useState } from "react"
import { VotedProposal } from '../../models/VotedProposal'
import { BlockchainService } from '../../BlockchainService'

export function VoteForm({ proposal, proposalId, onClose, setIsVoteFormOpen }) {
    const {voteOnProposal} = BlockchainService();
    const [isFor, setIsFor] = useState(true); 
    const [votedProposal, setVotedProposal] = useState(new VotedProposal('', '', '', ''/* , 'isFor' */));

    const handleChange = (e) => {
        let value = e.target.value;
        if (e.target.name === 'tokenAddress') {
           
            const validAddress = /^0x[a-fA-F0-9]{40}$/.test(value);
            if (!validAddress) {
                window.alert("Ogiltig Ethereum-adress");
                value = '';
            };
        };
        setIsFor(e.target.value === 'true');
        setVotedProposal({...votedProposal, [e.target.name]: e.target.value, proposalId: proposalId, isFor: e.target.value === 'true'});
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        voteOnProposal(votedProposal);   
        console.log(votedProposal);         
        onClose();
        setIsVoteFormOpen(false);
    };

    const handleCancel = () => {
        setVotedProposal(
            new VotedProposal('', '', '', '',)
        );
        onClose();
        setIsVoteFormOpen(false);
    };

    return (
        <div className='voteFormWrapper'>
            <div className='voteForm'>
                <h3>Vote on: {proposal.title}</h3>
                <form onSubmit={handleSubmit} className='voteFormInput'>
                    <input type="hidden" 
                        name="proposalId" 
                        value={votedProposal.proposalId} 
                    />
                    <label>TokenAddress: </label>
                    <input
                        placeholder='Enter your ERC721 token address.'
                        type='text'
                        value={votedProposal.tokenAddress}
                        onChange={handleChange}
                        name='tokenAddress'
                        required
                    /> 
                    <label>TokenId: </label>
                    <input
                        placeholder='Enter your ERC721 token id.'
                        type='text'
                        value={votedProposal.tokenId}
                        onChange={handleChange}
                        name='tokenId'
                        required
                    /> 
                    <div className='radioWrapper'>
                        <label>For: </label>
                        <input className='radioInput'
                            type="radio" 
                            checked={isFor} 
                            onChange={handleChange}
                            name='isFor'
                            value={true}  
                        />
                        <label>Against: </label>
                        <input className='radioInput'
                            type="radio" 
                            checked={!isFor} 
                            onChange={handleChange}
                            name='isFor'
                            value={false}  
                        />
                    </div>
                    <div className='btnWrapper'>
                        <button type='submit' className='smallBtn' >Submit</button>
                        <button type='button' onClick={handleCancel} className='smallBtn'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
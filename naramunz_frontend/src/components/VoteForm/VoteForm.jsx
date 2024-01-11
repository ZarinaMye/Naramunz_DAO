import './VoteForm.css';
import { useState } from "react"
import { VotedProposal } from '../../models/VotedProposal'
import { BlockchainService } from '../../BlockchainService'

export function VoteForm({ proposal, proposalId, onClose }) {
    const {voteOnProposal} = BlockchainService();
    const [isFor, setIsFor] = useState(true); 
    const [votedProposal, setVotedProposal] = useState(new VotedProposal('', '', '', ''/* , 'isFor' */));

    const handleChange = (e) => {
        setVotedProposal({...votedProposal, [e.target.name]: e.target.value, proposalId: proposalId});
  /*    setVotedProposal({...votedProposal, proposalId: proposalId}); */
        console.log(votedProposal); 
    }; 

    const handleRadioChange = (e) => {
        setIsFor(e.target.value === 'true');
        setVotedProposal({...votedProposal, isFor: e.target.value === 'true'});
        console.log(votedProposal); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        voteOnProposal(votedProposal);           
        onClose();
    };

    const handleCancel = () => {
        setVotedProposal(
            new VotedProposal('', '', '', '',)
        );
        onClose();
    };

    return (
        <div className='voteForm'>
            <h3>Vote on: {proposal.title}</h3>
            <form onSubmit={handleSubmit}>
               {/*  <label>ProposalId: </label> */}
                <input type="hidden" 
                    name="proposalId" 
                    value={votedProposal.proposalId} 
                    /* onChange={handleChange}   */
                />
                <label>TokenAddress: </label>
                <input
                    type='text'
                    value={votedProposal.tokenAddress}
                    onChange={handleChange}
                    name='tokenAddress'
                    required
                /> 
                <label>TokenId: </label>
                <input
                    type='text'
                    value={votedProposal.tokenId}
                    onChange={handleChange}
                    name='tokenId'
                    required
                /> 
                 <label>For: </label>
                <input 
                    type="radio" 
                    checked={isFor} 
                    onChange={handleRadioChange}
                    name='isFor'
                    value={true}  
                />
                <label>Against: </label>
                <input 
                    type="radio" 
                    checked={!isFor} 
                    onChange={handleRadioChange}
                    name='isFor'
                    value={false}  
                />
                <button type="submit">Submit Vote</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}
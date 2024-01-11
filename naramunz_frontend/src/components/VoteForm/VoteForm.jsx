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
        <div className='voteFormWrapper'>
        <div className='voteForm'>
            <h3>Vote on: {proposal.title}</h3>
            <form onSubmit={handleSubmit} className='voteFormInput'>
               {/*  <label>ProposalId: </label> */}
                <input type="hidden" 
                    name="proposalId" 
                    value={votedProposal.proposalId} 
                    /* onChange={handleChange}   */
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
                        onChange={handleRadioChange}
                        name='isFor'
                        value={true}  
                    />
                    <label>Against: </label>
                    <input className='radioInput'
                        type="radio" 
                        checked={!isFor} 
                        onChange={handleRadioChange}
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
import { useState } from "react"
import { VotedProposal } from '../../models/VotedProposal'
import { BlockchainService } from '../../BlockchainService'

export function VoteForm({ proposal, onClose }) {

    const {voteOnProposal} = BlockchainService();
    const [isFor, setIsFor] = useState(true); 
    const [votedProposal, setVotedProposal] = useState(new VotedProposal(proposal.id, '', '', '',));

    const handleChange = (e) => {
        setVotedProposal({...votedProposal, [e.target.name]: e.target.value});
        console.log(votedProposal); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProposal = new VotedProposal(proposal.id, votedProposal.tokenAddress, votedProposal.tokenId, isFor);
        voteOnProposal(updatedProposal);
        onClose();
    };
     

    const handleCancel = () => {
        setVotedProposal(
            new VotedProposal(proposal.id, '', '', '',)
        );
        onClose();
    }
 

 
    return (
        <div>
            <h3>Vote on: {proposal.title}</h3>
            <form onSubmit={handleSubmit}>
            

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
                    type='number'
                   value={votedProposal.tokenId}
                   onChange={handleChange}
                   name='tokenId'
                   required
                /> 
                <label>
                   For:
                   <input type="radio" checked={isFor} 
                   onChange={(e) => setIsFor(true)} 
                   required
                   />
                </label>
                <label>
                   Against:
                   <input type="radio" checked={!isFor} onChange={(e) => setIsFor(false)} />
                </label>
                <button type="submit">Submit Vote</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
 }
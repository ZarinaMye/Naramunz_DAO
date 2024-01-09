import { useState } from "react"
import { VotedProposal } from '../../models/VotedProposal'

export function VoteForm({ proposal, onClose }) {
    const [tokenAddress, setTokenAddress] = useState('');
    const [tokenId, setTokenId] = useState('');
    const [isFor, setIsFor] = useState(true);
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const votedProposal = new VotedProposal(proposal.id, tokenAddress, tokenId, isFor);
        // Call the vote function from the blockchain.js file here
        // vote(votedProposal);
        onClose();
    };
 
    return (
        <div>
            <h1>{proposal.title}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                   Token Address:
                   <input type="text" value={tokenAddress} onChange={(e) => setTokenAddress(e.target.value)} />
                </label>
                <label>
                   Token ID:
                   <input type="text" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
                </label>
                <label>
                   For:
                   <input type="radio" checked={isFor} onChange={(e) => setIsFor(true)} />
                </label>
                <label>
                   Against:
                   <input type="radio" checked={!isFor} onChange={(e) => setIsFor(false)} />
                </label>
                <button type="submit">Submit Vote</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
 }
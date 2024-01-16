import './Vote.css';
import { BlockchainService } from '../../BlockchainService';
import { useState } from 'react';
import {VoteForm } from '../VoteForm//VoteForm';
import felorian from '../../img/felorian.png';

export function Vote() {
    const { proposalList } = BlockchainService();
    const [selectedProposal, setSelectedProposal] = useState(null);
    const [proposalId, setProposalId] = useState(null);
    const [isVoteFormOpen, setIsVoteFormOpen] = useState(false);
 
    const handleVoteClick = (proposal, id) => {
        setSelectedProposal(proposal);
        setProposalId(id);
        setIsVoteFormOpen(true);
    };
 
    const handleCloseVoteForm = () => {
        setIsVoteFormOpen(false);
    };
 
    return (
        <div>
            <h1>Vote here!</h1>
            {!isVoteFormOpen && (
                <ul className='centerWrapper'> 
                    {proposalList.map((proposal, index) => (
                        <li className='itemVoteOn'key={index}>
                            <div className="textContainer">
                                <h3>{proposal.title}</h3>
                                <p>{proposal.description}</p>
                            </div>
                            <button className='smallBtn' onClick={() => handleVoteClick(proposal, index)}>Vote</button>
                        </li>
                    ))}
                </ul>
            )}
            {isVoteFormOpen && <VoteForm proposal={selectedProposal} proposalId={proposalId} onClose={handleCloseVoteForm} setIsVoteFormOpen={setIsVoteFormOpen} />}
            <img className='felorian' src={felorian} alt="Felorian game character" />
        </div>
    );
}
 
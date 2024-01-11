import './Vote.css';
import { BlockchainService } from '../../BlockchainService';
import { useState } from 'react';
import {VoteForm } from '../VoteForm//VoteForm';
import felorian from '../../img/felorian.png';
//npm install react-bootstrap bootstrap

export function Vote() {
    const { proposalList } = BlockchainService();
    const [showVoteForm, setShowVoteForm] = useState(false);
    const [selectedProposal, setSelectedProposal] = useState(null);
    const [proposalId, setProposalId] = useState(null);

    const handleVoteClick = (proposal, id) => {
        setSelectedProposal(proposal);
        setProposalId(id);
        setShowVoteForm(true);
    };

    const handleCloseVoteForm = () => setShowVoteForm(false);

    return (
        <div>
            <h1>Vote here!</h1>
            <ul className='proposalsVoteList'> 
                {proposalList.map((proposal, index) => (
                    <li className='itemVoteOn'key={index}>
                        <div className="textContainer">
                            <h3>{proposal.title}</h3>
                            <p>{proposal.description}</p>
                        </div>
                        <button className='voteBtn' onClick={() => handleVoteClick(proposal, index)}>Vote</button>
                    </li>
                ))}
            </ul>
            {showVoteForm && <VoteForm proposal={selectedProposal} proposalId={proposalId} onClose={handleCloseVoteForm} />}
            <img className='felorian' src={felorian} alt="Felorian game character" />
        </div>
    );
};



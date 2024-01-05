import './Proposals.css';
import { BlockchainService } from '../../BlockchainService';

export function Proposals() {

    const { proposalList } = BlockchainService();

    return (
        <div>
            <h1>Proposals</h1>
            <ul> 
                {proposalList.map((proposal, index) => (
                    <li key={index}>
                        <h2>{proposal.title}</h2>
                        <p>{proposal.description}</p>
                        <p>Yes Votes: {proposal.yesVotes}</p>
                        <p>No Votes: {proposal.noVotes}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

import './Proposals.css';
import { BlockchainService } from '../../BlockchainService';
import vulpian from '../../img/vulpian.png';

export function Proposals() {

    const { proposalList } = BlockchainService();

    return (
        <div>
            <h1>Proposals</h1>
            <ul className='proposals'> 
                {proposalList.map((proposal, index) => (
                    <li className='proposalItem' key={index}>
                        <h3>{proposal.title}</h3>
                        <p>{proposal.description}</p>
                        <p>Yes Votes: {proposal.yesVotes}</p>
                        <p>No Votes: {proposal.noVotes}</p>
                    </li>
                ))}
            </ul>
            <img className='vulpian' src={vulpian} alt="Vulpian game character" />
        </div>
    );
};

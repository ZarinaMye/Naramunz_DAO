import { useState } from "react"
import { VotedProposal } from '../../models/VotedProposal'
import { BlockchainService } from '../../BlockchainService'

export function VoteForm({ proposal, onClose }) {
    const {voteOnProposal} = BlockchainService();
   const [isFor, setIsFor] = useState(true); 
   const [votedProposal, setVotedProposal] = useState(new VotedProposal(proposal.id, '', '', isFor));
 
   
   const handleChange = (e) => {
       setVotedProposal({...votedProposal, [e.target.name]: e.target.value});
       /* console.log(votedProposal); */
    }; 

   const handleRadioChange = (e) => {
       setIsFor(e.target.value === 'true');
       setVotedProposal({...votedProposal, isFor: e.target.value === 'true'});
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
   }
/* 
    const {voteOnProposal} = BlockchainService();
    const [isFor, setIsFor] = useState(true); 
    const [votedProposal, setVotedProposal] = useState(new VotedProposal(proposal.id, '', '', '',));

    const handleChange = (e) => {
        setVotedProposal({...votedProposal, [e.target.name]: e.target.value});
        console.log(votedProposal); 
    }; 

   /*  const handleChange = (e) => {
        setVotedProposal((prevState) => ({...prevState, [e.target.name]: e.target.value}));
        if (e.target.name === 'isFor') {
            console.log(e.target.value);
        }
     };
 */
   /* const handleRadioChange = (e) => {
        setIsFor(e.target.value === 'true');
    };
     

    const handleSubmit = (e) => {
        e.preventDefault();
        //const updatedProposal = new VotedProposal(proposal.id, votedProposal.tokenAddress, votedProposal.tokenId, isFor); 
        voteOnProposal(votedProposal);
        onClose();
    };
     
    const handleCancel = () => {
        setVotedProposal(
            new VotedProposal('', '', '', '',)
        );
        onClose();
    } */
 
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
                    //required ???
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
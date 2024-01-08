import './Vote.css';
import { BlockchainService } from '../../BlockchainService';
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { VotedProposal } from '../../models/VotedProposal';
import felorian from '../../img/felorian.png';
//npm install react-bootstrap bootstrap

export function Vote() {
    const { proposalList } = BlockchainService();
    const [showModal, setShowModal] = useState(false);
    const [selectedProposal, setSelectedProposal] = useState(null);
    const [tokenAddress, setTokenAddress] = useState('');
    const [tokenId, setTokenId] = useState('');
    const [isFor, setIsFor] = useState(true);

    const handleVoteClick = (proposal) => {
        setSelectedProposal(proposal);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const votedProposal = new VotedProposal(selectedProposal.id, tokenAddress, tokenId, isFor);
        // Call the vote function from the blockchain.js file here
        // vote(votedProposal);
        setShowModal(false);
    };

    return (
        <div>
            <h1>Vote here!</h1>
            <ul> 
            {proposalList.map((proposal, index) => (
                <li key={index}>
                    <h2>{proposal.title}</h2>
                    <p>{proposal.description}</p>
                    <button onClick={() => handleVoteClick(proposal)}>Vote</button>
               </li>
            ))}
            </ul>
            <img className='felorian' src={felorian} alt="Felorian game character" />
         {/* GÖR OM TILL KOMPONENT ATT IMP  */}
          {/* <Modal show={showModal} onHide={handleClose}>
         <Modal.Header closeButton>
             <Modal.Title>Vote</Modal.Title>
         </Modal.Header>
         <Form onSubmit={handleSubmit}>
             <Modal.Body>
                <Form.Group controlId="formBasicEmail">
                   <Form.Label>TokenAddress</Form.Label>
                   <Form.Control type="text" placeholder="Enter token address" value={tokenAddress} onChange={(e) => setTokenAddress(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                   <Form.Label>TokenId</Form.Label>
                   <Form.Control type="text" placeholder="Enter tokenId" value={tokenAddress} onChange={(e) => setTokenId(e.target.value)} />
                </Form.Group>
                <Form.Check type="radio" id="forRadio" label="For" checked={isFor} onChange={(e) => setIsFor(true)} />
                <Form.Check type="radio" id="againstRadio" label="Against" checked={!isFor} onChange={(e) => setIsFor(false)} />
             </Modal.Body>
             <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                   Close
                </Button>
                <Button variant="primary" type="submit">
                   Submit Vote
                </Button>
             </Modal.Footer>
         </Form>
     </Modal> */}
        </div>
    );
};



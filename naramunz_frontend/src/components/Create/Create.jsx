import React, { useState } from 'react';
import './Create.css';
import { BlockchainService } from '../../BlockchainService';
import { OneProposal } from '../../models/OneProposal';
export function Create() {

    const {createProposal} = BlockchainService();
    const [oneProposal, setOneProposal] = useState(new OneProposal("", "", "", "",));
 
    const handleChange = (e) => {
      setOneProposal({...oneProposal, [e.target.name]: e.target.value});
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
       /* const {title, description} = oneProposal; */
        createProposal(oneProposal);
    };
 
    const handleCancel = () => {
        setOneProposal(
            new OneProposal("", "", "", "",)
        );
    };
  
   return (
       <div>
            <h1>Give a proposal</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                   type="text"
                   value={oneProposal.title}
                   onChange={handleChange}
                   name="title"
                   required
                />
                <label>Decsription</label>
                <input
                   type="text"
                   value={oneProposal.description}
                   onChange={handleChange}
                   name="description"
                   required
                />
                <button type="submit" className="btn">Submit</button> 
                <button type="button" onClick={handleCancel}>Cancel</button>          
            </form>      
       </div>
   );
 };
 
 /* import React, { useState } from 'react';
import './Create.css';
import { BlockchainService } from '../../BlockchainService';
import { OneProposal } from '../../models/OneProposal';

export function Create() {

    const {createProposal} = BlockchainService();
    const [oneProposal, setOneProposal] = useState(new OneProposal("", "", "", "",));

    const handleChange = (e) => {
      setOneProposal({...oneProposal, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       /*  const {title, description} = oneProposal; */
        /* createProposal(oneProposal);
    };

    const handleCancel = () => {
        setOneProposal(
            new OneProposal("", "", "", "",)
        );
    };
 
   return (
       <div>
            <h1>Give a proposal</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    value={oneProposal.title}
                    onChange={handleChange}
                    name="title"
                    required
                />
                <label>Decsription</label>
                <input
                    type="text"
                    value={oneProposal.description}
                    onChange={handleChange}
                    name="description"
                    required
                />
                <button type="submit" className="btn">Submitt</button> 
                <button type="button" onClick={handleCancel}>Cancel</button>           
            </form>       
       </div>
   );
};
 */ 
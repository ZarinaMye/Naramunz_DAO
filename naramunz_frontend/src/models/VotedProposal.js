export class VotedProposal  { 
    proposalId; //ec hämta automatiskt vid klick på denna proposal
    tokenAddress;
    tokenId;
    isFor; //boolean, ha en checkbox
   
    constructor( proposalId, tokenAddress, tokenId, isFor) {
      this.proposalId = proposalId;
      this.tokenAddress = tokenAddress;
      this.tokenId = tokenId;
      this.isFor = isFor;
    };
  };
     
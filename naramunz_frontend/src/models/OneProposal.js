export class OneProposal  { 
  title;
  description;
  tokenAddress;
  tokenId;
  /* yesVotes;
  noVotes; */
  //proposalId;
  //tokenId, address?? hur kopplas detta till ett proposal?
 
  constructor(title, description, tokenAddress, tokenId) {
    this.title = title;
    this.description = description;
    this.tokenAddress = tokenAddress;
    this.tokenId = tokenId;
   /*  this.yesVotes = yesVotes;
    this.noVotes = noVotes; */
  };
};
    
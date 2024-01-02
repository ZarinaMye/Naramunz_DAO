export class OneProposal  { 
  title;
  description;
  yesVotes;
  noVotes;
  //proposalId;
  //tokenId, address?? hur kopplas detta till ett proposal?
 
  constructor(title, description, yesVotes, noVotes) {
    this.title = title;
    this.description = description;
    this.yesVotes = yesVotes;
    this.noVotes = noVotes;
  };
};
    
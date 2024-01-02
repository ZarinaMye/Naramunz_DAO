export class VotedProposal  { 
    title;
    description;
    yesVotes;
    noVotes;
   
    constructor(title, description, yesVotes, noVotes) {
      this.title = title;
      this.description = description;
      this.yesVotes = yesVotes;
      this.noVotes = noVotes;
    };
  };
     
export class VotedProposal  { 
    id; //sätts vid listning av alla proposals, för att kunna hämta rätt proposal vid uppdatering
    title;
    description;
    yesVotes;
    noVotes;
   
    constructor(id, title, description, yesVotes, noVotes) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.yesVotes = yesVotes;
      this.noVotes = noVotes;
    };
  };
     
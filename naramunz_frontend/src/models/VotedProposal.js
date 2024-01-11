export class VotedProposal {
    proposalId;
    tokenAddress;
    tokenId;
    isFor;

    constructor(proposalId, tokenAddress, tokenId, isFor) {
        this.proposalId = proposalId;
        this.tokenAddress = tokenAddress;
        this.tokenId = tokenId;
        this.isFor = isFor;
    }
}

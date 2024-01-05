export class OneProposal {
    title;
    description;
    tokenAddress;
    tokenId;

    constructor(title, description, tokenAddress, tokenId) {
        this.title = title;
        this.description = description;
        this.tokenAddress = tokenAddress;
        this.tokenId = tokenId;
    }
}

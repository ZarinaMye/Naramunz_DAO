import Web3 from "web3";
import { DAO_ADDRESS, DAO_ABI } from "./config";
import { useState, useEffect } from "react";

export function BlockchainService() {
    const [proposalList, setProposalList] = useState([]);
    const [account, setAccount] = useState();
    const [contract, setContract] = useState();

    useEffect(() => {
        const getAccounts = async () => {
            const web3 = new Web3(window.ethereum || "http://localhost:7545");
            const accountLoggedIn = await web3.eth.getAccounts();
            if (account !== accountLoggedIn[0]) {
                setAccount(accountLoggedIn[0]);
                const contract = new web3.eth.Contract(DAO_ABI, DAO_ADDRESS);
                setContract(contract);
                await updatedProposalList(contract);
            }
        };
        if (!account) {
            getAccounts();
        }
    }, [account]);

    async function connectToMetaMask() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                console.log("Address connected:", accounts);
                window.alert("MetaMask is alraedy connected");
            } catch (error) {
                console.error(error);
            }
        } else {
            window.alert("Connect MetaMask to the page");
            connectToMetaMask();
        }
    }

    const updatedProposalList = async (contract) => {
        if (!contract) return;
        let proposalIndexes = await contract.methods.getProposals().call();
        let proposalList = [];
        for (let i = 0; i < proposalIndexes.length; i++) {
            let proposal = await contract.methods.proposals(i).call();
            proposalList.push(proposal);
        }
        setProposalList(proposalList);
        console.log(proposalList);
        return proposalList;
    };

    async function createProposal(oneProposal) {
        if (!contract) {
            console.error("Contract is not defined");
            window.alert("Connect MetaMask to the page");
            connectToMetaMask();
            return;
        }
        try {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const account = accounts[0];
            await contract.methods
                .createProposal(
                    oneProposal.title,
                    oneProposal.description,
                    oneProposal.tokenAddress,
                    oneProposal.tokenId
                )
                .send({ from: account })
                .once("receipt", async (receipt) => {
                    await updatedProposalList(contract);
                });
        } catch (error) {
            console.error(error);
        }
    }

    async function voteOnProposal(votedPropsal) {
        if (!contract) {
            console.error("Contract is not defined");
            window.alert("Connect MetaMask to the page");
            return;
        }
        try {
            await contract.methods
                .vote(
                    votedPropsal.proposalId,
                    votedPropsal.tokenAddress,
                    votedPropsal.tokenId,
                    votedPropsal.isFor
                )
                .estimateGas({ from: account });
        } catch (error) {
            if (
                error.message.includes(
                    "You have already voted on this proposal"
                )
            ) {
                window.alert("You have already voted on this proposal");
                return;
            } else {
                console.error(error);
            }
        }
        try {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const account = accounts[0];
            await contract.methods
                .vote(
                    votedPropsal.proposalId,
                    votedPropsal.tokenAddress,
                    votedPropsal.tokenId,
                    votedPropsal.isFor
                )
                .send({ from: account })
                .once("receipt", async (receipt) => {
                    await updatedProposalList(contract);
                });
        } catch (error) {
            console.error(error);
        }
    }

    return {
        connectToMetaMask,
        updatedProposalList,
        createProposal,
        voteOnProposal,
        proposalList,
    };
}

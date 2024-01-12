import Web3 from "web3";
import { DAO_ADDRESS, DAO_ABI } from "./config";
import { useState, useEffect } from "react";

export function BlockchainService() {
    const [proposalList, setProposalList] = useState([]);
    const [account, setAccount] = useState();
    const [contract, setContract] = useState();

    useEffect(() => {
        const getAccounts = async () => {
            /*  await connectMetaMask(); */
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

    async function connectMetaMask() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                console.log("Konto kopplat:", accounts);
            } catch (error) {
                console.error(error);
            }
        } else {
            window.alert("Anslut din MetaMask till sidan");
            connectMetaMask();
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
            window.alert("Anslut din MetaMask till sidan");
            connectMetaMask();
            return;
        }
        try {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const account = accounts[0]; // om det första kontot är det som ska användas...
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
            window.alert("Koppla MetaMask till sidan");
            return;
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
        connectMetaMask,
        updatedProposalList,
        createProposal,
        voteOnProposal,
        proposalList,
    };
}

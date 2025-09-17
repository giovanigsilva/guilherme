import React, { createContext, useContext, useState, useEffect } from "react";
import { ethers } from "ethers";

const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [chainId, setChainId] = useState(null);

  async function connect() {
    if (!window.ethereum) {
      alert("MetaMask not found! Install it first.");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      const bal = await provider.getBalance(addr);
      const network = await provider.getNetwork();

      setAddress(addr);
      setBalance(ethers.formatEther(bal));
      setChainId(network.chainId.toString());
    } catch (error) {
      console.error("Wallet connect error:", error);
    }
  }

  function disconnect() {
    setAddress(null);
    setBalance(null);
    setChainId(null);
  }

  // Auto detect account / network changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length === 0) disconnect();
        else setAddress(accounts[0]);
      });

      window.ethereum.on("chainChanged", (_chainId) => {
        setChainId(_chainId);
      });
    }
  }, []);

  return (
    <WalletContext.Provider value={{ address, balance, chainId, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  return useContext(WalletContext);
}

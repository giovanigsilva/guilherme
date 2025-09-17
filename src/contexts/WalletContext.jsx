import React, { createContext, useContext, useState } from "react";
import { ethers } from "ethers";

const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  async function connect() {
    if (!window.ethereum) {
      alert("MetaMask não encontrada! Instale a extensão.");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      const bal = await provider.getBalance(addr);

      setAddress(addr);
      setBalance(ethers.formatEther(bal));
    } catch (error) {
      console.error("Erro ao conectar carteira:", error);
    }
  }

  function disconnect() {
    setAddress(null);
    setBalance(null);
  }

  return (
    <WalletContext.Provider value={{ address, balance, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet deve ser usado dentro de WalletProvider");
  return ctx;
}

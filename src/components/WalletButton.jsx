import React from "react";
import { useWallet } from "../contexts/WalletContext";

export function WalletButton() {
  const { address, balance, connect, disconnect } = useWallet();

  const boxStyle = {
    background: "#fff",
    color: "#333",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "350px"
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    background: "#2a5298",
    color: "#fff",
    transition: "0.3s"
  };

  const buttonDisconnect = {
    ...buttonStyle,
    background: "#e63946"
  };

  return (
    <div style={boxStyle}>
      {address ? (
        <div>
          <p><strong>Carteira:</strong> <br /> {address}</p>
          <p><strong>Saldo:</strong> {balance} ETH</p>
          <button onClick={disconnect} style={buttonDisconnect}>
            Desconectar
          </button>
        </div>
      ) : (
        <button onClick={connect} style={buttonStyle}>
          🔗 Conectar Carteira (MetaMask)
        </button>
      )}
    </div>
  );
}

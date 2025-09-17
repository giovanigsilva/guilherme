import React from "react";
import { WalletProvider } from "./contexts/WalletContext";
import { WalletButton } from "./components/WalletButton";

function App() {
  return (
    <WalletProvider>
      <div style={{
        width: "100vw",           // largura total
        height: "100vh",          // altura total
        display: "flex",
        justifyContent: "center", // centralizar horizontal
        alignItems: "center",     // centralizar vertical
        flexDirection: "column",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: 0,
        padding: 0
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          🚀 Web3 - Conectar MetaMask
        </h1>
        <p style={{ marginBottom: "30px", fontSize: "1.2rem", opacity: 0.9 }}>
          Clique abaixo para conectar sua carteira Ethereum
        </p>
        <WalletButton />
      </div>
    </WalletProvider>
  );
}

export default App;

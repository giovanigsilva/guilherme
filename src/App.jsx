import React from "react";
import { WalletProvider } from "./contexts/WalletContext";
import { WalletButton } from "./components/WalletButton";

function App() {
  return (
    <WalletProvider>
      <div style={{
        width: "100vw",           // full width
        height: "100vh",          // full height
        display: "flex",
        justifyContent: "center", // center horizontally
        alignItems: "center",     // center vertically
        flexDirection: "column",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: 0,
        padding: 0
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          🚀 Web3 - Connect MetaMask
        </h1>
        <p style={{ marginBottom: "30px", fontSize: "1.2rem", opacity: 0.9 }}>
          Click below to connect your Ethereum wallet
        </p>
        <WalletButton />
      </div>
    </WalletProvider>
  );
}

export default App;

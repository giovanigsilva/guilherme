<img width="706" height="363" alt="image" src="https://github.com/user-attachments/assets/98ffe1b7-0c3e-4c04-b54c-bcd236fcf4a4" />


<img width="678" height="461" alt="image" src="https://github.com/user-attachments/assets/81c2fdc2-a033-4e7d-82f7-a76267360f0d" />


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Web3 Wallet Demo – React + Vite + JavaScript

## 📌 Overview
This project is a **simple Web3 demo** built with **React (Vite)** and **JavaScript**.  
It allows users to:
- Connect their **MetaMask wallet**
- Display the **wallet address**
- Show the **ETH balance**
- Disconnect the wallet

The implementation uses **ethers.js** and can easily be adapted to **TypeScript**.

---

## ⚡ Prerequisites
- Node.js (v18 or higher recommended)  
- NPM or Yarn  
- MetaMask extension installed in your browser  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/web3-wallet-demo.git
cd web3-wallet-demo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Open in browser
Go to:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 🔗 How It Works
1. Click **“Connect Wallet”**.  
2. MetaMask will prompt you to authorize the connection.  
3. Once approved, your wallet **address** and **ETH balance** will be displayed.  
4. Click **“Disconnect”** to clear the session.  

---

## 📂 Project Structure
```
src/
│── App.jsx               # Main application file
│── main.jsx              # React entry point
│
├── contexts/
│   └── WalletContext.jsx # Context API for wallet state
│
├── components/
│   └── WalletButton.jsx  # Button to connect/disconnect wallet
```

---

## ✅ Features Implemented
- Connect Wallet (MetaMask)  
- Show Wallet Address  
- Disconnect Wallet  
- Display ETH Balance  
- Error handling (no MetaMask / rejected request)  
- Auto-detect account or network changes (`accountsChanged`, `chainChanged`)  
---

## 🔮 Possible Improvements

- Add support for multiple wallet providers  
- Improve styling with TailwindCSS or Material UI  

---

⚡ This project covers **all requirements** of the Web3 Developer Assessment (including bonus tasks).


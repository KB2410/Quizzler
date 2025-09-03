# 🧠 Crypto Quiz DApp

A decentralized multiple-choice quiz application built on the **Aptos ecosystem**. Players can answer quizzes, compete on a **leaderboard**, and earn **NFT/Token rewards** for completing question sets correctly.

---

## 🚀 Features

* **Multiple Choice Quiz**: Fun crypto-related questions.
* **Leaderboard**: Track player scores in real-time.
* **Rewards**: Distribute tokens or NFTs to users who answer all questions correctly.
* **Decentralized**: Quiz logic and rewards secured on Aptos blockchain.
* **Database Integration**: Supabase stores user quiz attempts, scores, and leaderboard data.

---

## 🛠️ Tech Stack

* **Frontend**: React.js + Aptos TypeScript SDK (wallet connect, transactions)
* **Smart Contract**: Move language on Aptos (quiz logic + reward distribution)
* **Database**: Supabase (user data, quiz questions, leaderboard)
* **Wallet Integration**: Petra Wallet / Martian Wallet
* **Version Control**: Git & GitHub

---

## 📂 Project Structure

```
crypto-quiz-dapp/
├── frontend/         # React.js frontend
├── move-contracts/   # Move smart contracts
├── supabase/         # Supabase config & schema
└── README.md         # Documentation
```

---

## ⚡ Quick Start

### 1. Clone Repository

```bash
# Clone your fork
git clone https://github.com/<your-username>/crypto-quiz-dapp.git
cd crypto-quiz-dapp
```

### 2. Setup Frontend (React)

```bash
cd frontend
npm install    # install dependencies
npm run dev    # start local dev server
```

Frontend will run on [http://localhost:3000](http://localhost:3000).

### 3. Setup Move Contract

```bash
cd move-contracts
aptos init      # initialize Aptos project (connect wallet/account)
aptos move compile   # compile Move smart contracts
aptos move publish   # publish contract to devnet
```

### 4. Setup Supabase

* Go to [Supabase](https://supabase.com/) → Create new project.
* Copy **Project URL** & **Anon Key** into `frontend/.env`.
* Setup tables:

  * **users** → id, wallet\_address, score
  * **leaderboard** → wallet\_address, total\_score
  * **questions** → id, question, options\[], correct\_answer

### 5. Run Full Stack

* React frontend connected with Aptos SDK + Supabase.
* Contracts deployed → rewards distribution enabled.

---

## 🔑 Environment Variables (`frontend/.env`)

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_KEY=your-supabase-anon-key
VITE_APTOS_NODE_URL=https://fullnode.devnet.aptoslabs.com
```

---

## 🧩 Useful Commands

### Git

```bash
git init                   # start git repo
git add .                  # stage files
git commit -m "msg"        # commit changes
git push origin main        # push to GitHub
```

### Frontend

```bash
npm install     # install deps
npm run dev     # run local server
```

### Move

```bash
aptos init              # setup Aptos project
aptos move compile      # compile Move contract
aptos move test         # run tests
aptos move publish      # publish to devnet
```

---

## 👥 Team Roles

* **Frontend (React + Supabase + Wallets)** → Kartik Botre
* **Backend (Move contract logic + Rewards)** → Aditya Shisodiya
* **Docs + Testing + Debugging** → Shrawasti Bhiwsane

---

## 🎯 Future Improvements

* Add AI-generated quiz questions.
* Support multiple quiz categories.
* Deploy leaderboard on-chain for transparency.
* Advanced NFT reward system.

---

## 📜 License

MIT License. Free to use and modify for learning & hackathon purposes.

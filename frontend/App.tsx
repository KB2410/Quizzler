import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaVoteYea } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

type Proposal = {
  id: number;
  proposer: string;
  title: string;
  description: string;
  vote_count: number;
  milestone_count: number;
  current_milestone: number;
  is_funded: boolean;
};

const mockProposals: Proposal[] = [
  {
    id: 0,
    proposer: "0x123",
    title: "Decentralized Learning Platform",
    description: "A blockchain-based platform for open education.",
    vote_count: 5,
    milestone_count: 3,
    current_milestone: 1,
    is_funded: false,
  },
  {
    id: 1,
    proposer: "0x456",
    title: "Green Energy NFTs",
    description: "NFTs that fund renewable energy projects.",
    vote_count: 3,
    milestone_count: 2,
    current_milestone: 2,
    is_funded: true,
  },
];

export default function App() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [milestones, setMilestones] = useState(1);

  useEffect(() => {
    setProposals(mockProposals);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProposal: Proposal = {
      id: proposals.length,
      proposer: "0xABC", // mock user
      title,
      description: desc,
      vote_count: 0,
      milestone_count: milestones,
      current_milestone: 0,
      is_funded: false,
    };
    setProposals([...proposals, newProposal]);
    setTitle("");
    setDesc("");
    setMilestones(1);
  };

  const handleVote = (id: number) => {
    const updated = proposals.map((p) =>
      p.id === id ? { ...p, vote_count: p.vote_count + 1 } : p
    );
    setProposals(updated);
  };

  const handleRelease = (id: number) => {
    const updated = proposals.map((p) => {
      if (p.id === id && p.current_milestone < p.milestone_count) {
        const newMilestone = p.current_milestone + 1;
        return {
          ...p,
          current_milestone: newMilestone,
          is_funded: newMilestone === p.milestone_count,
        };
      }
      return p;
    });
    setProposals(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white px-6 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
          Guardian Angel Crowdfunding ✨
        </h1>
        <p className="text-gray-300 mt-2">
          A decentralized platform for funding and milestone-based voting.
        </p>
      </header>

      {/* Submit Proposal Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto mb-12 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">🚀 Submit a Proposal</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-xl bg-black/30 border border-gray-600 focus:outline-none focus:border-pink-500"
          />
          <textarea
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-xl bg-black/30 border border-gray-600 focus:outline-none focus:border-pink-500"
          />
          <input
            type="number"
            min="1"
            value={milestones}
            onChange={(e) => setMilestones(Number(e.target.value))}
            required
            className="w-full px-4 py-2 rounded-xl bg-black/30 border border-gray-600 focus:outline-none focus:border-pink-500"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500 font-semibold hover:scale-105 transition"
          >
            Submit Proposal
          </button>
        </form>
      </motion.div>

      {/* Proposals Section */}
      <h2 className="text-2xl font-bold mb-6 text-center">📋 Proposals</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {proposals.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md relative"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-300 text-sm mb-3">{p.description}</p>
            <p className="text-sm">
              <span className="text-pink-400">Proposer:</span> {p.proposer}
            </p>
            <p className="mt-2">
              Votes: <span className="font-bold">{p.vote_count}</span>
            </p>
            <p>
              Milestones:{" "}
              <span className="font-bold">
                {p.current_milestone}/{p.milestone_count}
              </span>
            </p>
            <p className="mb-4">
              Status:{" "}
              <span
                className={`${
                  p.is_funded ? "text-green-400" : "text-yellow-400"
                } font-bold`}
              >
                {p.is_funded ? "Funded ✅" : "In Progress ⏳"}
              </span>
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => handleVote(p.id)}
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-105 transition flex items-center justify-center gap-2"
              >
                <FaVoteYea /> Vote
              </button>
              <button
                onClick={() => handleRelease(p.id)}
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 hover:scale-105 transition flex items-center justify-center gap-2"
              >
                <MdAdminPanelSettings /> Release
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
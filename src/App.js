import React, { useState, useEffect } from 'react';
import './App.css';
import { summarizeText } from './summarize';

function App() {
  const [sources, setSources] = useState([
    // same as before ...
  ]);

  const [newEmail, setNewEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [digest, setDigest] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState('actionable');

  const promptTemplates = {
    // same as before ...
  };

  const generateDigest = async () => {
    setIsLoading(true);

    // Example simulated content; this can be dynamically built from source emails later
    const combinedText = `
      🔥 The Rundown University:
      OpenAI launches GPT-4.5 with multimodal abilities.

      🧠 Superhuman:
      3 AI Tools You Need: Taskade AI, Rewind, and Puzzle Labs.

      🔮 Future//Proof:
      Meta is hiring AGI experts in London to build long-term brain-like models.

      📦 AI Essentials:
      Free PDF download: "Prompt Engineering for Beginners"
    `;

    try {
      const summary = await summarizeText(combinedText);
      const mockDigest = {
        title: "🤖 Manpreet's AI Digest - " + new Date().toLocaleDateString(),
        summary,
        sections: [],
        metadata: {
          sources: 6,
          articlesProcessed: 47,
          readingTime: '6 min',
          generatedAt: new Date().toLocaleString()
        }
      };
      setDigest(mockDigest);
    } catch (err) {
      console.error("Error generating summary:", err);
    }

    setIsLoading(false);
  };

  const addSource = () => {
    if (newEmail && newEmail.includes('@')) {
      const newSource = {
        id: Date.now(),
        name: newEmail.split('@')[0],
        email: newEmail,
        status: "active",
        lastUpdate: "Just added"
      };
      setSources([...sources, newSource]);
      setNewEmail('');
    }
  };

  const toggleSourceStatus = (id) => {
    setSources(sources.map(source =>
      source.id === id
        ? { ...source, status: source.status === 'active' ? 'inactive' : 'active' }
        : source
    ));
  };

  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header, Sources, Prompts... same as before */}

      <section className="mb-12">
        <div className="text-center">
          <button
            onClick={generateDigest}
            disabled={isLoading}
            className="btn-primary px-8 py-4 rounded-xl text-xl font-semibold text-white hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center gap-3">
                <div className="loading-spinner"></div>
                Generating Your Digest...
              </span>
            ) : (
              "🚀 Generate AI Digest"
            )}
          </button>
        </div>
      </section>

      {digest && (
        <section className="digest-container p-8 rounded-xl animate-fadeInUp">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{digest.title}</h2>
            <p className="text-gray-300 mb-4">{digest.summary}</p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <span>📊 {digest.metadata.sources} Sources</span>
              <span>📄 {digest.metadata.articlesProcessed} Articles</span>
              <span>⏱️ {digest.metadata.readingTime} Read</span>
              <span>🕒 {digest.metadata.generatedAt}</span>
            </div>
          </header>
        </section>
      )}
    </div>
  );
}

export default App;

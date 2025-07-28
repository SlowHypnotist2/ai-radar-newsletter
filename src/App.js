import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [sources, setSources] = useState([
    {
      id: 1,
      name: "The Rundown University",
      email: "newsletter@therundown.ai",
      status: "active",
      lastUpdate: "2 hours ago"
    },
    {
      id: 2,
      name: "Superhuman",
      email: "updates@superhuman.ai",
      status: "active",
      lastUpdate: "3 hours ago"
    },
    {
      id: 3,
      name: "AI Fire",
      email: "digest@aifire.co",
      status: "active",
      lastUpdate: "1 hour ago"
    },
    {
      id: 4,
      name: "AI Secret",
      email: "news@aisecret.com",
      status: "active",
      lastUpdate: "4 hours ago"
    },
    {
      id: 5,
      name: "Future//Proof",
      email: "newsletter@futureproof.ai",
      status: "active",
      lastUpdate: "5 hours ago"
    },
    {
      id: 6,
      name: "AI Essentials",
      email: "digest@aiessentials.com",
      status: "active",
      lastUpdate: "6 hours ago"
    },
    {
      id: 7,
      name: "AI Valley",
      email: "team@aivalley.ai",
      status: "inactive",
      lastUpdate: "Never"
    }
  ]);

  const [newEmail, setNewEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [digest, setDigest] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState('actionable');

  const promptTemplates = {
    actionable: {
      title: "🎯 Focus on Actionable Tools",
      description: "Prioritize tools and products I can use immediately"
    },
    business: {
      title: "📊 Business & Investment Focus",
      description: "Highlight funding, acquisitions, and business opportunities"
    },
    research: {
      title: "🔬 Research & Breakthroughs",
      description: "Focus on scientific advances and technical innovations"
    },
    safety: {
      title: "🛡️ Safety & Regulation",
      description: "Emphasize AI safety, ethics, and regulatory developments"
    },
    creative: {
      title: "💡 Creative & Content Tools",
      description: "Highlight tools for content creation and creative work"
    },
    industry: {
      title: "🏥 Industry Applications",
      description: "Focus on AI applications in specific industries"
    }
  };

  const generateDigest = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const mockDigest = {
        title: "🤖 Manpreet's AI Digest - July 28, 2025",
        summary: "Your personalized AI news digest combining insights from 6 leading newsletters",
        sections: [
          {
            title: "🔥 Breaking AI News",
            items: [
              {
                title: "OpenAI Releases GPT-5 with Revolutionary Reasoning Capabilities",
                source: "The Rundown University",
                summary: "The latest model shows unprecedented improvements in logical reasoning and problem-solving.",
                link: "#",
                priority: "high"
              },
              {
                title: "Google's Gemini Ultra 2.0 Challenges GPT-5 Leadership",
                source: "AI Fire",
                summary: "New benchmarks show Gemini Ultra 2.0 matching or exceeding GPT-5 in several key areas.",
                link: "#",
                priority: "high"
              }
            ]
          },
          {
            title: "🛠️ New AI Tools & Products",
            items: [
              {
                title: "Anthropic Launches Claude Code Assistant",
                source: "Superhuman",
                summary: "A specialized coding assistant that integrates directly with popular IDEs.",
                link: "#",
                priority: "medium"
              },
              {
                title: "Midjourney V7 Beta Now Available",
                source: "AI Essentials",
                summary: "Enhanced photorealism and better text rendering in the latest update.",
                link: "#",
                priority: "medium"
              }
            ]
          },
          {
            title: "💡 Industry Insights",
            items: [
              {
                title: "AI Adoption Reaches 75% Among Fortune 500 Companies",
                source: "Future//Proof",
                summary: "New survey reveals widespread AI integration across major corporations.",
                link: "#",
                priority: "low"
              },
              {
                title: "Venture Capital AI Investments Hit $50B in Q3 2025",
                source: "AI Secret",
                summary: "Record-breaking quarter for AI startup funding and acquisitions.",
                link: "#",
                priority: "medium"
              }
            ]
          }
        ],
        metadata: {
          sources: 6,
          articlesProcessed: 47,
          readingTime: "8 min",
          generatedAt: new Date().toLocaleString()
        }
      };
      
      setDigest(mockDigest);
      setIsLoading(false);
    }, 2000);
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
      <div className="container mx-auto px-6 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">✨</span>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight py-2">
              Manpreet's AI Digest
            </h1>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold ml-2">
              BETA
            </span>
          </div>
          <p className="text-xl text-gray-300 mb-2">
            Your personalized AI newsletter, delivered every 2 days
          </p>
          <p className="text-gray-400">
            Consolidates 6 daily newsletters into one focused digest • Saves ~45 minutes daily
          </p>
        </header>

        {/* Email Sources Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📧</span>
            <h2 className="text-3xl font-bold text-white">Connected Email Sources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sources.map((source) => (
              <div
                key={source.id}
                className={`source-card p-6 rounded-xl cursor-pointer hover-lift ${
                  source.status === 'active' ? 'source-active' : 'source-inactive'
                }`}
                onClick={() => toggleSourceStatus(source.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className={`status-dot ${source.status === 'active' ? 'status-active' : 'status-inactive'}`}></span>
                    <h3 className="font-semibold text-white">{source.name}</h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-2">{source.email}</p>
                <p className="text-gray-400 text-xs">Last: {source.lastUpdate}</p>
              </div>
            ))}
          </div>

          {/* Add New Source */}
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex gap-4">
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Add newsletter email (e.g., newsletter@example.com)"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={addSource}
                className="btn-secondary px-6 py-3 rounded-lg font-semibold text-white hover-lift"
              >
                + Add Source
              </button>
            </div>
          </div>
        </section>

        {/* AI Prompt Customization */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🎯</span>
            <h2 className="text-3xl font-bold text-white">Customize Your Focus</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(promptTemplates).map(([key, template]) => (
              <button
                key={key}
                onClick={() => setSelectedPrompt(key)}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  selectedPrompt === key
                    ? 'bg-blue-600/30 border-2 border-blue-500 transform scale-105'
                    : 'glass-effect hover:bg-white/10'
                }`}
              >
                <h3 className="font-semibold text-white mb-2">{template.title}</h3>
                <p className="text-gray-300 text-sm">{template.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Generate Digest */}
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

        {/* Digest Display */}
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

            {digest.sections.map((section, index) => (
              <div key={index} className="digest-section pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0">
                <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`digest-item p-6 rounded-lg priority-${item.priority}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-2 text-lg">
                            <a href={item.link} className="hover:text-blue-400 transition-colors">
                              {item.title}
                            </a>
                          </h4>
                          <p className="text-gray-300 mb-3">{item.summary}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-blue-400 font-medium">📰 {item.source}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              item.priority === 'high' ? 'bg-red-900/50 text-red-300' :
                              item.priority === 'medium' ? 'bg-yellow-900/50 text-yellow-300' :
                              'bg-green-900/50 text-green-300'
                            }`}>
                              {item.priority.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <footer className="text-center pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                ✨ Generated with AI • Tailored for Manpreet's interests • 
                <span className="text-blue-400 ml-1">Save 45+ minutes daily</span>
              </p>
            </footer>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;

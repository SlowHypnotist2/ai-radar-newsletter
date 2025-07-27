import React, { useState } from 'react';
import './App.css';

function App() {
  const [feeds, setFeeds] = useState([]);
  const [digest, setDigest] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const sampleFeeds = [
    'https://therundown.ai/feed',
    'https://superhuman.substack.com/feed',
    'https://aifire.co/feed'
  ];

  const generateDigest = async () => {
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const sampleDigest = `
✨ **Manpreet's AI Digest** 📅 *Delivered every 2 days*

🧠 *Curated from: The Rundown University, Superhuman, AI Fire, AI Secret, AI Essentials*
🎯 *Topics: AI news, model comparisons, free tools, downloads, and resources*

📌 **1. Top AI News You Should Know**
*Quick highlights from the last 2 days across your trusted sources*

• **🧠 OpenAI's GPT-4.5 shows coding boost over Claude 3.5**
  → Benchmark tests show GPT-4.5 Turbo now outperforms Claude 3.5 in Python and JavaScript by 12%.
  🔗 Read Benchmark

• **🧊 Stability AI releases Stable Video 3 (Free for Creators)**
  → Convert static images into 3s video clips in seconds. Great for content creators.
  🔗 Try it Free

• **🌍 Google DeepMind's "Gemini Flash" now available globally**
  → Lighter than Gemini 1.5, still handles 1M tokens. Free to test on Vertex AI.
  🔗 Use it Here

⚔️ **2. Model Battle of the Week: GPT-4o vs Claude 3.5**

| Feature | GPT-4o (OpenAI) | Claude 3.5 (Anthropic) |
|---------|-----------------|-------------------------|
| Coding Skills | 🟢 Excellent | 🟡 Good |
| File Upload Support | ✅ Yes | ✅ Yes |
| Free Access? | 🟡 Limited (ChatGPT) | ✅ More generous |
| Use Case Match | Coding, Web Dev | Long Text, Safety |

💬 *Verdict*: GPT-4o is stronger for developers; Claude is better for research summaries or long chats.

🎁 **3. Free Stuff Section**
*Resources you can grab right now — no signup traps*

• **💡 Free Prompt Engineering Guide (PDF)**
  From Superhuman: 40+ prompt strategies + examples
  🔗 Download PDF

• **🎓 AI Automation Course (Limited Slots, $0)**
  Hosted by AI Essentials, covers Make.com + ChatGPT agents.
  🔗 Enroll Free

• **🧾 Claude 3 Cheat Sheet (Updated July 2025)**
  Includes Claude's file formatting tips, limits, and prompts.
  🔗 Download Now

🔗 **4. Quick Tools You Might Like**

• 🛠️ Magai.io – All-in-one AI dashboard (Free until Aug 1)
• 🔍 Blackbox AI – Coding assistant + autocomplete
• 📖 FlowGPT – Best prompt library with free login

📬 **Coming Next Issue**
• GPT-5 Rumors: What's real and what's hype?
• AutoGPT vs AgentOps: Which agent wins in workflows?
• Free Claude Pro invite codes (maybe 😉)
      `;
      setDigest(sampleDigest);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="logo">
            <span className="sparkle">✨</span>
            <h1>Manpreet's AI Digest</h1>
            <span className="tech-accent">[BETA]</span>
          </div>
          <p className="tagline">Your personalized AI newsletter, delivered every 2 days</p>
        </header>

        <div className="control-panel">
          <div className="feed-section">
            <h3>📡 Connected Sources</h3>
            <div className="feed-list">
              <div className="feed-item active">🧠 The Rundown University</div>
              <div className="feed-item active">🚀 Superhuman</div>
              <div className="feed-item active">🔥 AI Fire</div>
              <div className="feed-item active">🔒 AI Secret</div>
              <div className="feed-item active">⚡ AI Essentials</div>
            </div>
          </div>

          <button 
            className={`generate-btn ${isGenerating ? 'generating' : ''}`}
            onClick={generateDigest}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <span className="spinner"></span>
                Generating your digest...
              </>
            ) : (
              <>
                🤖 Generate AI Digest
              </>
            )}
          </button>
        </div>

        {digest && (
          <div className="digest-container">
            <div className="digest-header">
              <h2>📰 Your Latest Digest</h2>
              <div className="timestamp">Generated: {new Date().toLocaleString()}</div>
            </div>
            <div className="digest-content">
              <pre>{digest}</pre>
            </div>
            <div className="digest-actions">
              <button className="action-btn">📧 Email This</button>
              <button className="action-btn">📋 Copy to Clipboard</button>
              <button className="action-btn">💾 Save as PDF</button>
            </div>
          </div>
        )}

        <footer className="footer">
          <p>🔮 Powered by AI • Built for efficiency • Updated every 48 hours</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
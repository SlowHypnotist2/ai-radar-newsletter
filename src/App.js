import React, { useState } from 'react';
import './App.css';

function App() {
  const [rssFeeds, setRssFeeds] = useState([
    { name: 'The Rundown University', url: 'https://therundown.ai/feed', active: true },
    { name: 'Superhuman', url: 'https://superhuman.substack.com/feed', active: true },
    { name: 'AI Fire', url: 'https://aifire.co/feed', active: true },
    { name: 'AI Secret', url: 'https://aisecret.substack.com/feed', active: true },
    { name: 'AI Essentials', url: 'https://aiessentials.substack.com/feed', active: true }
  ]);
  
  const [digest, setDigest] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [newFeedUrl, setNewFeedUrl] = useState('');

  const promptSuggestions = [
    "🎯 Focus on free AI tools and resources only",
    "🔥 Highlight breaking AI news from last 24 hours", 
    "💼 Business applications of new AI models",
    "🛠️ Developer tools and coding AI updates",
    "📊 Include AI market trends and investments",
    "🎨 Creative AI tools for designers and creators"
  ];

  const generateDigest = async () => {
    setIsGenerating(true);
    
    // Simulate RSS feed fetching and processing
    setTimeout(() => {
      const digestData = {
        header: "✨ Manpreet's AI Digest 📅 *Delivered every 2 days*",
        sources: "🧠 *Curated from: The Rundown University, Superhuman, AI Fire, AI Secret, AI Essentials*",
        topics: "🎯 *Topics: AI news, model comparisons, free tools, downloads, and resources*",
        
        topNews: [
          {
            title: "🧠 OpenAI's GPT-4.5 shows coding boost over Claude 3.5",
            description: "Benchmark tests show GPT-4.5 Turbo now outperforms Claude 3.5 in Python and JavaScript by 12%.",
            link: "https://example.com/gpt4-benchmark",
            linkText: "Read Benchmark"
          },
          {
            title: "🧊 Stability AI releases Stable Video 3 (Free for Creators)",
            description: "Convert static images into 3s video clips in seconds. Great for content creators.",
            link: "https://stability.ai/stable-video",
            linkText: "Try it Free"
          },
          {
            title: "🌍 Google DeepMind's Gemini Flash now available globally",
            description: "Lighter than Gemini 1.5, still handles 1M tokens. Free to test on Vertex AI.",
            link: "https://cloud.google.com/vertex-ai",
            linkText: "Use it Here"
          }
        ],
        
        modelComparison: {
          title: "⚔️ Model Battle of the Week: GPT-4o vs Claude 3.5",
          features: [
            { feature: "Coding Skills", gpt4: "🟢 Excellent", claude: "🟡 Good" },
            { feature: "File Upload Support", gpt4: "✅ Yes", claude: "✅ Yes" },
            { feature: "Free Access?", gpt4: "🟡 Limited (ChatGPT)", claude: "✅ More generous" },
            { feature: "Use Case Match", gpt4: "Coding, Web Dev", claude: "Long Text, Safety" }
          ],
          verdict: "GPT-4o is stronger for developers; Claude is better for research summaries or long chats."
        },
        
        freeResources: [
          {
            title: "💡 Free Prompt Engineering Guide (PDF)",
            description: "From Superhuman: 40+ prompt strategies + examples",
            link: "https://superhuman.com/prompt-guide",
            linkText: "Download PDF"
          },
          {
            title: "🎓 AI Automation Course (Limited Slots, $0)",
            description: "Hosted by AI Essentials, covers Make.com + ChatGPT agents.",
            link: "https://aiessentials.com/free-course",
            linkText: "Enroll Free"
          },
          {
            title: "🧾 Claude 3 Cheat Sheet (Updated July 2025)",
            description: "Includes Claude's file formatting tips, limits, and prompts.",
            link: "https://anthropic.com/claude-cheat-sheet",
            linkText: "Download Now"
          }
        ],
        
        quickTools: [
          { name: "Magai.io", description: "All-in-one AI dashboard", status: "Free until Aug 1", link: "https://magai.io" },
          { name: "Blackbox AI", description: "Coding assistant + autocomplete", status: "Free tier", link: "https://blackbox.ai" },
          { name: "FlowGPT", description: "Best prompt library", status: "Free login", link: "https://flowgpt.com" }
        ],
        
        nextIssue: [
          "GPT-5 Rumors: What's real and what's hype?",
          "AutoGPT vs AgentOPs: Which agent wins in workflows?",
          "Free Claude Pro invite codes (maybe 😉)"
        ]
      };
      
      setDigest(digestData);
      setIsGenerating(false);
    }, 2000);
  };

  const addRssFeed = () => {
    if (newFeedUrl && !rssFeeds.find(feed => feed.url === newFeedUrl)) {
      const feedName = newFeedUrl.includes('substack') ? 
        newFeedUrl.split('.substack')[0].split('//')[1] : 
        newFeedUrl.split('/')[2];
      
      setRssFeeds([...rssFeeds, { 
        name: feedName, 
        url: newFeedUrl, 
        active: true 
      }]);
      setNewFeedUrl('');
    }
  };

  const toggleFeed = (index) => {
    const updated = [...rssFeeds];
    updated[index].active = !updated[index].active;
    setRssFeeds(updated);
  };

  const DigestContent = ({ data }) => (
    <div className="formatted-digest">
      <div className="digest-header-content">
        <h2>{data.header}</h2>
        <p>{data.sources}</p>
        <p>{data.topics}</p>
      </div>

      <section className="news-section">
        <h3>📌 1. Top AI News You Should Know</h3>
        <p className="section-subtitle">Quick highlights from the last 2 days across your trusted sources</p>
        
        {data.topNews.map((news, index) => (
          <div key={index} className="news-item">
            <h4>{news.title}</h4>
            <p>→ {news.description}</p>
            <a href={news.link} target="_blank" rel="noopener noreferrer" className="digest-link">
              🔗 {news.linkText}
            </a>
          </div>
        ))}
      </section>

      <section className="comparison-section">
        <h3>{data.modelComparison.title}</h3>
        <div className="comparison-table">
          <div className="table-header">
            <div>Feature</div>
            <div>GPT-4o (OpenAI)</div>
            <div>Claude 3.5 (Anthropic)</div>
          </div>
          {data.modelComparison.features.map((row, index) => (
            <div key={index} className="table-row">
              <div>{row.feature}</div>
              <div>{row.gpt4}</div>
              <div>{row.claude}</div>
            </div>
          ))}
        </div>
        <p className="verdict">💬 <em>Verdict</em>: {data.modelComparison.verdict}</p>
      </section>

      <section className="resources-section">
        <h3>🎁 3. Free Stuff Section</h3>
        <p className="section-subtitle">Resources you can grab right now — no signup traps</p>
        
        {data.freeResources.map((resource, index) => (
          <div key={index} className="resource-item">
            <h4>{resource.title}</h4>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="digest-link">
              🔗 {resource.linkText}
            </a>
          </div>
        ))}
      </section>

      <section className="tools-section">
        <h3>🔗 4. Quick Tools You Might Like</h3>
        <div className="tools-grid">
          {data.quickTools.map((tool, index) => (
            <div key={index} className="tool-item">
              <h4>🛠️ {tool.name}</h4>
              <p>{tool.description} ({tool.status})</p>
              <a href={tool.link} target="_blank" rel="noopener noreferrer" className="tool-link">
                Visit Tool →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="next-issue-section">
        <h3>📬 Coming Next Issue</h3>
        <ul className="next-issue-list">
          {data.nextIssue.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </section>
    </div>
  );

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
            <h3>📡 Connected RSS Sources</h3>
            <div className="feed-list">
              {rssFeeds.map((feed, index) => (
                <div 
                  key={index} 
                  className={`feed-item ${feed.active ? 'active' : 'inactive'}`}
                  onClick={() => toggleFeed(index)}
                >
                  {feed.active ? '●' : '○'} {feed.name}
                </div>
              ))}
            </div>
            
            <div className="add-feed-section">
              <input
                type="url"
                placeholder="Add RSS feed URL..."
                value={newFeedUrl}
                onChange={(e) => setNewFeedUrl(e.target.value)}
                className="feed-input"
              />
              <button onClick={addRssFeed} className="add-feed-btn">+ Add Feed</button>
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
                Fetching & Generating...
              </>
            ) : (
              <>
                🤖 Generate AI Digest
              </>
            )}
          </button>
        </div>

        <div className="prompt-suggestions">
          <h3>💡 Prompt Suggestions</h3>
          <div className="suggestions-grid">
            {promptSuggestions.map((suggestion, index) => (
              <div key={index} className="suggestion-item">
                {suggestion}
              </div>
            ))}
          </div>
        </div>

        {digest && (
          <div className="digest-container">
            <div className="digest-header">
              <h2>📰 Your Latest Digest</h2>
              <div className="timestamp">Generated: {new Date().toLocaleString()}</div>
            </div>
            <DigestContent data={digest} />
            <div className="digest-actions">
              <button className="action-btn">📧 Email This</button>
              <button className="action-btn" onClick={() => navigator.clipboard.writeText(JSON.stringify(digest))}>
                📋 Copy to Clipboard
              </button>
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

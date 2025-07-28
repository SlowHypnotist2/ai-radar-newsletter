import React, { useState, useEffect } from 'react';
import { Mail, Zap, Brain, Globe, ArrowRight, Check, AlertCircle, Loader, ExternalLink, Download, Copy, Sparkles } from 'lucide-react';

const AIDigestApp = () => {
  const [sources, setSources] = useState([
    { 
      id: 1, 
      name: 'The Rundown University', 
      email: 'newsletter@therundown.ai',
      connected: true,
      lastFetch: '2 hours ago'
    },
    { 
      id: 2, 
      name: 'Superhuman', 
      email: 'updates@superhuman.ai',
      connected: true,
      lastFetch: '3 hours ago'
    },
    { 
      id: 3, 
      name: 'AI Fire', 
      email: 'digest@aifire.co',
      connected: true,
      lastFetch: '1 hour ago'
    },
    { 
      id: 4, 
      name: 'AI Secret', 
      email: 'news@aisecret.com',
      connected: true,
      lastFetch: '4 hours ago'
    },
    { 
      id: 5, 
      name: 'Future//Proof', 
      email: 'newsletter@futureproof.ai',
      connected: true,
      lastFetch: '5 hours ago'
    },
    { 
      id: 6, 
      name: 'AI Essentials', 
      email: 'digest@aiessentials.com',
      connected: true,
      lastFetch: '6 hours ago'
    },
    { 
      id: 7, 
      name: 'AI Valley', 
      email: 'team@aivalley.ai',
      connected: false,
      lastFetch: 'Never'
    }
  ]);

  const [digest, setDigest] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');

  const promptSuggestions = [
    {
      icon: '🎯',
      title: 'Focus on Actionable Tools',
      prompt: 'You are an AI productivity expert. Extract only actionable AI tools, resources, and free downloads that I can use immediately. Include direct links, pricing info, and brief how-to instructions. Skip theoretical news and focus on practical applications I can implement today.'
    },
    {
      icon: '📊',
      title: 'Business & Investment Focus',
      prompt: 'You are a business analyst specializing in AI markets. Summarize funding news, company acquisitions, market trends, and business applications. Focus on opportunities, threats, and strategic insights for entrepreneurs and investors.'
    },
    {
      icon: '🔬',
      title: 'Research & Breakthroughs',
      prompt: 'You are an AI researcher. Highlight significant research breakthroughs, new model releases, technical advances, and scientific discoveries. Explain complex concepts simply and focus on implications for the future of AI.'
    },
    {
      icon: '🛡️',
      title: 'Safety & Regulation',
      prompt: 'You are an AI policy expert. Focus on AI safety concerns, regulatory developments, ethical discussions, and governance issues. Include government policies, industry standards, and risk assessments.'
    },
    {
      icon: '💡',
      title: 'Creative & Content Tools',
      prompt: 'You are a creative professional. Highlight AI tools for content creation, design, writing, video, audio, and creative workflows. Focus on practical applications for creators, marketers, and content professionals.'
    },
    {
      icon: '🏥',
      title: 'Industry Applications',
      prompt: 'You are an industry analyst. Focus on AI applications in specific sectors like healthcare, finance, education, manufacturing, and retail. Highlight real-world implementations and case studies.'
    }
  ];

  const generateSampleDigest = async () => {
    setIsGenerating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const sampleDigest = `
**✨ Manpreet's AI Digest** | *${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}*

*Curated from: The Rundown University, Superhuman, AI Fire, AI Secret, Future//Proof, AI Essentials*

---

## 🎯 **TOP AI NEWS YOU SHOULD KNOW**

**🚀 OpenAI Announces GPT-4.5 with 50% Faster Performance**
New model shows significant improvements in coding and reasoning tasks. Early benchmarks suggest 12% better performance than Claude 3.5.
→ [**Try GPT-4.5 Beta**](https://openai.com/gpt-4-5) | *Free for Pro users*

**🎬 Runway Releases Gen-3 Alpha: Hollywood-Quality AI Videos**
Generate 10-second clips from text prompts. Major studios already testing for pre-visualization.
→ [**Start Creating**](https://runwayml.com/gen-3) | *$15/month*

**💰 Anthropic Raises $4B Series C at $18.4B Valuation**
Funding will accelerate Claude development and expand enterprise offerings. Google leads the round.

---

## 🛠️ **FREE TOOLS & RESOURCES**

**📝 Claude 3.5 Prompt Library (Updated July 2025)**
*From AI Secret Newsletter*
125+ proven prompts for business, coding, and creativity.
→ [**Download PDF**](https://aisecret.com/claude-prompts-2025.pdf) | *Free, no signup*

**🎨 Midjourney Style Reference Tool**
*From Future//Proof*
Upload any image and get the perfect style prompt for consistent generations.
→ [**Try Tool**](https://futureproof.ai/style-ref) | *Free tier available*

**⚡ AutoGPT Desktop App (Open Source)**
*From AI Fire*
Local AI agent that can browse web, write code, and manage files automatically.
→ [**Download**](https://github.com/autogpt/desktop) | *Completely free*

---

## 📊 **AI BUSINESS & FUNDING**

**💼 Microsoft Copilot Revenue Hits $1B ARR**
Enterprise adoption accelerating, with 65% of Fortune 500 now using Copilot tools.

**🏭 Tesla's FSD Neural Network Now Powers Optimus Robots**
Same driving AI adapted for humanoid robot navigation and task planning.

**📈 AI Chip Shortage Easing: NVIDIA H100 Prices Drop 15%**
Increased supply expected through Q4 2025 as competitors ramp production.

---

## 🔧 **DEVELOPER UPDATES**

**⚙️ New Claude API Features:**
- Function calling now supports 10x more tools simultaneously  
- 50% cost reduction for batch processing
- New vision model can read handwritten text

**🐍 Python AI Libraries Updated:**
- LangChain 0.3.0 adds memory optimization
- Ollama now supports 70B models locally
- New Streamlit AI components released

---

## 📚 **LEARNING RESOURCES**

**🎓 Free Stanford CS25: Transformers Course**
*From The Rundown University*
11-week course covering transformer architecture, now available online.
→ [**Enroll Free**](https://stanford.edu/cs25) | *Certificate available*

**📖 "Prompt Engineering Handbook 2025"**
*From Superhuman*
240-page guide with advanced techniques and real examples.
→ [**Download**](https://superhuman.ai/handbook-2025.pdf) | *$0 - Limited time*

---

## 🔮 **COMING NEXT WEEK**

- **GPT-5 rumors**: What's confirmed vs speculation
- **Meta's Llama 3.5**: Expected release timeline  
- **Google I/O AI announcements**: Developer previews
- **Tesla Bot update**: Consumer pricing revealed?

---

*📧 This digest was generated from 6 newsletters delivered to your inbox. Saved you ~45 minutes of reading time.*

**🔄 Want different focus?** Update your prompt preferences above to customize future digests.
`;

    setDigest(sampleDigest);
    setIsGenerating(false);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(digest);
    // Add visual feedback here
  };

  const downloadAsPDF = () => {
    // This would implement PDF generation
    alert('PDF download feature will be implemented with backend integration');
  };

  const selectPrompt = (prompt) => {
    setSelectedPrompt(prompt.prompt);
    setCustomPrompt(prompt.prompt);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-blue-400" size={32} />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Manpreet's AI Digest
            </h1>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              BETA
            </span>
          </div>
          <p className="text-xl text-gray-300">
            Your personalized AI newsletter, delivered every 2 days
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Consolidates 6 daily newsletters into one focused digest • Saves ~45 minutes daily
          </p>
        </div>

        {/* Email Sources */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="text-green-400" size={24} />
            <h2 className="text-2xl font-bold">Connected Email Sources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {sources.map((source) => (
              <div
                key={source.id}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  source.connected
                    ? 'bg-green-900/20 border-green-400/30 hover:border-green-400/50'
                    : 'bg-gray-800/50 border-gray-600/30 hover:border-gray-500/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      source.connected ? 'bg-green-400' : 'bg-gray-400'
                    }`}
                  />
                  <span className="font-semibold text-sm">{source.name}</span>
                </div>
                <p className="text-xs text-gray-400 mb-1">{source.email}</p>
                <p className="text-xs text-gray-500">Last: {source.lastFetch}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Add newsletter email (e.g., newsletter@example.com)"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
              + Add Source
            </button>
          </div>
        </div>

        {/* Prompt Customization */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="text-yellow-400" size={24} />
            <h2 className="text-2xl font-bold">Customize Your Digest Focus</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {promptSuggestions.map((prompt, index) => (
              <div
                key={index}
                onClick={() => selectPrompt(prompt)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedPrompt === prompt.prompt
                    ? 'bg-purple-900/30 border-purple-400/50 shadow-lg shadow-purple-400/20'
                    : 'bg-gray-800/30 border-gray-600/30 hover:border-purple-400/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{prompt.icon}</span>
                  <h3 className="font-bold text-sm">{prompt.title}</h3>
                </div>
                <p className="text-xs text-gray-400 line-clamp-3">
                  {prompt.prompt.substring(0, 120)}...
                </p>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Custom Instructions:</label>
            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Add specific instructions for your digest (e.g., 'Focus on tools under $50/month' or 'Include only Enterprise AI solutions')"
              className="w-full h-32 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none text-sm"
            />
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center mb-12">
          <button
            onClick={generateSampleDigest}
            disabled={isGenerating}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center gap-3 mx-auto"
          >
            {isGenerating ? (
              <>
                <Loader className="animate-spin" size={24} />
                Generating Your Digest...
              </>
            ) : (
              <>
                <Zap size={24} />
                🤖 Generate AI Digest
              </>
            )}
          </button>
          {isGenerating && (
            <p className="text-sm text-gray-400 mt-3">
              Processing 6 newsletters • Analyzing 50+ articles • Creating personalized summary...
            </p>
          )}
        </div>

        {/* Generated Digest */}
        {digest && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Globe className="text-blue-400" size={24} />
                <h2 className="text-2xl font-bold">Your Generated Digest</h2>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm font-medium"
                >
                  <Copy size={16} />
                  Copy Text
                </button>
                <button
                  onClick={downloadAsPDF}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-sm font-medium"
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur border border-gray-700 rounded-xl p-8 overflow-auto max-h-screen">
              <div 
                className="prose prose-invert max-w-none text-white"
                style={{
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  lineHeight: '1.8',
                  fontSize: '15px',
                  color: '#ffffff'
                }}
                dangerouslySetInnerHTML={{
                  __html: digest
                    .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #60a5fa; font-weight: 700; font-size: 16px;">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em style="color: #cbd5e1; font-style: italic;">$1</em>')
                    .replace(/→ \[\*\*(.*?)\*\*\]\((.*?)\)/g, '→ <a href="$2" target="_blank" style="color: #10b981; text-decoration: none; font-weight: 600; border: 1px solid #10b981; padding: 4px 8px; border-radius: 6px; margin-left: 8px; display: inline-block; transition: all 0.3s ease; font-size: 14px;" onmouseover="this.style.backgroundColor=\'#10b981\'; this.style.color=\'#000\'; this.style.transform=\'translateY(-1px)\'" onmouseout="this.style.backgroundColor=\'transparent\'; this.style.color=\'#10b981\'; this.style.transform=\'translateY(0)\'">$1 <svg style="display: inline; width: 12px; height: 12px; margin-left: 4px;" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/></svg></a>')
                    .replace(/\n\n/g, '<br><br>')
                    .replace(/\n/g, '<br>')
                    .replace(/^## (.*$)/gm, '<h2 style="color: #f1f5f9; font-size: 22px; font-weight: 800; margin: 28px 0 16px 0; border-bottom: 2px solid #475569; padding-bottom: 10px; letter-spacing: -0.5px;">$1</h2>')
                    .replace(/^### (.*$)/gm, '<h3 style="color: #e2e8f0; font-size: 18px; font-weight: 700; margin: 24px 0 12px 0; color: #fbbf24;">$1</h3>')
                    .replace(/^---$/gm, '<hr style="border: none; border-top: 2px solid #374151; margin: 32px 0; opacity: 0.7;">')
                    .replace(/^\*([^*].*$)/gm, '<p style="margin: 12px 0; padding-left: 16px; border-left: 3px solid #6366f1; color: #cbd5e1; font-size: 14px;">$1</p>')
                }}
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm">
          <p>🤖 Powered by AI • Built for efficiency • Updated every 48 hours</p>
          <p className="mt-2">
            Saving you time by consolidating 6 newsletters into one personalized digest
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIDigestApp;

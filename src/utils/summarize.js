// src/summarize.js

export async function summarizeText(newsletterText) {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY; // ⛔ Don't commit this to GitHub
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    };

    const body = {
        model: 'gpt-4', // or 'gpt-3.5-turbo' if you're on the free tier
        messages: [
            {
                role: 'system',
                content: 'You are a helpful assistant that summarizes newsletter content into a clean format with headlines, short descriptions, and links. Highlight free tools or resources if mentioned.',
            },
            {
                role: 'user',
                content: newsletterText,
            },
        ],
        temperature: 0.5,
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return data.choices?.[0]?.message?.content || 'No summary generated.';
    } catch (error) {
        console.error('OpenAI API error:', error);
        return 'Error generating summary.';
    }
}

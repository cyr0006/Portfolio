
type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

export async function handler(event: any) {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const messages: ChatMessage[] = body.messages ?? [];

    if (!process.env.OPENAI_API_KEY) {
      return { statusCode: 500, body: JSON.stringify({ error: "Missing OPENAI_API_KEY" }) };
    }

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!resp.ok) {
      const err = await resp.text();
      return { statusCode: resp.status, body: err };
    }

    const data = await resp.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (e: any) {
    return { statusCode: 500, body: JSON.stringify({ error: e?.message || "Unknown error" }) };
  }
}
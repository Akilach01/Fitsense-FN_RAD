import { useState } from "react";
import { askAI } from "../../services/user";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

export default function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: question.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);
    setError(null);

    try {
      const response = await askAI(userMessage.content);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: response.answer,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to get AI response");
      console.error("AI error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              🤖 AI Fitness Assistant
            </h2>
            <p className="text-gray-600 mt-2">
              Ask me anything about fitness, workouts, nutrition, or health!
            </p>
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* CHAT MESSAGES */}
          <div className="mb-6 max-h-96 overflow-y-auto space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <p>Start a conversation! Ask me about:</p>
                <ul className="mt-2 text-sm">
                  <li>• Workout routines</li>
                  <li>• Nutrition advice</li>
                  <li>• Exercise techniques</li>
                  <li>• Fitness goals</li>
                </ul>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === "user" ? "text-blue-200" : "text-gray-500"
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                    <span className="text-sm">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* INPUT FORM */}
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask me about fitness..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
            >
              {loading ? "..." : "Ask"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
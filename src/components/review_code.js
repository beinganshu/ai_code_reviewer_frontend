import React, { useState } from "react";
import axios from "axios";
import { EditorView } from "@codemirror/view";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import "./review_style.css";

const App = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLanguageExtension = () => {
    switch (language) {
      case "python":
        return python();
      case "javascript":
        return javascript();
      case "java":
        return java();
      case "cpp":
        return cpp();
      default:
        return [];
    }
  };

  const handleReview = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://anxhu2004-ai-code-reviewer.hf.space/review", {
        language,
        code,
      });
      setReview(response.data);
    } catch (err) {
      console.error("Error:", err);
      setReview({ error: "Failed to fetch review" });
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1 className="heading">Code Review Tool</h1>

      <div className="select-container">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="select-input"
        >
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      <div className="editor-container">
        <CodeMirror
          value={code}
          height="300px"
          theme="dark"
          extensions={[getLanguageExtension(), EditorView.lineWrapping]}
          onChange={(value) => setCode(value)}
        />
      </div>

      <button
        onClick={handleReview}
        disabled={loading}
        className="review-button"
      >
        {loading ? "Reviewing..." : "Review Code"}
      </button>

      {review && (
        <div className="review-box">
          <h2 className="review-title">Review Summary:</h2>
          <ul>
            {review?.review_points?.map((point, index) => (
              <li
                key={index}
                style={{ marginBottom: "0.5rem", lineHeight: "1.5" }}
              >
                • {point}
              </li>
            ))}

            {review?.error && (
              <li style={{ color: "red" }}>Error: {review.error}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;


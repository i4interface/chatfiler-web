import React, { useState, useEffect } from "react";

function LiveChatBot() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isFirstTimeOpen, setIsFirstTimeOpen] = useState(true);
  const [conversationLevel, setConversationLevel] = useState(0);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    if (isFirstTimeOpen) {
      setIsFirstTimeOpen(false);
      setTimeout(() => {
        askQuestion("What is your name?");
      }, 400);
    }
  }, [isFirstTimeOpen]);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const askQuestion = (question) => {
    generateMessage(question, "bot");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return false;
    }

    if (conversationLevel < 3) {
      setUserDetails((prevDetails) => {
        const updatedDetails = { ...prevDetails };

        switch (conversationLevel) {
          case 0:
            updatedDetails.name = inputValue;
            askQuestion(`Thanks, ${inputValue}! What is your email address?`);
            break;
          case 1:
            updatedDetails.email = inputValue;
            askQuestion("Great! Lastly, please provide your phone number.");
            break;
          case 2:
            updatedDetails.phone = inputValue;
            askQuestion("Thank you for providing your details. Our support team will reach out to you shortly.");
            break;
          default:
            break;
        }

        return updatedDetails;
      });

      setConversationLevel(conversationLevel + 1);
    }

    setInputValue("");
  };

  const generateMessage = (msg, type) => {
    const index = new Date().getTime();
    const message = (
      <div key={index} className={`chat-msg ${type}`}>
        {type === "self" && (
          <span className="msg-avatar">
            <img src="/icons/avatar.svg" alt="" />
          </span>
        )}

        <div className="cm-msg-text">{msg}</div>
      </div>
    );

    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <>
      <div
        id="chat-circle"
        className={`btn btn-raised ${isChatOpen ? "hidden" : "visible"}`}
        onClick={toggleChat}
        aria-label={isChatOpen ? "Close Chat" : "Open Chat"}
      >
        <div id="chat-overlay"></div>
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          {/* ... (Your SVG path) */}
        </svg>
      </div>

      {isChatOpen && (
        <div className="chat-box shadow-xl rounded-3xl">
          <div className="chat-box-header">
            Live Chat Bot
            <span className="chat-box-toggle" onClick={toggleChat}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="24"
                height="24"
                fill="white"
              >
                {/* ... (Your SVG path) */}
              </svg>
            </span>
          </div>
          <div className="chat-box-body">
            <div className="chat-box-overlay"></div>
            <div className="chat-logs">{messages}</div>
          </div>
          <div className="chat-input">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="chat-input"
                placeholder="Your response..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button type="submit" className="chat-submit" id="chat-submit">
                <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 -960 960 960" width={24}>
                  <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LiveChatBot;

import React, { useState, useEffect } from "react";

function LiveChatBot() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isFirstTimeOpen, setIsFirstTimeOpen] = useState(true);
  const [conversationLevel, setConversationLevel] = useState(0);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (isFirstTimeOpen) {
      setTimeout(() => {
        generateMessage("Welcome! What is your name?", "bot");
        setConversationLevel(1);
      }, 400);
      setIsFirstTimeOpen(false);
    }
  }, [isFirstTimeOpen]);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return false;
    }

    generateMessage(inputValue, 'self');

    // Simulating the server response
    const response = getBotResponse(inputValue);
    setConversationLevel(conversationLevel + 1);

    setTimeout(() => {
      generateMessage(response, 'bot');
    }, 1000);
  };

  const getBotResponse = (userMessage) => {
    let chatMsg = '';

    switch (conversationLevel) {
      case 1:
        setUserDetails({ ...userDetails, name: userMessage });
        chatMsg = `Nice to meet you, ${userMessage}! What is your email address?`;
        break;
      case 2:
        setUserDetails({ ...userDetails, email: userMessage });
        chatMsg = `Thanks! Lastly, please provide your phone number.`;
        break;
      case 3:
        setUserDetails({ ...userDetails, phone: userMessage });
        chatMsg = `Thank you for providing your details. Our support team will reach out to you shortly.`;
        break;
      default:
        chatMsg = "I didn't understand.";
    }

    return chatMsg;
  };

  const generateMessage = (msg, type) => {
    const index = new Date().getTime();
    const message = (
      <div key={index} className={`chat-msg ${type}`}>
        {type === 'self' && (
          <span className="msg-avatar">
            <img src="/icons/avatar.svg" alt="" />
            
          </span>
        )}

        <div className="cm-msg-text">{msg}</div>
      </div>
    );

    setMessages((prevMessages) => [...prevMessages, message]);

    if (type === 'self') {
      setInputValue('');
    }
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
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" /></svg>
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
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
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
                placeholder="Send a message..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button type="submit" className="chat-submit" id="chat-submit">
                <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 -960 960 960" width={24}><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" /></svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LiveChatBot;

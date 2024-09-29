import React, { useState, useEffect, useRef } from 'react';
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './whatsappstyle.css'; 
import whatsappLogo from '../../assets/whatsapp-chat-logo.svg';
import whatsappDp from '/assets/images/GentleBreezeLogo.png';
import chatWallpaper from '../../assets/whatsapp-chat-wallpaper.jpeg';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const chatModalRef = useRef(null);

  const phoneNumber = '+2349020020403';

  const toggleChat = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
      setMessages([
        {
          text: "Hello there! 👋\nHow can we help?",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          sender: "Gym Support"
        }
      ]);
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }),
        sender: "You"
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");

      setMessage('');
    }
  };

  const handleClickOutside = (event) => {
    if (chatModalRef.current && !chatModalRef.current.contains(event.target)) {
      toggleChat();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="whatsapp-chat-container">
      <button onClick={toggleChat} className="chat-button">
        <img src={whatsappLogo} alt="WhatsApp-Logo" />
      </button>

      <div
        className={`chat-modal ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}
        ref={chatModalRef}
      >
        <div className="chat-header">
          <div className="header-content">
            <div className="profile-picture">
              <img src={whatsappDp} alt="Gym Support" />
            </div>
            <div className="header-text">
              <h3>Gentle Breeze Gym</h3>
              <p>Typically replies within 15 minutes</p>
            </div>
          </div>
          <button onClick={toggleChat} className="close-button">
            <FontAwesomeIcon icon={faTimes} size="lg" style={{ color: "#fff" }} />
          </button>
        </div>

        <div className="chat-messages" style={{ backgroundImage: `url(${chatWallpaper})` }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "Gym Support" ? 'support-message' : 'user-message'}`}
            >
              <p className="message-sender"><strong>{msg.sender}</strong></p>
              <p>{msg.text}</p>
              <span className="message-time">{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage} className="send-button">
            <FontAwesomeIcon icon={faPaperPlane} size="lg" style={{ color: "#128C7E" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;

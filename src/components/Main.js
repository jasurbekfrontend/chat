import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState(localStorage.getItem("name") || "");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://61fcfec8f62e220017ce4280.mockapi.io/kiyim-kechak/qishkiKiyimlar"
      );
      setMessages(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://61fcfec8f62e220017ce4280.mockapi.io/kiyim-kechak/qishkiKiyimlar",
        { name, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage("");
      getData();
    } catch (error) {
      alert("Xabar yuborilmadi");
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="wrapper">
      <form onSubmit={sendData}>
        <input
          type="text"
          required
          value={message}
          onChange={handleMessageChange}
          name="message"
          placeholder="Your message"
        />
        <button type="submit">Send</button>
      </form>
      <div className="messages">
        {messages.map((item, index) => (
          <div className="message" key={index}>
            <b> {item.name}</b>
            <p> {item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;

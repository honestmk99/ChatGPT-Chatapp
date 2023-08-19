import React, { useEffect, useState } from "react";
import avatar1 from "../assets/image/avatar.png";
import axios from "axios";

export default function Plan() {
  const [messages, setMessages] = useState([
    { role: "system", content: "ChatGPT joined the conversation." },
  ]);

  // const [userPrompt, setUserPrompt] = useState("");
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    const textBoard = document.getElementById("pad");
    console.log("textBord", textBoard);

    if (messages[messages.length - 1].role === "user") {
      const user = document.createElement("div");
      user.className = "grid grid-cols-[1fr_auto] ml-[150px] pb-[10px] gap-2";

      const userText = document.createElement("div");
      userText.className = "flex justify-end";

      const userText_content = document.createElement("div");
      userText_content.className =
        "inline-grid  rounded-[15px_15px_0px_15px] bg-[#d8d8d8]";

      const userText_h4 = document.createElement("h4");
      userText_h4.className = "text-[#253C6E] p-3";

      userText_h4.innerHTML = messages[messages.length - 1].content;

      userText_content.appendChild(userText_h4);
      userText.appendChild(userText_content);

      const userAvatar = document.createElement("div");
      userAvatar.className = "w-[50px] self-end";

      const avatar_img = document.createElement("img");
      avatar_img.src = avatar1;

      userAvatar.appendChild(avatar_img);

      user.appendChild(userText);
      user.appendChild(userAvatar);

      textBoard.appendChild(user);
    } else if (messages[messages.length - 1].role === "assistant") {
      const aiReply = document.createElement("div");
      aiReply.className =
        "grid grid-cols-[auto_1fr] pb-[10px] mr-[150px] gap-2";

      const aiReply_content = document.createElement("div");
      aiReply_content.className = "w-[50px] self-end";

      const aiAvatar = document.createElement("img");
      aiAvatar.src = avatar1;

      aiAvatar.appendChild(aiReply);

      const aiText = document.createElement("div");

      const aiText_content = document.createElement("div");
      aiText_content.className =
        "inline-grid border-[2px] border-[white] rounded-[15px_15px_15px_0px] bg-[#253C6E]";

      const aiText_h4 = document.createElement("div");
      aiText_h4.className = "text-white p-3";
      aiText_h4.innerHTML = messages[messages.length - 1].content;

      aiText_content.appendChild(aiText_h4);

      aiText.appendChild(aiText_content);
      aiReply.appendChild(aiText);
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    const newMessages = [...messages, { role: "user", content: inputText }];
    setMessages(newMessages);
    // setUserPrompt(inputText);
    setInputText("");

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL,
        {
          model: "gpt-3.5-turbo",
          messages: newMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY}`,
          },
        }
      );

      const botReply = response.data.choices[0].message.content;
      console.log(botReply, "botbot");
      setMessages([...newMessages, { role: "assistant", content: botReply }]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="intro text-primary">
      <div className="bg-[#253C6E] flex flex-col pt-[200px]">
        {/* <div id="pad">

          <div className="grid grid-cols-[1fr_auto] ml-[150px] pb-[10px] gap-2">
            <div className="flex justify-end">
              <div className="inline-grid  rounded-[15px_15px_0px_15px] bg-[#d8d8d8]">
                <h4 className="text-[#253C6E] p-3">ppppppp</h4>
              </div>
            </div>
            <div className="w-[50px] self-end">
              <img src={avatar} alt="avatar" className="" />
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr] pb-[10px] mr-[150px] gap-2">
            <div className="w-[50px] self-end">
              <img src={avatar} alt="avatar" className="" />
            </div>
            <div>
              <div className="inline-grid border-[2px] border-[white] rounded-[15px_15px_15px_0px] bg-[#253C6E]">
                <h4 className="text-white p-3">MMMMMM</h4>
              </div>
            </div>
          </div>
        </div> */}
        {/* GPT Prompt */}
        <div id="pad"></div>
        <div className="flex gap-2 p-[5px]">
          <input
            className="rounded-[5px] w-full"
            value={inputText}
            onChange={handleInputChange}
            type="text"
          ></input>
          <button
            className="text-[#fff] border-[#fff] border-[1px] rounded-[8px] px-[25px] py-[5px]"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

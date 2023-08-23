import React, { useEffect, useState } from "react";
import avatar1 from "../assets/image/user_avatar.png";
import avatar2 from "../assets/image/chatGPT_avatar.png";
import axios from "axios";

export default function Chatgpt() {
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

    if (messages[messages.length - 1].role === "user") {
      const user = document.createElement("div");
      user.className = "grid grid-cols-[1fr_auto] ml-[1050px] pb-[10px] gap-2";

      const userText = document.createElement("div");
      userText.className = "flex justify-end";

      const userText_content = document.createElement("div");
      userText_content.className =
        "inline-grid  rounded-[15px_15px_0px_15px] bg-[#d8d8d8]";
      userText.appendChild(userText_content);

      const userText_h4 = document.createElement("h4");
      userText_h4.className = "text-[#253C6E] p-3";
      userText_h4.innerHTML = messages[messages.length - 1].content;

      userText_content.appendChild(userText_h4);

      const userAvatar = document.createElement("div");
      userAvatar.className = "w-[50px] self-end mr-3";

      const avatar_img = document.createElement("img");
      avatar_img.className = "rounded-[50%]";
      avatar_img.src = avatar1;

      userAvatar.appendChild(avatar_img);

      user.appendChild(userText);
      user.appendChild(userAvatar);

      textBoard.appendChild(user);
    } else if (messages[messages.length - 1].role === "assistant") {
      const aiReply = document.createElement("div");
      aiReply.className =
        "grid grid-cols-[auto_1fr] pb-[10px] mr-[1050px] gap-2";

      const aiReply_content = document.createElement("div");
      aiReply_content.className = "w-[50px] self-end ml-3";

      const aiAvatar = document.createElement("img");
      aiAvatar.className = "rounded-[50%]";
      aiAvatar.src = avatar2;

      aiReply_content.appendChild(aiAvatar);
      aiReply.appendChild(aiReply_content);

      const aiText = document.createElement("div");

      const aiText_content = document.createElement("div");
      aiText_content.className =
        "inline-grid border-[2px] border-[white] rounded-[15px_15px_15px_0px] bg-[#253C6E]";

      const aiText_h4 = document.createElement("div");
      aiText_h4.className = "text-white p-3";
      aiText_h4.textContent = messages[messages.length - 1].content;

      aiText_content.appendChild(aiText_h4);

      aiText.appendChild(aiText_content);
      aiReply.appendChild(aiText);

      textBoard.appendChild(aiReply);
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
            Authorization: `Bearer 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`,
          },
        }
      );

      const botReply = response.data.choices[0].message.content;
      setMessages([...newMessages, { role: "assistant", content: botReply }]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  // to bottom button
  // const [isVisible, setIsVisible] = useState(false);

  // const scrollToTop = () => {
  //   console.log("hihih");
  //   window.scrollTo({
  //     bottom: 0,
  //     behavior: "smooth",
  //   });
  //   console.log("now------->");
  // };

  // useEffect(() => {
  //   // Button is displayed after scrolling for 500 pixels
  //   const toggleVisibility = () => {
  //     if (window.scrollY > 400) {
  //       console.log("overflow 500");
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", toggleVisibility);

  //   return () => window.removeEventListener("scroll", toggleVisibility);
  // }, []);

  return (
    <div className="intro text-primary grid grid-row-[1fr, auto] min-h-screen bg-[#253C6E]">
      <div className="flex flex-col self-end">
        <div id="pad" className="pb-[50px]"></div>
        <div className="flex gap-2 p-4 fixed bottom-0 left-0 px-[70px] w-full ">
          <input
            className="rounded-[5px] w-full pl-2"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            type="text"
          ></input>
          <button
            className="hover:bg-blackblue text-[#fff] border-[#fff] border-[1px] rounded-[8px] px-[25px] py-[5px] cursor-pointer"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>

      {/* {isVisible && ( */}
      {/* <button
        // onClick={scrollToTop}
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="fixed bottom-5 right-5 inline-block rounded-full bg-danger p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          strokeWidth="2.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            clipRule="evenodd"
          />
        </svg>
      </button> */}
      {/* )} */}
    </div>
  );
}

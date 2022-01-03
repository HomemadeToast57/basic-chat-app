import React from "react";

const B = (props) => (
  <div style={{ fontWeight: "bold" }}>{props.children}</div>
);

const ChatMessage = ({ auth, message}) => {

  const { text, uid, photoURL, displayName } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  
  const timeString = message.date.toDate().toLocaleTimeString();
  const goodTimeString = timeString.slice(0, 5) + timeString.slice(8, 11);
  //destructure date
  
 
  return (
    <div className={`message ${messageClass}`}>
      <div className={`messageBody ${messageClass}`}>
        <img className={"miniProfPic"} src={photoURL} alt="" />
        <p className={`messageText ${messageClass}`}>{text}</p>
      </div>
      <div className="nameAndTime">
        {
          <div className="nameTime">
            <B>{displayName + "  "}</B> <span>{goodTimeString}</span>
          </div>
        }
      </div>
    </div>
  );
};

export default ChatMessage;

import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

import ChatMessage from "./ChatMessage";
import UserInput from "./UserInput";

const Chatroom = ({ firestore, auth }) => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(35);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const submitMessage = async (e) => {
    const { uid, displayName, photoURL } = auth.currentUser;

    e.preventDefault();
    if (formValue.trim().length > 0) {
      await messagesRef.add({
        text: formValue.trim(),
        displayName: displayName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        date: new Date(),
        uid: uid,
        photoURL: photoURL,
      });
      setFormValue("");
      e.target.reset();
    }
  };

  const handleInputChange = (e) => {
    setFormValue(e.target.value);
  };

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="main">
      <div className="messages">
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} auth={auth} message={msg} time={msg} />
          ))}
        <div ref={divRef}></div>
      </div>

      <UserInput
        submitMessage={submitMessage}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default Chatroom;

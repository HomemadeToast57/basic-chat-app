import React from 'react'

const UserInput = ({submitMessage, handleInputChange}) => {
    return (
      <form onSubmit={submitMessage}>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Write your message here..."
        />
        <button className={"sendButton"} type="submit">
          <i className="fas fa-paper-plane fa-lg"></i>
        </button>
      </form>
    );
}

export default UserInput

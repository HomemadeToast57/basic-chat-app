import React from "react";
import SignOut from "./SignOut";

const SignedInHeader = ({ auth, user }) => {
  return (
    <>
      <div className="left-header">
        <div className="profPicContainer">
          <img className={"profPic"} src={user.photoURL} alt="" />
        </div>
        <h1>Superchat</h1>
      </div>
      <SignOut auth={auth} />
    </>
  );
};

export default SignedInHeader;

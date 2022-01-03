import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const SignIn = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    // auth.signInWithPopup(provider);

    auth
      .signInWithPopup(provider)
      .then(function (result) {
        // code which runs on success
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        alert(errorCode);

        var errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <div className="signIn">
      <h1 className="title">Superchat!</h1>
      <button className="signInWithGoogle" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;

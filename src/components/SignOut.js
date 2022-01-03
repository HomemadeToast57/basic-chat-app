import React from 'react'

const SignOut = ({auth}) => {

    return (
      auth.currentUser && (
        <button className={"signOut"} onClick={() => auth.signOut()}>
          <i className="fas fa-sign-out-alt signOutIcon"></i>
        </button>
      )
    );
}

export default SignOut

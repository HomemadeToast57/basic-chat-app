import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

import config from "../src/FirebaseConfig.js";


import Chatroom from "./components/Chatroom";
import SignIn from "./components/SignIn";
import SignedInHeader from "./components/SignedInHeader";

// READ THIS: use your own config here from firebase and make sure to make your collection called "messages"
firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        {user ? ( <SignedInHeader auth={auth} user={user} /> ) : ( "" )}
      </header>

      <section>{user ? <Chatroom firestore={firestore} auth={auth}/> : <SignIn auth={auth}/>}</section>
    </div>
  );
}

export default App;

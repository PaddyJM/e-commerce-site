import React, {useState} from "react";
import {render} from "react-dom";
import StoreFront from "./components/StoreFront"
import Wallet from "./components/Wallet"

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    if(loggedIn){
        return (<>
            <StoreFront />
            <Wallet />
            <h2>You are currently logged in</h2>
            <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
        </>)
    }
    return(<>
        <h2>Please login</h2>
        <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
    </>)
}

export default App;
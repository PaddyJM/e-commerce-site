import React, {useState} from "react";
import StoreFront from "./components/StoreFront"
import Wallet from "./components/Wallet"
import Button from "./components/ui-kit/Button"
import Input from "./components/ui-kit/Input"

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState("Stranger")
    if(loggedIn){
        return (<>
            <StoreFront />
            <Wallet />
            <h2>You are currently logged in</h2>
            <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
        </>)
    }
    
    return(<>
        <h1>Hello, {username}!</h1>
        <h2>Please login</h2>
        <form>
          <Input className="username" type="text" name="name" placeholder={username} onChange={event => {
              setUsername(event.target.value)
          }}/>
            <Input className="password" type="password" name="name" placeholder="Enter password" />
        </form>
        <Button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</Button>
    </>)
}

export default App;
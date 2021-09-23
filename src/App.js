import React, { useState } from "react";
import { userData } from "./userData";
import "./styles/App.css";
import User from "./components/User";
import Form from "./components/Form";
function App() {
  const [users, setUsers] = useState(userData);
  return (
    <div className="App">
      <h1 className="App__title">The users list</h1>
      <Form />
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
}

export default App;

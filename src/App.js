import React, { useState, useMemo } from "react";
import { userData } from "./userData";
import Input from "./components/UI/Input/Input";
import Label from "./components/UI/Lable/Label";
import Select from "./components/UI/Select/Select";
import "./styles/App.css";
import Form from "./components/Form";
import UserList from "./components/UserList";
import Modal from "./components/Modal";
function App() {
  const [users, setUsers] = useState([...userData]);
  const [sort, setSort] = useState("");
  const [find, setFind] = useState("");
  const mainModalBox = ".Modal";
  const modalBoxContainer = ".Modal__box";
  const activeMidificator = "active";

  const findByName = useMemo(() => {
    return users.filter((user) =>
      user["name"].toLowerCase().includes(find.toLowerCase())
    );
  }, [find, users]);
  const addNewUser = (newUser) => {
    return setUsers([...users, newUser]);
  };

  function filterByAge(status, arr) {
    if (status === "up") {
      return arr.sort((a, b) => +a["age"] - +b["age"]);
    }
    if (status === "down") {
      return arr.sort((a, b) => +b["age"] - +a["age"]);
    }
    return arr;
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Search and filter </h1>
        <Label labelText="Search by name:" htmlFor="searchname" />
        <Input
          id="searchname"
          type="text"
          value={find}
          onChange={(event) => setFind(event.target.value)}
        />
        <Label labelText="Filter by age:" htmlFor="agefilter" />
        <Select
          defaultValue="Default"
          options={[
            { value: "normal", title: "Normal" },
            { value: "down", title: "From highest to lowest" },
            { value: "up", title: "From lowest to highest" },
          ]}
          id="agefilter"
          value={sort}
          onChange={(event) => {
            setSort(event.target.value);
            filterByAge(sort, findByName);
          }}
        />
      </div>
      <Form formTitle="Add new user" createNew={addNewUser} />
      <h1 className="App__title">The users list</h1>
      <UserList
        users={findByName}
        props={[mainModalBox, modalBoxContainer, activeMidificator]}
      />
      <Modal title="Full information about the user" extraClassName="active" />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";
import Label from "./UI/Lable/Label";
import "../styles/Form.css";

const Form = ({ formTitle, createNew }) => {
  const [formValue, setFormValue] = useState({
    name: "",
    gender: "",
    age: "",
    balance: "",
  });

  function addUser(event) {
    event.preventDefault();
    if (
      !(
        formValue.name &&
        formValue.age &&
        formValue.balance &&
        formValue.gender
      )
    ) {
      alert("You didm't fill all fields. Please try agein");
      return;
    }
    const newUser = {
      ...formValue,
      picture: "http://placehold.it/32x32",
      _id: `${Date.now() + Math.random()}`,
      balance: `$${formValue.balance}`,
    };
    createNew(newUser);

    formValue.name = "";
    formValue.age = "";
    formValue.balance = "";
    formValue.gender = "";
  }

  return (
    <div className="Form">
      <h2>{formTitle}</h2>
      <form>
        <Label labelText="Enter user name:" htmlFor="username" />
        <Input
          id="username"
          type="text"
          value={formValue.name}
          onChange={(event) =>
            setFormValue({ ...formValue, name: event.target.value })
          }
        />
        <Label labelText="Enter age:" htmlFor="useage" />
        <Input
          min="16"
          max="100"
          id="userage"
          type="number"
          value={formValue.age}
          onChange={(event) =>
            setFormValue({ ...formValue, age: event.target.value })
          }
        />
        <Label labelText="Enter gender:" htmlFor="usergander" />
        <Select
          defaultValue="-----"
          options={[
            { value: "male", title: "Male" },
            { value: "female", title: "Female" },
          ]}
          id="usergender"
          value={formValue.gender}
          onChange={(event) =>
            setFormValue({ ...formValue, gender: event.target.value })
          }
        />
        <Label labelText="Enter balance:" htmlFor="userbalance" />
        <Input
          id="userbalance"
          type="number"
          value={formValue.balance}
          onChange={(event) =>
            setFormValue({ ...formValue, balance: event.target.value })
          }
        />
        <Button
          text="Create new one"
          id="form-btn"
          type="submit"
          onClick={addUser}
        />
      </form>
    </div>
  );
};

export default Form;

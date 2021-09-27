import React from "react";
import User from "./User";
const UserList = ({ users, props }) => {
  return (
    <>
      {users.map((user) => {
        return <User users={users} user={user} key={user._id} {...props} />;
      })}
    </>
  );
};

export default UserList;

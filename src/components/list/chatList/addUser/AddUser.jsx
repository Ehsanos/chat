
import "./addUser.css";

import { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState(null);





  return (
    <div className="addUser">
      <form >
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      {user && (
        <div className="user">
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt="" />
            <span>username</span>
          </div>
          <button >Add User</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;


import { useState } from "react";
import "./login.css";
import {toast} from "react-toastify";

const Login = () => {


    const [avatar,setAvatar] = useState(

        {
            file:null,
            url:null,
        }
    )


    const handelAvatar=e=>{
        if(e.target.files[0]){
            setAvatar({
file:e.target.files[0],
url:URL.createObjectURL(e.target.files[0])


                })

                console.log (avatar.url)
        }


    }


    const handelLogin=e=>{

e.preventDefault()
toast.success("Please")
toast.error("Please")

    }


  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form >
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>"Sign In"</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handelLogin}>
          <label htmlFor="file">
            <img src={ avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>
          <input type="file" id="file" style={{ display: "none" }} onChange={handelAvatar} />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sing Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

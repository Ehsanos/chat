import React, {useState} from 'react'
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

export default function Chat() {


const [EmojiView,setEmojiView]=useState(false)

const [text,setText] = useState(" ")

const handel=e=>{

  console.log(e);
}

console.log(text);

  return (


    <div className='chat'>

<div className="top">
<div className="user">
  <img src="./avatar.png"/>
  <div className="texts">
    <span className="">jon Doe</span>
    <p>lorem ipsum dolor sit amet, consectetur</p>
  </div>
</div>

<div className="icons">
<img src='./phone.png'/>
<img src='./video.png'/>
<img src='./info.png'/>
</div>

</div>


<div className="center"></div>


<div className="bottom">

<div className="icons">
<img src='./img.png'/>
<img src='./camera.png'/>
<img src='./mic.png'/>
</div>
<input type="text" placeholder='write message ......' onChange={(e)=>setText(e.target.value)}/>
<div className="emoji">
<img src='./emoji.png'  onClick={()=>setEmojiView((prive)=>!prive)}/>

<EmojiPicker   open={EmojiView} onEmojiClick={handel}/>



</div>
<button className='sendBtn'>Send</button>

</div>




    </div>


)
}

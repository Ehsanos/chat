import React, {useState} from 'react'
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

export default function Chat() {


const [EmojiView,setEmojiView]=useState(false)

const [text,setText] = useState(" ")

const handel=e=>{


 setText((prive)=>prive+e.emoji)

setEmojiView(false)
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


<div className="center">

<div className="message">


<img src='./avatar.png'/>

<div className="texts">

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptates.</p>
<span>1 min ago</span>
</div>

</div>


<div className="message own">



<div className="texts">

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptates.</p>
<span>1 min ago</span>
</div>

</div>

<div className="message">


<img src='./avatar.png'/>

<div className="texts">

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptates.</p>
<span>1 min ago</span>
</div>

</div>

<div className="message own">

<div className="texts">

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptates.</p>
<span>1 min ago</span>
</div>

</div>

<div className="message">


<img src='./avatar.png'/>

<div className="texts">

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptates.</p>
<span>1 min ago</span>
</div>

</div>

<div className="message own">

<div className="texts">
<img src="https://media.istockphoto.com/id/1494104649/tr/foto%C4%9Fraf/ai-chatbot-artificial-intelligence-digital-concept.jpg?s=1024x1024&w=is&k=20&c=dSHX3wtjGhOdYtxwqicofIfnVqFpvjdy7JAGNbfZW6k="/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptates.</p>
<span>1 min ago</span>
</div>

</div>


</div>


<div className="bottom">

<div className="icons">
<img src='./img.png'/>
<img src='./camera.png'/>
<img src='./mic.png'/>
</div>
<input type="text" placeholder='write message ......'
value={text}
 onChange={(e)=>setText(e.target.value)}/>


<div className="emoji">
<img src='./emoji.png'  onClick={()=>setEmojiView((prive)=>!prive)}/>

<div className="picker">

<EmojiPicker   open={EmojiView} onEmojiClick={handel}/>

</div>

</div>


<button className='sendBtn'>Send</button>

</div>




    </div>


)
}

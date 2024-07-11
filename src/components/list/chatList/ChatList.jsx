import React, {useState} from 'react'
import './chatList.css'
export default function ChatList() {

  const[addMode,setAddMode]=useState(false)

  return (
    <div className="chatList">

    <div className="search">

    <div className="searchBar">
        <img src='./search.png' alt=""/>
            <input type="search" placeholder='Search' />
    </div>
        <img src={addMode? './minus.png':'./plus.png'} className='add' alt=""
        onClick={()=>setAddMode(preve=>!preve)}/>
    </div>


    <div className="item">
      <img src='./avatar.png'/>
      <div className="texts">
        <span>Jon Mon</span>
        <p>Hello world</p>
      </div>
    </div>

    <div className="item">
      <img src='./avatar.png'/>
      <div className="texts">
        <span>Jon Mon</span>
        <p>Hello world</p>
      </div>
    </div>

    <div className="item">
      <img src='./avatar.png'/>
      <div className="texts">
        <span>Jon Mon</span>
        <p>Hello world</p>
      </div>
    </div>

    <div className="item">
      <img src='./avatar.png'/>
      <div className="texts">
        <span>Jon Mon</span>
        <p>Hello world</p>
      </div>
    </div>

    <div className="item">
      <img src='./avatar.png'/>
      <div className="texts">
        <span>Jon Mon</span>
        <p>Hello world</p>
      </div>
    </div>

    </div>
  )
}

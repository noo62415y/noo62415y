import React, {useState} from 'react'
import Head from 'next/head'

export default function Home(){
  const [text, setText] = useState<string>("자바스크립트")
  setTimeout(()=>{
    setText("하하")
  }, 1000)

  return (
    <div className="container">
      <div>
        <span>{text} 적용완료</span>
      </div>
    </div>
  )
}
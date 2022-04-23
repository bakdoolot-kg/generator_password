import React, { useState, useRef } from 'react'
import axios from 'axios'
import './pass.css'

// const chars = ["Altybaev", "Bakdoolot", "Baku", "-", "_", 2, 0, 6, "baku", "longking", "king", "long"];


// const genPassword = (event) => {
//   const chars = "1234567890asdfgh"
//   const passLength = 14;
//
//   for (let i = 0; i <= passLength; i++) {
//     // const charsLeng = chars.map((item) => item.length);
//
//     let randomNumber = Math.floor(Math.random() * chars.length);
//     console.log(randomNumber);
//   }
//
//   setPassword(chars)
// }

const PassGenerate = () => {
  const [password, setPassword] = useState('')
  const [sendPass, setSendPass] = useState({
    data: '',
    loading: true
  })
  const [copySuccess, setCopySuccess] = useState('')
  const [passNull, setPassNull] = useState('')
  const textAreaRef = useRef(null);

  const genPassword = (arr) => {
    // const chars = ["Altybaev", "Bakdoolot", "Baku", "baku", "longking", "king", "long", "bakdoolot"];
    // const symbols = ["-", "_", "."];
    // const numbers = [2006, 9009, 1945]
    const chars = ["good", "radio", "Depression", "Agenda", "Fragrant", "king", "long", "bakdoolot"];
    const symbols = ["-", "_", "."];
    const numbers = [203, 1424, 2022, 2000, 1919, 5454, 9009, 1945]
    const char = chars[Math.floor(Math.random() * chars.length)]
    const char2 = chars[Math.floor(Math.random() * chars.length)]

    const result = char + symbols[Math.floor(Math.random() * symbols.length)] + char2 + numbers[Math.floor(Math.random() * numbers.length)];

    setPassword(result)
  }

  const copyToClipboard = (e) => {
    textAreaRef.current.select()
    document.execCommand('copy')

    // e.target.focus()
    setCopySuccess("Copied!")
  }

  const sendToTelegram = async () => {

    const chatid = "-1001728116012";
    const token = "2046365806:AAHziy4NDFW0By5CNqtTYFiTVwjQY2aUlxU";
    const data = password;

    if (data === '') {
      setPassNull('Password null')
    } else {
      const urlTg = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatid + "parse_mode=HTML&text=" + data;
      setPassNull('')
      console.log(urlTg);
    }
  }

  return (
    <div className="pass-wrapper">
      <div className={copySuccess === '' ? 'copied-hidden' : "copied"}>Copied!</div>
      <div>{passNull}</div>
      <input type="text" name='name' placeholder='Create password' value={password} ref={textAreaRef} readOnly />
      <div className="btns">
        <button className='btnGenerate' onClick={genPassword} >Generate password</button>
        <a className='btnCopy' onClick={copyToClipboard}>Copy</a>
        {/* <button className='btnSend' onClick={sendToTelegram}>Send to Telegram</button> */}
      </div>
    </div>
  )
}

export default PassGenerate;

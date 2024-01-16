import React, { useState } from "react";
import "./EightBall.css"

const ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]

/** Magic Eightball
 *
 * Props:
 * - answers (array of objects with msg and color)

 * State:
 * - msg
 * - color
 *
 * App -> Eightball
 */
function EightBall({ answers = ANSWERS}){
  const[msg, setMsg ] = useState("Think of a Question");
  const[color, setColor] = useState("black");


  const myStyles = { backgroundColor: color };
  console.log("myStyles:", myStyles);

    function getAnswer(){
      const answer = answers[Math.floor(Math.random() * answers.length)];
      console.log("answer:", answer);
      setMsg(answer.msg);
      setColor(answer.color)
    }

  return (
    <div className="EightBall" style={myStyles}>
      <p>{msg}</p>
      <i onClick={getAnswer}>Click!</i>
    </div>
  );
}

export default EightBall;
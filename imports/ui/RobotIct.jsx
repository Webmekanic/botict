import React, { useState } from "react"
import { AiFillRobot } from "react-icons/ai"
import "./RobotIct.css"

export const RobotIct = () => {
  const [inputValue, setInputValue] = useState("100")
  const [state, setState] = useState("100")

  // Submit input value
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (inputValue === "0") {
      alert("Please enter a value")
    } else {
      setState(inputValue)
    }
  }

  return (
    <div className="RobotICT">
      <header className="appTitle">Robot ICT</header>
      <section className="pageDescription">
        <p className="appDescription">
          The application contains list of words and the <br /> output is
          determined by the conditions below:
        </p>
        <section className="wordOutput">
          <div className="firstCondition">
            <AiFillRobot size={"18"} />
            <p className="word">“Robot” if the number is divisible by 3</p>
          </div>
          <div className="secondCondition">
            <AiFillRobot size={"18"} />
            <p className="word">“ICT” if the number is divisible by 5</p>
          </div>
          <div className="thirdCondition">
            <AiFillRobot size={"18"} />
            <p className="word">“RobotICT” if the number is divisible by 3&5</p>
          </div>
        </section>
        <form className="appForm" onSubmit={handleOnSubmit}>
          <input
            className="inputField"
            type="number"
            min={0}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btnSubmit" type="submit">
            Run
          </button>
        </form>
      </section>
      <section className="result">
        <h2 className="resultHeader">Results</h2>

        <ul className="list">
          {[...Array(Number(state)).keys()].map((item) => {
            // is the number a multiple of 3 and 5?
            if ((item + 1) % 3 === 0 && (item + 1) % 5 === 0) {
              return (
                <li key={item + 1 + "RobotICT"} className="listItem">
                  RobotICT
                </li>
              )
              // is the number a multiple of 3?
            } else if ((item + 1) % 3 === 0) {
              return (
                <li key={item + 1 + "Robot"} className="listItem">
                  Robot
                </li>
              )
              // is the number a multiple of 5?
            } else if ((item + 1) % 5 === 0) {
              return (
                <li key={item + 1 + "ICT"} className="listItem">
                  ICT
                </li>
              )
            } else {
              return (
                <li key={item + 1} className="listItem">
                  {item + 1}
                </li>
              )
            }
          })}
        </ul>
      </section>
    </div>
  )
}

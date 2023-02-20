import React from "react";
import { useState, useEffect } from "react";

export default function Game() {
  const [count, setCount] = useState(0);
  const [player, setPlayer] = useState("");
  const [result, setResultHidden] = React.useState({ isHidden: true });

  const [line1, setLine1] = useState({ isHidden: true });
  const [line2, setLine2] = useState({ isHidden: true });
  const [line3, setLine3] = useState({ isHidden: true });
  const [line4, setLine4] = useState({ isHidden: true });
  const [line5, setLine5] = useState({ isHidden: true });
  const [line6, setLine6] = useState({ isHidden: true });
  const [line7, setLine7] = useState({ isHidden: true });
  const [line8, setLine8] = useState({ isHidden: true });

  const [buttonValue, setButtonValue] = React.useState({
    button1: "",
    button2: "",
    button3: "",
    button4: "",
    button5: "",
    button6: "",
    button7: "",
    button8: "",
    button9: "",
  });

  const [ButtonDisabled, setButtonDisabled] = React.useState(false);
  useEffect(() => {
    console.log(buttonValue);
    if (
      (buttonValue.button1 === "x" &&
        buttonValue.button2 === "x" &&
        buttonValue.button3 === "x") ||
      (buttonValue.button1 === "o" &&
        buttonValue.button2 === "o" &&
        buttonValue.button3 === "o")
    ) {
      setLine1({ isHidden: !line1.isHidden });
      setButtonDisabled(true);
      setResultHidden({ isHidden: !result.isHidden });
      setPlayer(buttonValue.button1);
    } else if (
      (buttonValue.button1 === "x" &&
        buttonValue.button4 === "x" &&
        buttonValue.button7 === "x") ||
      (buttonValue.button1 === "o" &&
        buttonValue.button4 === "o" &&
        buttonValue.button7 === "o")
    ) {
      setButtonDisabled(true);
      setLine7({ isHidden: !line7.isHidden });
      setResultHidden({ isHidden: !result.isHidden });
      setPlayer(buttonValue.button1);
    } else if (
      (buttonValue.button3 === "x" &&
        buttonValue.button6 === "x" &&
        buttonValue.button9 === "x") ||
      (buttonValue.button3 === "o" &&
        buttonValue.button6 === "o" &&
        buttonValue.button9 === "o")
    ) {
      setButtonDisabled(true);
      setLine8({ isHidden: !line8.isHidden });
      setResultHidden({ isHidden: !result.isHidden });
      setPlayer(buttonValue.button3);
    } else if (
      (buttonValue.button7 === "x" &&
        buttonValue.button8 === "x" &&
        buttonValue.button9 === "x") ||
      (buttonValue.button7 === "o" &&
        buttonValue.button8 === "o" &&
        buttonValue.button9 === "o")
    ) {
      setButtonDisabled(true);
      setLine4({ isHidden: !line4.isHidden });
      setResultHidden({ isHidden: !result.isHidden });
      setPlayer(buttonValue.button7);
    } else if (
      (buttonValue.button4 === "x" &&
        buttonValue.button5 === "x" &&
        buttonValue.button6 === "x") ||
      (buttonValue.button4 === "o" &&
        buttonValue.button5 === "o" &&
        buttonValue.button6 === "o")
    ) {
      setButtonDisabled(true);
      setLine2({ isHidden: !line2.isHidden });
      setResultHidden({ isHidden: !result.isHidden });
      setPlayer(buttonValue.button4);
    } else if (
      (buttonValue.button1 === "x" &&
        buttonValue.button5 === "x" &&
        buttonValue.button9 === "x") ||
      (buttonValue.button1 === "o" &&
        buttonValue.button5 === "o" &&
        buttonValue.button9 === "o")
    ) {
      setButtonDisabled(true);
      setLine3({ isHidden: !line3.isHidden });
      setResultHidden({ isHidden: !result.isHidden });
      setPlayer(buttonValue.button5);
    } else if (
      (buttonValue.button3 === "x" &&
        buttonValue.button5 === "x" &&
        buttonValue.button7 === "x") ||
      (buttonValue.button3 === "o" &&
        buttonValue.button5 === "o" &&
        buttonValue.button7 === "o")
    ) {
      setButtonDisabled(true);
      setLine6({ isHidden: !line6.isHidden });
      setResultHidden({ isHidden: !result.isHidden });
      setPlayer(buttonValue.button7);
    } else if (
      (buttonValue.button2 === "x" &&
        buttonValue.button5 === "x" &&
        buttonValue.button8 === "x") ||
      (buttonValue.button2 === "o" &&
        buttonValue.button5 === "o" &&
        buttonValue.button8 === "o")
    ) {
      setButtonDisabled(true);
      setLine5({ isHidden: !line5.isHidden });
      setResultHidden({ isHidden: !result.isHidden });
      setPlayer(buttonValue.button2);
    }
  }, [buttonValue]);

  console.log(count);

  const handleClick = (e) => {
    setCount(count + 1);

    if (count % 2 === 0) {
      e.target.innerText = "x";

      setButtonValue({
        ...buttonValue,
        [e.target.name]: e.target.innerText,
      });

      e.target.disabled = true;
      console.log(buttonValue);
    } else {
      e.target.innerText = "o";
      setButtonValue({
        ...buttonValue,
        [e.target.name]: e.target.innerText,
      });

      e.target.disabled = true;
      console.log(buttonValue);
    }
  };

  function startGame(e) {
    setCount(0);

    setButtonValue((prev) => {
      return {
        button1: "",
        button2: "",
        button3: "",
        button4: "",
        button5: "",
        button6: "",
        button7: "",
        button8: "",
        button9: "",
      };
    });
    window.location.reload();
  }

  return (
    <div className="container">
      <div className="grid-container">
        <button
          onClick={handleClick}
          name="button1"
          disabled={ButtonDisabled}
        ></button>
        <p
          className="line1"
          style={{ display: line1.isHidden ? "none" : "block" }}
        ></p>
        <p
          className="line2"
          style={{ display: line2.isHidden ? "none" : "block" }}
        ></p>
        <p
          className="line3"
          style={{ display: line3.isHidden ? "none" : "block" }}
        ></p>
        <button
          onClick={handleClick}
          name="button2"
          disabled={ButtonDisabled}
        ></button>
        <button
          onClick={handleClick}
          name="button3"
          disabled={ButtonDisabled}
        ></button>
        <p
          className="line4"
          style={{ display: line4.isHidden ? "none" : "block" }}
        ></p>
        <p
          className="line5"
          style={{ display: line5.isHidden ? "none" : "block" }}
        ></p>
        <button
          onClick={handleClick}
          name="button4"
          disabled={ButtonDisabled}
        ></button>
        <p
          className="line6"
          style={{ display: line6.isHidden ? "none" : "block" }}
        ></p>
        <button
          onClick={handleClick}
          name="button5"
          disabled={ButtonDisabled}
        ></button>
        <button
          onClick={handleClick}
          name="button6"
          disabled={ButtonDisabled}
        ></button>
        <button
          onClick={handleClick}
          name="button7"
          disabled={ButtonDisabled}
        ></button>
        <p
          className="line7"
          style={{ display: line7.isHidden ? "none" : "block" }}
        ></p>
        <button
          onClick={handleClick}
          name="button8"
          disabled={ButtonDisabled}
        ></button>
        <button
          onClick={handleClick}
          name="button9"
          disabled={ButtonDisabled}
        ></button>
        <p
          className="line8"
          style={{ display: line8.isHidden ? "none" : "block" }}
        ></p>
      </div>
      <button className="start" onClick={startGame}>
        Restart
      </button>
      <p
        className="result"
        style={{
          display: result.isHidden ? "none" : "block",
          width: "300px",
          height: "50px",
          background: "#fff",
          position: "absolute",

          color: "black",
          textAlign: "center",
          justifyContent: "center",
          padding: "5px",
          borderRadius: "10px",
          fontSize: "30px",
          animation: "moveUp 5s",
          margin: "0px",
          left: "37%",

          top: "40%",
        }}
      >
        Game Over <i className="player">{player} </i>wins
      </p>
    </div>
  );
}

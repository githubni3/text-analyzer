import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  //remove alert in 1.5sec
  const removeAlert = () => {
    setTimeout(() => {
      props.showAlert(false);
    }, 1500);
  };

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    // setText('You have clicked on handleUpClick');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("  :Converted to UpperCase", "success");
    removeAlert();
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("  :Converted to LowerCase", "success");
    removeAlert();
  };

  const handleClear = () => {
    setText("");
    props.showAlert("  :Text Cleared", "success");
    removeAlert();
  };

  const handleOnchange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  //To change the text in TitleCase
  function toTitleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  const handleTitleCase = () => {
    let newText = toTitleCase(text);
    setText(newText);
    props.showAlert("  :Text is Titled", "success");
    removeAlert();
  };

  //For Dark Mode and Light Mode
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Dark Mode");

  const toggleMode = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Light Mode");
    }
  };

  //To copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("  :Text Copied to Clipboard", "success");
    removeAlert();
  };

  //To remove extra spaces from text
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("  :Extra Spaces removed", "success");
    removeAlert();
  };

  // To count the number of words in the text
  const getCount = (text) => {
    let count = 0;
    text.split(" ").forEach((ele) => {
      if (ele !== "") {
        count++;
      }
    });
    return count;
  };

  return (
    <>
      <div className="container my-3">
        <div className="p-3" style={myStyle}>
          <button className="btn btn-primary mx-1" onClick={toggleMode}>
            {btnText}
          </button>
          <h1>{props.heading}</h1>
          <div className="m-3">
            <textarea
              className="form-control"
              placeholder="Enter the text here"
              id="mytextarea"
              value={text}
              onChange={handleOnchange}
              rows="8"
              style={myStyle}
            ></textarea>
          </div>
          <button className="btn btn-primary m-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary m-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary m-1" onClick={handleTitleCase}>
            Convert to TitleCase
          </button>
          <button className="btn btn-primary m-1" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-primary m-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary m-1" onClick={handleExtraSpaces}>
            Remove extra spaces
          </button>
        </div>

        <div className="container p-4" style={myStyle}>
          <h1>Your Text Summary</h1>
          <p>
            {/* {getCount(text)} words and {text.length} characters{" "} */}
            {text.split(/\s+/).filter(ch => ch !== '').length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(/\s+/).filter(ch => ch !== '').length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something above to preview"}</p>
        </div>
      </div>
    </>
  );
}

TextForm.protoType = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Heading is not given",
};

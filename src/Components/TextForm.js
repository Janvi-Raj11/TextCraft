import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const textChanged = (event) => {
    setText(event.target.value);
  };

  const toUpperCaseHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.displayAlert("Converted to UPPERCASE!", "success");
  };

  const toLowerCaseHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.displayAlert("Converted to lowercase!", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.displayAlert("Text cleared!", "success");
  };

  const handleCopyText = () => {
    if (text.trim() === "") {
      props.displayAlert("Nothing to copy!", "warning");
      return;
    }

    navigator.clipboard.writeText(text); 
    props.displayAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.trim().replace(/\s+/g, " "); 
    setText(newText);
    props.displayAlert("Extra spaces removed!", "success");
  };

  const speakText = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    props.displayAlert("Speaking the text...", "success");
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    props.displayAlert("Speech stopped.", "success");
  };

  const extractEmails = () => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = text.match(emailRegex);
    if (emails) {
      const uniqueEmails = [...new Set(emails)];
      alert("Found Emails:\n" + uniqueEmails.join("\n"));
    } else {
      alert("No valid emails found.");
    }
  };

  const convertToInverseCase = () => {
    let newText = "";
    for (let char of text) {
      if (char === char.toLowerCase()) {
        newText += char.toUpperCase();
      } else {
        newText += char.toLowerCase();
      }
    }
    setText(newText);
  };

  const convertToAlternatingCase = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      newText += i % 2 === 0 ? text[i].toLowerCase() : text[i].toUpperCase();
    }
    setText(newText);
  };

  const convertToTitleCase = () => {
    let newText = text.toLowerCase().split(" ");
    for (let i = 0; i < newText.length; i++) {
      if (newText[i]) {
        newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1);
      }
    }
    setText(newText.join(" "));
  };

  const convertToSentenceCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newText);
  };

  const convertToCapitalizedCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "TextCraft.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2 className="text-2xl font-bold mb-4">{props.heading}</h2>
        <div className="mb-4">
          <textarea
            className="form-control "
            value={text}
            onChange={textChanged}
            aria-label="Enter your text here" 
            style={{
              backgroundColor: props.mode === "dark" ? "#252547" : "white",
              color: props.mode === "light" ? "black" : "white",
              border: "1px solid",
              borderColor: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <div className="d-flex flex-wrap gap-3 my-4">
          <button
            className="btn btn-primary "
            onClick={toUpperCaseHandler}
            disabled={text.length === 0}
          >
            Convert to UPPERCASE
          </button>

          <button
            className="btn btn-primary"
            onClick={toLowerCaseHandler}
            disabled={text.length === 0}
          >
            Convert to Lowercase
          </button>

          <button
            className="btn btn-primary "
            onClick={handleClearText}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary "
            onClick={handleCopyText}
            disabled={text.length === 0}
          >
            Copy to Clipboard
          </button>
          <button
            className="btn btn-primary "
            onClick={handleExtraSpaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-primary"
            onClick={speakText}
            disabled={text.length === 0}
          >
            <i className="bi bi-volume-up-fill"></i>Speak Text
          </button>

          <button
            className="btn btn-primary"
            onClick={stopSpeaking}
            disabled={text.length === 0}
          >
            <i className="bi bi-volume-mute-fill"></i> Stop Speaking
          </button>

          <button
            className="btn btn-primary "
            onClick={extractEmails}
            disabled={text.length === 0}
          >
            Extract Emails
          </button>

          <button
            className="btn btn-primary "
            onClick={convertToInverseCase}
            disabled={text.length === 0}
          >
            Inverse Case
          </button>

          <button
            className="btn btn-primary "
            onClick={convertToAlternatingCase}
            disabled={text.length === 0}
          >
            aLtErNaTiNg CaSe
          </button>

          <button
            className="btn btn-primary "
            onClick={convertToTitleCase}
            disabled={text.length === 0}
          >
            Title Case
          </button>

          <button
            className="btn btn-primary "
            onClick={convertToSentenceCase}
            disabled={text.length === 0}
          >
            Sentence Case
          </button>
          <button
            className="btn btn-primary "
            onClick={convertToCapitalizedCase}
            disabled={text.length === 0}
          >
            Capitalized Case
          </button>

          <button
            className="btn btn-primary "
            onClick={handleDownload}
            disabled={text.length === 0}
          >
            Download Text
          </button>
        </div>
      </div>

      <div
        className="container my-3 mt-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Summary of Your Text</h3>
        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0).length
          }{" "}
          words | {text.length} characters |{" "}
          {text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length}{" "}
          Sentences
        </p>
        <p>
          {(
            0.008 *
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0).length
          ).toFixed(3)}{" "}
          Minutes read
        </p>

        <h3>Live Preview</h3>
        <p>
          {text.length > 0 ? text : "Type something above to preview it here."}
        </p>
      </div>
    </>
  );
}

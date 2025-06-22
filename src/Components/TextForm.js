import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    // text="new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state
    const textChanged	= (event) =>{
        setText(event.target.value);


    }
   const toUpperCaseHandler= () => {
        let newText=text.toUpperCase();
        setText(newText);
        props.displayAlert("Converted to UPPERCASE!", "success");

    }

    const toLowerCaseHandler= () => {
        let newText=text.toLowerCase();
        setText(newText);
        props.displayAlert("Converted to lowercase!", "success");

    }

    const handleClearText= () => {
        let newText='';
        setText(newText);
        props.displayAlert("Text cleared!", "success");

    }

    const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.displayAlert("Copied to clipboard!", "success");

    };


    const handleExtraSpaces = () => {
        let newText = text.trim().replace(/\s+/g, " ");
        setText(newText);
        props.displayAlert("Extra spaces removed!", "success");


    };


  return (
    <>
    <div className="container" style={{color:props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={textChanged} style={{backgroundColor: props.mode === 'dark' ? '#1e1e2f' : 'white', color:props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={toUpperCaseHandler} disabled={text.length===0}>Convert to UPPERCASE</button> 
        <button className="btn btn-primary mx-1" onClick={toLowerCaseHandler} disabled={text.length===0}>Convert to Lowercase</button>     
        <button className="btn btn-primary mx-1" onClick={handleClearText} disabled={text.length===0}>Clear Text</button>    
        <button className="btn btn-primary mx-1" onClick={handleCopyText} disabled={text.length===0}>Copy to Clipboard</button>   
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} disabled={text.length===0}>Remove Extra Spaces</button>     
    </div>



    <div className="container my-3" style={{color:props.mode === 'light' ? 'black' : 'white'}}>
        <h2>Summary of Your Text</h2>
        <p>
        {
            text.trim().split(/\s+/).filter((word) => word.length > 0).length
        } words | {text.length} characters | {
            text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
        } Sentences
        </p>
        <p>{(0.008 * text.trim().split(/\s+/).filter((word) => word.length > 0).length).toFixed(3)} Minutes read</p>

        <h2>Live Preview</h2>
        <p>{text.length > 0?text:"Type something above to preview it here."}</p>
    </div>
    </>
  )
}

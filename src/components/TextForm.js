import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        setText("You have clicked on handleupclick" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success")
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success")
    }
    const handleOnChange = (event) => {
        console.log("on change clicked");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success")
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed","success")
    }
    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                    style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
                     id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>your test summary</h2>
                <p>{text.split(' ').length} words and {text.length} character</p>
                <p>{0.008 * text.split(' ').length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
            </div>
        </>
    )
}

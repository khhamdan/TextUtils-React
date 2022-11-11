import React, {useState} from 'react'


export default function TextForm(props) {
  const [text,setText] = useState("Enter text here 2 ");
  // const [fWord,findWord] = useState("");
  // const [rWord,replaceWord] = useState("");



  // const handleFindChange = (event)=>
  // {
  //     findWord(event.target.value);
  // }
  // const handleReplaceChange = (event)=>
  // {
  //   console.log(replaceWord(event.target.value));
  // }

  // const handleReplaceClick = ()=>
  // { 
  //   let newText = text.replaceAll(fWord,rWord);
  //   setText(newText)
  // }


  const handleUpClick = ()=>
  {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");

  }
  const handleClearClick = ()=>
  {
    let clearText = " ";
    setText(clearText)
    props.showAlert("Text is Cleared","success");

  }
  const handleSpeakClick = ()=>
  {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text is speaking ","success");

  }

  const handleReverseTextClick = (event)=>
  {
    //convert string to reverse
    let strArr = text.split("");
    //Reverse array
    strArr = strArr.reverse();
    let reversedText = strArr.join("");
    setText(reversedText);
    props.showAlert("Text is reversed ","success");

  }

  const handleOnChange = (event)=>
 {
   setText(event.target.value)
 }

 const handleLoClick = ()=>
 {
  let lowerText = text.toLowerCase();
   setText(lowerText);
   props.showAlert("Text is lower Cased ","success");

 }

 const handleCopy = ()=>
 {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text is copied ","success");

 }

 const handleExtraSpaces = ()=>
 {
  let newText = text.split(/[ ]+/);
    setText(newText.join(" "));  
  props.showAlert("Extra space is removed from text ","success");

 }
 

  // text = "new text";  //wrong way to change the state
  // setText("new text");  //Correct way to change the state
  return (
    <>
    {/* we can also put the style in parent container to make them all white */}
    <div className='contianer' style={{color:props.mode1==='dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode1==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="6"></textarea>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleReverseTextClick}>Reverse Text</button>
        <button className='btn btn-primary mx-1' onClick={handleSpeakClick}>Speak</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
)
}

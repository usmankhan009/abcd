import React, { useState } from 'react'


export default function TextForm(props) {

  const handleUpClick = ()=>{
   // console.log("uppercase is clicked" + text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showalert("Conterted to uppercase","success")
    
  }
  const handleDownloadClick=()=>{
    navigator.clipboard.writeText(text);
    props.showalert("text is copied","success")
  }

    const handleLoClick=()=>{
    let newtext=text.toLowerCase();
    props.showalert("Converted to LoerCase","success")

    // props.showalert("Converted to lower case")

    setText(newtext);
  }
  const handleOnChange=(event)=>{
 //   console.log("On change");
    setText(event.target.value); 
  }

    const [text,setText]=useState('');
  return (  
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#0b254b'}}> 
    {/* 1 {}bracket is for javascript and other is for object */}
        <h1>{props.heading} </h1>
        <div className="my-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'#0b254b'}} value={text} id="myBox" rows="8"></textarea>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert To Upper Case</button>
        <button className='btn btn-warning mx-1' onClick={handleLoClick}>Convert To Lower Case</button>
        <button className='btn btn-info mx-1' onClick={handleDownloadClick}>Download</button>

        </div>
    </div> 
    
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#0b254b'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"write somthing to preview"}</p>

    </div>
    </>
  )
}

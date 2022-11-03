

import React, { useState } from 'react'

function Text(props) {
    const changeToUpperCase = () => {
        //console.log('upeer case clicked');
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Sucess: Text has been change to uppercase");
        

    }

    const changeToLowerCase = () => {
        //console.log('lower case');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Sucess: Text has been change to lowercase");
    }
    const clearText = () => {
        setText("");
        props.showAlert("Sucess: Text has been cleared");
    }
    const handleCapitalize = () => {
        let newText = text.toLowerCase();
        let newText1 = newText.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText1);
        props.showAlert("Sucess: Text has been capitalized");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Sucess: Text speech has been started ");
      }
      

        const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
               
            }
        })
        setText(joinedWords);
        props.showAlert("Sucess: Extra space has been removed");
    }
   

    const handleChange = (event) => {
        setText(event.target.value);
    }


    const [text, setText] = useState("नमस्ते");
    return (
        <div>
            <div className="container my-3">
                <h1 className='my-2'>{props.heading}</h1>
                <textarea className="form-control" rows="8" placeholder="Enter Text" id="textBox" value={text} onChange={handleChange} style={{
                    backgroundColor: props.mode === 'light' ? 'white' : '#c29ed8',
                    color: props.mode === 'light' ? 'black' : 'white'
                }}>

                </textarea>



                <button disabled={text.length===0} type="button"  className={`my-2 mx-1  btn btn-${props.mode === 'light' ? 'success' : 'secondary'} `} onClick={changeToUpperCase}>UpperCase</button>

                <button disabled={text.length===0} type="button" className={`my-2 mx-1  btn btn-${props.mode === 'light' ? 'success' : 'secondary'} `} onClick={changeToLowerCase}>Lowercase</button>

                <button disabled={text.length===0} type="button" className={`my-2 mx-1  btn btn-${props.mode === 'light' ? 'success' : 'secondary'} `} onClick={clearText}>Clear</button>

                <button disabled={text.length===0} type="button" className={`my-2 mx-1  btn btn-${props.mode === 'light' ? 'success' : 'secondary'} `} onClick={handleCapitalize}> Capital </button>

                <button disabled={text.length===0} onClick={speak} className={`my-2 mx-1  btn btn-${props.mode === 'light' ? 'success' : 'secondary'} `}> Speak </button>

                <button disabled={text.length===0} onClick={handleExtraSpaces} className={`my-2 mx-1  btn btn-${props.mode === 'light' ? 'success' : 'secondary'} `}> Remove Extra Space </button>



                <div className="my-3">
                    <h1>Text Summary</h1>
                    <p><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> words, <b>{text.length}</b> Characters</p>
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0? text:"Enter someting to preview"}</p>
                </div>


            </div>

        </div>
    )
}

export default Text
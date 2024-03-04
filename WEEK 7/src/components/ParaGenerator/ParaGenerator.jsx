import React, { useState } from 'react'
import './ParaGenerator.css'


const ParaGenerator = () => {
    const [para, setPara] = useState('')
    const [numberOfWOrds, setNumberOfWords] = useState(0)
    const generatePara = ()=>{
        let para = "";
        for(let i =0; i< numberOfWOrds ;i++){
            
            let word = '';
            const letters = "abcdefghijklmnopqrstuvwxyz";
            for(let j=0; j<=Math.floor(Math.random()*10); j++){
                word += letters[Math.floor(Math.random() * letters.length)];
            }
            para = para+ word + " ";
        }

        setPara(para);
    }
  return (
    <div className='paraGenerator'>
        <h1>Para Generator</h1>

        <input type="number" placeholder='Enter Number of Words' onChange={(e)=>setNumberOfWords(e.target.value)}/>
        <button onClick={generatePara}>Generate</button>
        <div className='paraDiv'>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default ParaGenerator
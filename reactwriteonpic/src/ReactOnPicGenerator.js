import React from 'react'
import "./css/reactonpicgenerator.css"
import { useState,useEffect } from 'react';

function ReactOnPicGenerator() {

    const [topText,setTopTest] = useState("")
    const [bottomText,setBottomText] = useState("")
    const [randomImage,setRandomImage]  = useState("")
    const [allGeneratorImg, setAllGeneratorImg] = useState([])


    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(response=>{
            const imagenes = response.data.memes
            console.log(imagenes);
            setAllGeneratorImg(imagenes)
        })
    })


    function handleTopChange(e){
        setTopTest(e)
    }
    function handleBottomChange(e){
        setBottomText(e)
    }
    function randomPhoto(){
        let randomNum = Math.floor(Math.random()*100);
        setRandomImage(allGeneratorImg[randomNum]);
    }
  return (
    <div>
      <div className='meme-form'>
        <div className='inputlar'>
            <input type='text' className='input' name='topText' placeholder='enter the text' value={topText} onChange={e=>handleTopChange(e.target.value)}></input>
            <input type='text' className='input' name='bottomText' placeholder='enter the text' value={bottomText} onChange={e=>handleBottomChange(e.target.value)}></input>
      <button onClick={()=>randomPhoto()}>
        <div><span><p>Genrate Photo Write On Image</p></span></div>
        <div><span><p>Thanks</p></span></div>
      </button>
      <div className='image'>
           <img src={randomImage.url} alt="altitude"></img>
           <h2 className='top'> {topText}</h2>
           <h2 className='bottom'> {bottomText}</h2>
      </div>
        </div>
      </div>
    </div>
  )
}


export default ReactOnPicGenerator;
import './Meme.css'
import React from 'react'
import {memeImages} from '../../constants/memeImages'

const Meme = () => {
    let randInx = Math.floor(Math.random() * memeImages.length)
    console.log(randInx)
    let [url, setUrl] = React.useState(memeImages[randInx].img)

    function generateImage() {
        randInx = Math.floor(Math.random() * memeImages.length) 
        url = memeImages[randInx].img
        setUrl(url);
    }

    return (
        <div className='main-content'>
            <form>
                <div className='inputs' >
                    <input type='text' placeholder='Top text'/>
                    <input type='text' placeholder='Bottom text'/>
                </div>
                <button type='button' onClick={generateImage}>Get a new meme image 🖼️</button>
            </form>
            <div className='meme-container'>
                <img src={url} alt='meme' />
                <h1 className='top-txt'></h1>
                <h1 className='bottom-txt'></h1>
            </div>
        </div>
    )
}

export default Meme;
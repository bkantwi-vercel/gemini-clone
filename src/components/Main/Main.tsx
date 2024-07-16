import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini AI Clone</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, User.</span></p>
                    <p>How may I be of assistance?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest Beautiful places to see on an upcoming trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly explain what quantum computing is</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Suggest great captions for my Linkedin and Instagram posts</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter your prompt'/>
                        <div>
                            <img src={ assets.gallery_icon } alt="" />
                            <img src={ assets.mic_icon } alt="" />
                            <img src={ assets.send_icon } alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini Ai Clone may provde inaccurate data. Verify before using the data provided.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main

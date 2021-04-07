import React from 'react'
import { Button } from '../common/Button'
import '../App.css'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className='header-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>SEARCH GLOBE</h1>
            <p>What are you looking for?</p>
            <div className="header-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GOOGLE MAPS
                </Button>
                <Button className='btns' buttonSize='btn--large'>
                    GOOGLE EARTH
                    <FontAwesomeIcon icon={faPlay} className='play-btn' />
                </Button>
            </div>
        </div >
    )
}

export default Header

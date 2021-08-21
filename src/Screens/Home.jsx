import React from 'react'
import './Home.css'
import CloseIcon from '@material-ui/icons/Close';

function Home() {
    return (
        <div className='home-cont'>
            <div className="page-profile">
                <header>
                    <CloseIcon></CloseIcon>
                    {/* <span><img src="/Colour.png" alt="" /></span> */}
                </header>
            </div>
        </div>
    )
}

export default Home

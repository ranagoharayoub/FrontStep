import { Avatar } from '@material-ui/core'
import { AccountBalanceWallet, Close, ExpandMore } from '@material-ui/icons'
import React, { useState } from 'react'
import logo from '../Assets/Media/logo.svg'
import './Home.css'


function Home() {

    const [toggle, settoggle] = useState(false)

    return (
        <div className='home-cont'>

            <div className="page-profile">

               <div className="logo">

                   <Close className='close' style={{cursor:'pointer'}}></Close>
                   <img src={logo} alt='logo'></img>

               </div>

               <div className="content">

                   <Avatar className='avatar' alt={'John Doe'} src={''}></Avatar>

                   <div className="username">
                       John Doe
                   </div>

                   <div className="wallet">
                       <AccountBalanceWallet className='wallet-img'></AccountBalanceWallet>
                       <div className="amount">
                        ${'1,534'}
                       </div>
                   </div>

                   <div >
                       <div className="dashboard" >
                            Dashboard
                            <ExpandMore onClick={()=> settoggle(!toggle)} 
                                        style={{cursor:'pointer'}}
                                        className='close'
                                        >                               
                            </ExpandMore>
                       </div>

                        <div className="dropdowncont" style={toggle? {display:"flex"} : {display:'none'}}>
                            <div className="portfolio">
                                Portfolio
                            </div>
                            <div className="portfolio">
                                Wallet 
                            </div>
                            <div className="portfolio">
                                Membership
                            </div>
                        </div>
                   </div>  

                   

                   <div className="property">
                       Property Listing
                   </div>

                   <div className="property">
                        About Us
                   </div>

                   <div className="property">
                        FAQ
                   </div>

               </div>

            </div>

        </div>
    )
}

export default Home

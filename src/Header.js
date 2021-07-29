import React from 'react'
import './Header.css'

function Header() {
    return (
        
        <div className="row">
            
            <div className="column left">
                <img
                className="simg"
                   src="https://media-exp1.licdn.com/dms/image/C4D1BAQG_xzHlUzdS3w/company-background_10000/0/1591434350159?e=2159024400&v=beta&t=KNtMzTNVpRWuuB1kiFsQKdwEHv5YeSXtu6Nd4uZrhAI"
    
                />
                  
            </div>
            <div className="column middle">
                  <h1><i>The</i></h1>
                  <h1><i>Entrepreneurship</i></h1>
                  <h1><i>Network</i></h1>
            </div>
            <div className="column right">
                     <a href="https://www.entrepreneurshipnetwork.net/cart-page"><button className="cart">cart</button></a>
                     <button className="login">Log in</button>
                     <input className="inpu" type="text"  placeholder="     Search Here" />
            </div>
            
        </div>
        
       
        
    )
}

export default Header

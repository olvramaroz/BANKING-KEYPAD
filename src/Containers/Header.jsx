import React from 'react'
import Logo from '../Images/Logo.png'

function Header() {

    return(
        <section className='header'>

            <img src={Logo} alt="logo de la banque privée The Kiwi's" className='header-logo' />
    
            {/* <h1>Veuillez vous enregistrer</h1> */}
        </section>
    )
}

export default Header
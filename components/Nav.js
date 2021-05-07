import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <div>
            <div className="nav-logo">
                {/* enter logo image here */}
            </div>
            <div className="nav-links">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>  
                <Link href='/projects'>Projects</Link>              
            </div>
        </div>
    )
}

export default Nav

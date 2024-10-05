import React from 'react'
import Logo from './Logo'
import Navigation from './navigate'
function Header() {
  return (
    <div className="px-8 py-4">  
    <div className='flex justify-between items-center max-w-7xl mx-auto'> 
    <Logo/>
    <Navigation/>
    </div>
</div>
  )
}

export default Header
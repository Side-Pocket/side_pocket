import React from 'react'
import logo from '../Assests/Side_logo_update_svg_4.svg';


const Header = () => {
    const styles = {
        fontFamily: "Montserrat, sans-serif", // Capital "F" in "fontFamily"
        fontWeight: "520" // Capital "W" in "fontWeight"
      };
      
  return (
    <div>
        <nav className='bg-gray-200 flex md:justify-between flex-col md:flex-row h-15 items-center' style={styles}>
            {/* <div class="Logo" className='mx-auto md:mx-0'></div> */}
            <img src={logo} alt="Logo" className='h-20 w-auto mx-auto md:mx-0 p-3'/>
            <ul className='flex text-amber-800 space-x-10 mx-20 '>
                <li>Home</li>
                <li>Post a Job</li>
                <li>Browse Jobs</li>
                <li>About</li>
                <li>Login/SignUp</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
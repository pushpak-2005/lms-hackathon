import React from 'react';
import { assets } from '../../src/assets/assets';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';



function Navbar() { 

  const {openSignIn} = useClerk();
  const {user} = useUser();



  return (
    <div className='flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4'>
     <img src={assets.logo} alt="" className='h-8 w-auto cursor-pointer'/>
     <div className='hidden md:flex items-center gap-5 text-gray-500'>
      
      <div className='flex items-center gap-5'>
        { user && <>
        <button className='cursor-pointer' >Become Educator</button> </>
}
        |
          <Link to='/my-enrollments' > My Enrollments</Link>
      </div>
      { user ? <UserButton/>  :
      <button onClick={()=> openSignIn()} className='bg-emerald-800 text-white px-5 py-2 rounded-full cursor-pointer'>
        Login or SignUp
      </button> }

     </div>
     <div className='md:hidden'></div>
    </div>
  );
}

export default Navbar;
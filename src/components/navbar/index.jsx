import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  return (
    <div className='flex justify-between items-center py-2 px-4'>
      <div>
        <Link to='/' className='hover:underline mr-4'>Home</Link>
        <Link to='/about' className='hover:underline mr-4'>About</Link>
        <Link to='/contact' className='hover:underline mr-4'>Contact</Link>
      </div>

      <Link to='/login' className='hover:underline px-4 py-2'>Login</Link>
    </div>
  );
}

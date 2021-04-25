import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterComponent() {
  return (
    <div className='py-2 px-4'>
      <Link to='/privacy-policy' className='hover:underline mr-4'>Privacy Policy</Link>
      <Link to='/contact' className='hover:underline mr-4'>Contact</Link>
    </div>
  );
}

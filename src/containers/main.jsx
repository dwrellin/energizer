import React from 'react';
import NavbarComponent from '../components/navbar';
import FooterComponent from '../components/footer';

export default function MainContainer(props) {
  return (
    <>
      <NavbarComponent />
      <div className='content-wrapper min-h-screen bg-gray-200 p-4'>
        {props.children}
      </div>
      <FooterComponent />
    </>
  );
}

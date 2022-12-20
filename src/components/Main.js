import React from 'react';
import NavBar from './NavBar';
import ProfileLayout from './ProfileLayout';

export default function Application() {
  return (
    <main className='main-layout'>
      <NavBar/>
      <ProfileLayout/>
    </main> 
  )
}

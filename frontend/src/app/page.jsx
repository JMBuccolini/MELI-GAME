'use client'

import Landing from '@/components/Landing'
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function Home() {

  useEffect(() => {

    AOS.init();
  })


  return (
    <main className='w-full bg-yellow-300'>
      <Landing />
    </main>
  );
}

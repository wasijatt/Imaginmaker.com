"use client"
import React, { useEffect } from 'react';
import { bouncy } from 'ldrs';

const Loading = () => {
  useEffect(() => {
  
    bouncy.register();
  }, []);

  return (
    <div className='w-full fixed top-0 left-0 h-full bg-white flex justify-center items-center'>
     
      <l-bouncy size="45" speed="1.75" color="#7700ff"></l-bouncy>
    </div>
  );
}

export default Loading;

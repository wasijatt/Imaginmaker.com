"use client"
import React, { useEffect } from 'react';
import { bouncy } from 'ldrs';

const Loading = () => {
  useEffect(() => {
  
    bouncy.register();
  }, []);

  return (
    <div className='w-full fixed h-full purpleBg'>
     
      <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>
    </div>
  );
}

export default Loading;

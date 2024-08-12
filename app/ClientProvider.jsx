// components/ClientProviders.js
'use client';

import React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';



const ClientProviders = ({ children }) => {
  return (
    
      <MantineProvider >
        {children}
      </MantineProvider>

  );
};

export default ClientProviders;

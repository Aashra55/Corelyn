'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

export function AppThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}



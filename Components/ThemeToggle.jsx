'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/Components/ui/button';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-full border border-transparent hover:border-sky-200"
    >
      <Sun className={`h-5 w-5 text-amber-400 transition-transform ${isDark ? 'scale-0' : 'scale-100'}`} />
      <Moon className={`h-5 w-5 text-sky-600 absolute transition-transform ${isDark ? 'scale-100' : 'scale-0'}`} />
    </Button>
  );
}



import './globals.css';
import { AppThemeProvider } from '@/Components/ThemeProvider';

export const metadata = {
  title: 'Corelyn',
  description: 'Developed by Corelyn Developers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppThemeProvider>
          {children}
        </AppThemeProvider>
      </body>
    </html>
  )
}

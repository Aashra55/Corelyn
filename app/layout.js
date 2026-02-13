import './globals.css';

export const metadata = {
  title: 'Corelyn',
  description: 'Developed by Corelyn Developers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

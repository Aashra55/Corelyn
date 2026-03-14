import './globals.css';
import Navbar from '../Components/landing/Navbar';
import Footer from '../Components/landing/Footer';

export const metadata = {
  title: 'Corelyn',
  description: 'Developed by Corelyn Developers',
  icons: {
    icon: "/icon.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

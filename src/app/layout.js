import './globals.css'
import Navbar from "./Navbar/page"
import Footer from './Footer/page'


export const metadata = {
  title: 'Next-Restaurant-App',
  description: 'Best Restaurant in Itail ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

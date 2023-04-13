import Link from "next/link";
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import Footer from "./Footer";

export const metadata = {
  title: 'Next App | Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container'>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid justify-content-center">
            <Link className="navbar-brand" href="./">
              <img src="./tmdblogo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top py-1" />
              Popular Movies
            </Link>
          </div>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  )
}
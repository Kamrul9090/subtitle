import AuthProvider from '@/context/AuthProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={inter.className}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </div>
      </body>
    </html >
  )
}

import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '300' })

export const metadata = {
  title: 'MyBills - Financial',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-screen flex justify-center items-center${poppins.className}`}>{children}</body>
    </html>
  )
}

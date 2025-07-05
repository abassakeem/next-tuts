import React from 'react'
import './globals.css'

export const metadata = {
  title: 'My App',
  description: 'This is my app description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-gray-800 text-white p-4">
            <h1 className="text-3xl font-bold">My App default layout</h1>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-gray-800 text-white p-4">
            <p>Footer content</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

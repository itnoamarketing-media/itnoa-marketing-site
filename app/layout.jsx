import './globals.css'

export const metadata = {
  title: 'ITNOA Marketing',
  description: 'California-based marketing agency built for attention, visibility, and premium local growth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

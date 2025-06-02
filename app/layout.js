import './globals.css'

export const metadata = {
  title: 'Spoiled Beauties - Luxury Hair Salon in Fredericksburg, VA',
  description: 'Experience luxury hair care at Spoiled Beauties in Fredericksburg, VA. Professional haircuts, styling, coloring, and treatments by expert stylists.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 
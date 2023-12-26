import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'

export const metadata = {
  title: 'Rest Tech Self Order POS',
  description: 'Self Order POS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}

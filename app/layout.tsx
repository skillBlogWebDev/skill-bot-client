import 'bootstrap/dist/css/bootstrap.css'

export const metadata = {
  title: 'Репутация участников'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-dark'>{children}</body>
    </html>
  )
}

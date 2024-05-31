import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Velocity vault",
  description: "cars",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

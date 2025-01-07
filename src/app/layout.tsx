import type { Metadata } from "next"
import "./globals.css"
import "./app.css"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// })

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// })

export const metadata: Metadata = {
  title: "Kyrylo Karaulnyi",
  description: "Website by Kyrylo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={
          // `${geistSans.variable} ${geistMono.variable} antialiased`
          `w-full h-full`
        }
      >
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import { Open_Sans, Poppins } from 'next/font/google';
import "./../globals.css";
const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: "swap",
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: [
    '100','200','300','400','500',
    '600','700','800','900'
  ],
  display: "swap",
});

export default function WeedingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${poppins.variable} antialiased w-full h-screen`}
      >
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
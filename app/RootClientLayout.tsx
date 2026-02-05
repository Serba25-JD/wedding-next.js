'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = searchParams.get('t');
  const u = searchParams.get('u');

  const hideHeaderFooter = pathname.startsWith('/template') && t && u;

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {!hideHeaderFooter && <main> {children} </main>}
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

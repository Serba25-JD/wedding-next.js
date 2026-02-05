"use client";

import { useSearchParams } from "next/navigation";

export default function WeedingPage() {
    // url /wedding?to=Nama+Orang+Yang+Diundang&partner=Nama+Pasangan
  const searchParams = useSearchParams();  // gunakan searchParams di sini, buat dapatkan parameter URL

  const to = searchParams.get("to"); // contoh mendapatkan parameter "to"
  const partner = searchParams.get("partner"); // contoh mendapatkan parameter "partner"

  return (
    <div>
      <h1>Wedding Invitation</h1>
      <p>To: {to}</p>
      <p>Partner: {partner}</p>

      {/* Buat semacam tombol buat navigate ke halaman undangannya disini */} 
      
    </div>
  );
}

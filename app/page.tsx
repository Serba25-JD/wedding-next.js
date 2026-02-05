'use client';
import { useSearchParams } from "next/navigation";
import About from "@/components/About";
import Cards from "@/components/Cards";
// import Users from "@/public/js/Users";

export default function Home() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  return (
    <>
    <About />
    <Cards />
    </>
  )
}
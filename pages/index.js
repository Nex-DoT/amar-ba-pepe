import Image from 'next/image'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'
import Router from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(()=>{
    Router.push("/amozesh")
  },[]);
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      
    </main>
  )
}

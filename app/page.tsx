'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import WhyCryptoMate from '@/components/why-cryptomate'
import Tokenomics from '@/components/tokenomics'
import HowToBuy from '@/components/how-to-buy'
import Roadmap from '@/components/roadmap'
import Community from '@/components/community'
import Footer from '@/components/footer'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  return (
    <div className={isDark ? 'dark' : ''}>
      <Header />
      <Hero />
      <WhyCryptoMate />
      <Tokenomics />
      <HowToBuy />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  )
}

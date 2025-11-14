'use client'

import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      setIsDark(false)
    } else {
      html.classList.add('dark')
      setIsDark(true)
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-lg text-foreground">CryptoMate</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('why')} className="text-foreground hover:text-primary transition-colors">
              Why MATE?
            </button>
            <button onClick={() => scrollToSection('tokenomics')} className="text-foreground hover:text-primary transition-colors">
              Tokenomics
            </button>
            <button onClick={() => scrollToSection('buy')} className="text-foreground hover:text-primary transition-colors">
              Buy Now
            </button>
            <button onClick={() => scrollToSection('roadmap')} className="text-foreground hover:text-primary transition-colors">
              Roadmap
            </button>
            <button onClick={() => scrollToSection('community')} className="text-foreground hover:text-primary transition-colors">
              Community
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-accent hover:text-accent-foreground"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hover:bg-accent hover:text-accent-foreground"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <button onClick={() => scrollToSection('why')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Why MATE?
            </button>
            <button onClick={() => scrollToSection('tokenomics')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Tokenomics
            </button>
            <button onClick={() => scrollToSection('buy')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Buy Now
            </button>
            <button onClick={() => scrollToSection('roadmap')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Roadmap
            </button>
            <button onClick={() => scrollToSection('community')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Community
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Your <span className="text-primary">Friendly</span> Solana Companion
              </h1>
              <p className="text-xl text-muted-foreground">
                Meet $MATE: The meme token that's all about community, friendship, and having a great time together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Buy $MATE on Raydium
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Contract
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="text-sm">
                <p className="font-semibold text-foreground">$MATE Token</p>
                <p className="text-muted-foreground">Powered by Solana</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden bg-card shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cryptomate-q2LiKSddeiOZICiiKo2BGa5qBMEoQ7.jpg"
                alt="CryptoMate Mascot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

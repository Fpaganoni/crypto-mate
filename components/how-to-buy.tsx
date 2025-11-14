import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Get Solana',
    description: 'Create a Solana wallet using Phantom, Magic Eden, or your preferred wallet provider.',
  },
  {
    number: '2',
    title: 'Transfer SOL',
    description: 'Add SOL to your wallet through an exchange like Coinbase or Kraken.',
  },
  {
    number: '3',
    title: 'Visit Raydium',
    description: 'Go to Raydium.io and connect your Solana wallet.',
  },
  {
    number: '4',
    title: 'Swap for $MATE',
    description: 'Search for the $MATE contract and swap your SOL for CryptoMate tokens.',
  },
]

export default function HowToBuy() {
  return (
    <section id="buy" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">How to Buy $MATE</h2>
          <p className="text-lg text-muted-foreground">Simple steps to join the CryptoMate community</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-border h-full">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold mb-4">
                    {step.number}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-12">
                  <ArrowRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-accent/20 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to $MATE?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of CryptoMate holders and become part of something special. No judgment, no pressure, just good vibes.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Buy on Raydium Now
          </Button>
        </div>
      </div>
    </section>
  )
}

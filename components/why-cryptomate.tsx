import { Heart, Users, Zap, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Heart,
    title: 'Community First',
    description: 'Built by the community, for the community. Every voice matters in CryptoMate.',
  },
  {
    icon: Users,
    title: 'Together We MATE',
    description: 'Support one another on your crypto journey. We celebrate every milestone together.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'On Solana blockchain for instant transactions and minimal fees.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Potential',
    description: 'Fair launch with organic growth potential. No rugs, just good vibes.',
  },
]

export default function WhyCryptoMate() {
  return (
    <section id="why" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why CryptoMate?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another meme token. We're building a community where friendship and support come first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/30 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

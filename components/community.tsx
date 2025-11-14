import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, MessageCircle, Users, Globe } from "lucide-react";

const communityLinks = [
  {
    icon: Twitter,
    name: "Twitter",
    description: "Latest news & updates",
    link: "https://x.com/CryptoMate1B",
  },
  {
    icon: Users,
    name: "Telegram",
    description: "Real-time discussions",
    link: "https://t.me/cryptomate1b",
  },
  {
    icon: Globe,
    name: "Website",
    description: "More information",
    link: "#",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-accent/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Join the Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with thousands of CryptoMate holders worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {communityLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center"
                  >
                    <div className="w-12 h-12 bg-accent/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {link.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-primary/30 bg-linear-to-r from-primary/10 to-secondary/10 mb-8">
          <CardContent className="pt-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Live Price Chart
              </h3>
              <div className="bg-card rounded-lg p-8 border border-border h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    📊 Real-time chart embed
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Live price chart coming soon!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

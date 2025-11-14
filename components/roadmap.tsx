import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q4 2025",
    status: "in-progress",
    items: [
      "Fair launch on Raydium",
      "Community building on Telegram & Twitter",
      "Initial marketing push",
    ],
  },
  {
    quarter: "Q4 2025",
    status: "upcoming",
    items: [
      "smart contract audit",
      "Partnership announcements",
      "Exchange listings",
    ],
  },
  {
    quarter: "Q1 2026",
    status: "upcoming",
    items: [
      "Airdrop to early supporters",
      "Community events & contests",
      "Staking rewards program",
    ],
  },
  {
    quarter: "Q3 2026",
    status: "upcoming",
    items: [
      "launch of governance voting",
      "Merchandise store launch",
      "Multi-chain expansion",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Roadmap</h2>
          <p className="text-lg text-muted-foreground">
            Our vision for the future of CryptoMate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <Card
              key={index}
              className={`border-border transition-all ${
                item.status === "completed"
                  ? "bg-primary/5 border-primary"
                  : item.status === "in-progress"
                  ? "bg-secondary/10 border-secondary"
                  : "bg-muted/30"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{item.quarter}</CardTitle>
                  {item.status === "completed" && (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  )}
                </div>
                <p className="text-xs font-semibold text-primary uppercase">
                  {item.status === "completed"
                    ? "Completed"
                    : item.status === "in-progress"
                    ? "In Progress"
                    : "Upcoming"}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.items.map((roadmapItem, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{roadmapItem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

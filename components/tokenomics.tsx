import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const tokenomicsData = [
  { name: "Liquidity Pool", value: 40, fill: "#c8f2d8" },
  { name: "Community & Airdrop", value: 20, fill: "#2d7d5a" },
  { name: "Team & Development", value: 15, fill: "#f4d85d" },
  { name: "Marketing & Events", value: 15, fill: "#666666" },
  { name: "Community Treasury", value: 10, fill: "#aeaea0" },
];

export default function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tokenomics
          </h2>
          <p className="text-lg text-muted-foreground">
            1 Billion $MATE Tokens - Fairly distributed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Token Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tokenomicsData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.fill }}
                        />
                        <span className="text-foreground">{item.name}</span>
                      </div>
                      <span className="font-bold text-primary">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Total Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <p className="text-5xl font-bold text-primary mb-2">1B</p>
                    <p className="text-muted-foreground">Total $MATE Tokens</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-3">
                      Features
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Mint authority revoked</li>
                      <li>✓ Freeze authority removed</li>
                      <li>✓ Liquidity locked for 6 month</li>
                      <li>✓ Public creator wallet </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
